const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'KAlana#23',
  database: 'autonexus',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.message);
  } else {
    console.log('Connected to the MySQL database');
  }
});

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, 'public', 'images');
    // Create directory if it doesn't exist
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, `profile-${uniqueSuffix}${ext}`);
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  }
});


const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(403).json({ message: 'Access denied. No token provided.' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token.' });
    }
    req.userId = decoded.id;
    next();
  });
};

// Customer registration
app.post('/api/cusregister', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    db.query(
      'INSERT INTO customers (username, email, password) VALUES (?, ?, ?)',
      [username, email, hashedPassword],
      (err, result) => {
        if (err) {
          return res.status(500).json({ message: 'User already exists or DB error' });
        }
        const token = jwt.sign({ id: result.insertId }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(201).json({ token });
      }
    );
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Customer login
app.post('/api/cuslogin', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'Email and Password are required' });

  db.query('SELECT * FROM customers WHERE email = ?', [email], (err, result) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    if (result.length === 0) return res.status(400).json({ message: 'Invalid credentials' });

    bcrypt.compare(password, result[0].password, (err, isMatch) => {
      if (err) return res.status(500).json({ message: 'Server error' });
      if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

      const token = jwt.sign({ id: result[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.status(200).json({ token });
    });
  });
});

// Logout
app.post('/api/cuslogout', (req, res) => {
  res.status(200).json({ message: 'Logged out successfully' });
});

// Get customer basic info
app.get('/api/user', authenticateJWT, (req, res) => {
  const userId = req.userId;
  db.query('SELECT * FROM customers WHERE id = ?', [userId], (err, result) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    if (result.length === 0) return res.status(404).json({ message: 'User not found' });

    const { password, ...userDetails } = result[0];
    res.status(200).json(userDetails);
  });
});

// Get total customer count
app.get('/api/customers/count', (req, res) => {
  db.query('SELECT COUNT(*) AS count FROM customers', (err, result) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    res.status(200).json({ count: result[0].count });
  });
});

// ✅ Corrected Update customer details
app.put('/api/customer/details', authenticateJWT, (req, res) => {
  const customerId = req.userId;
  const {
    first_name,
    middle_name,
    last_name,
    date_of_birth,
    phone_number,
    gender,
    address,
    province,
    district,
    postal_code,
    profile_picture
  } = req.body;

  // Check if row exists
  db.query('SELECT * FROM customer_details WHERE customer_id = ?', [customerId], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database error (checking existence)' });
    }

    if (result.length > 0) {
      // UPDATE existing row
      const updateQuery = `
        UPDATE customer_details SET
          first_name = ?, middle_name = ?, last_name = ?, date_of_birth = ?,
          phone_number = ?, gender = ?, address = ?, province = ?, district = ?,
          postal_code = ?, profile_picture = ?
        WHERE customer_id = ?
      `;
      db.query(
        updateQuery,
        [
          first_name, middle_name, last_name, date_of_birth, phone_number,
          gender, address, province, district, postal_code, profile_picture,
          customerId
        ],
        (err) => {
          if (err) {
            console.error('Error updating customer details:', err);
            return res.status(500).json({ message: 'Update failed' });
          }
          res.status(200).json({ message: 'Customer details updated successfully' });
        }
      );
    } else {
      // INSERT new row
      const insertQuery = `
        INSERT INTO customer_details (
          customer_id, first_name, middle_name, last_name, date_of_birth,
          phone_number, gender, address, province, district, postal_code, profile_picture
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;
      db.query(
        insertQuery,
        [
          customerId, first_name, middle_name, last_name, date_of_birth,
          phone_number, gender, address, province, district, postal_code, profile_picture
        ],
        (err) => {
          if (err) {
            console.error('Error inserting customer details:', err);
            return res.status(500).json({ message: 'Insert failed' });
          }
          res.status(201).json({ message: 'Customer details added successfully' });
        }
      );
    }
  });
});
// Profile image upload endpoint
app.post('/api/customer/upload-profile-image', authenticateJWT, upload.single('profile_image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const filename = req.file.filename;
  res.status(200).json({ filename });
});

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));
// Get customer profile details
app.get('/api/customer/details', authenticateJWT, (req, res) => {
  const customerId = req.userId;
  db.query('SELECT * FROM customer_details WHERE customer_id = ?', [customerId], (err, result) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    if (result.length === 0) return res.status(404).json({ message: 'No profile details found' });
    res.status(200).json(result[0]);
  });
});

// Get full profile
app.get('/api/customer/fullprofile', authenticateJWT, (req, res) => {
  const customerId = req.userId;

  const sql = `
    SELECT 
      c.id AS customer_id,
      c.username,
      c.email,
      cd.first_name,
      cd.middle_name,
      cd.last_name,
      cd.date_of_birth,
      cd.phone_number,
      cd.gender,
      cd.address,
      cd.province,
      cd.district,
      cd.postal_code,
      cd.profile_picture,
      cd.created_at AS profile_created_at
    FROM customers c
    LEFT JOIN customer_details cd ON c.id = cd.customer_id
    WHERE c.id = ?
  `;

  db.query(sql, [customerId], (err, result) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    if (result.length === 0) return res.status(404).json({ message: 'Customer not found' });
    res.status(200).json(result[0]);
  });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
