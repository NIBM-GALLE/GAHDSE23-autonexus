# Angular Project  

This is an Angular web application created using the Angular CLI.

---

## 🚀 Getting Started  

### 1⃣ Install Node.js and Angular CLI  
Ensure **Node.js** is installed. If not, download it from the [Node.js Official Website](https://nodejs.org/).  

Install Angular CLI globally:  
```bash
npm install -g @angular/cli
```

---

### 2⃣ Create a New Angular Project  
Create a new Angular application:  
```bash
ng new my-angular-app
```

Navigate into the project folder:  
```bash
cd my-angular-app
```

---

### 3⃣ Start the Development Server  
To run the application locally:  
```bash
ng serve
```

Open your browser and visit:  
```
http://localhost:4200/
```

---

## 🛠 Useful Angular Commands  

### Generate Components, Services, and More  
- Create a new **component**:  
  ```bash
  ng generate component component-name
  ```
  OR (short version):  
  ```bash
  ng g c component-name
  ```

- Create a new **service**:  
  ```bash
  ng generate service service-name
  ```
  OR:  
  ```bash
  ng g s service-name
  ```

---

### Build the Project  
To generate production-ready files:  
```bash
ng build --prod
```

---

## 🌱 Git & GitHub Commands  

### Initialize Git  
```bash
git init
```

### Add and Commit Files  
```bash
git add .
git commit -m "Initial commit - Angular setup"
```

### Create a New Branch  
```bash
git checkout -b feature-branch
```

### Push Code to GitHub  
1. Connect to GitHub (Replace with your repository link):  
   ```bash
   git remote add origin https://github.com/your-username/your-repo.git
   ```
2. Push changes:  
   ```bash
   git push -u origin main
   ```

### Switch Between Branches  
To switch to another branch:  
```bash
git checkout branch-name
```

To list all branches:  
```bash
git branch
```

---

## 🛆 Installing Dependencies  
If you clone this repository, install dependencies before running the project:  
```bash
npm install
```

---

## 🔄 Commit Process and Pull Requests  

1. **Create a new branch before making changes**:  
   ```bash
   git checkout -b your-name-1.0
   ```

2. **File Updates with Versioning**:  
   - Start with **1.0** as the initial version.  
   - Increment the version number sequentially (e.g., 1.1, 1.2, …, 1.9).  
   - After reaching **1.9**, increment to **2.0** for the next major update.  

3. **Commit changes** using the following format:  
   ```bash
   git commit -m "Release_Autonexus_1.0v"
   ```

4. **Push the branch to GitHub**:  
   ```bash
   git push origin your-name-1.0
   ```

5. **Create a pull request (PR)** and assign a reviewer.  
   - Add a detailed description:  
     ```
     User name: Kalana001  
     File Version: Autonexus_1.0v  
     Ticket name: #123  
     ```
   - The reviewer or another member merges the PR into `main`.

6. **Reviewer checks the PR**:  
   - If changes are approved, they comment:  
     ```
     Review Done and Approved
     ```  

7. **Merge to main**:  
   ```bash
   git checkout main
   git merge your-name-1.0
   git push origin main
   ```

8. **After Commit and Pull Request**:  
   - After committing, open a pull request and **assign it to one member**.  
   - **Another member or the same member** should be added as a reviewer.  
   - Once the review is completed and approved, the pull request can be merged into the main branch.  

---

## 📦 Installing Dependencies (After Cloning)  
If you clone this repository, install dependencies before running the project:  
```bash
npm install
```

---

Happy coding! 🚀  
When creating a branch, use your name and start the version at **1.0**.