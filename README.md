# Angular Project

This is an Angular web application created using the Angular CLI.

## 🚀 Getting Started

### 1⃣ Install Node.js and Angular CLI  
Make sure you have **Node.js** installed. If not, download it from [Node.js Official Website](https://nodejs.org/).

Install Angular CLI globally:
```bash
npm install -g @angular/cli
```

### 2⃣ Create a New Angular Project  
Run the following command to create a new Angular app:
```bash
ng new my-angular-app
```
Navigate into the project folder:
```bash
cd my-angular-app
```

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

## 🌟 Commit Guidelines

1. **Create a Component**  
   If you create a new component, commit with a message like:  
   ```bash
   git commit -m "Create Component Name"
   ```

2. **Remove or Delete a Component**  
   If you remove or delete a component, commit with a message like:  
   ```bash
   git commit -m "Remove Component Name"
   ```

3. **Add Image Assets**  
   If you add images or other assets to the project, commit with a message like:  
   ```bash
   git commit -m "Add image assets"
   ```

4. **Edit README**  
   If you edit the README file, commit with a message like:  
   ```bash
   git commit -m "Update README 1.0V"
   ```

5. **File Updates with Versioning**  
   - If you update any file (e.g., a service, component, or other significant files), first **check the latest commit** for that file.
   - Start with **1.0** as the initial version.
   - After updating, increment the version number from **1.0** to **1.9** (e.g., 1.1, 1.2, etc.).
   - When reaching **1.9**, then increment to **2.0** for the next major update.

   For example, after updating a file (e.g., `component-name.component.ts`), you would commit like this:
   ```bash
   git commit -m "Update Component Name 1.1V"
   ```

   If you make another update:
   ```bash
   git commit -m "Update Component Name 1.2V"
   ```

   After reaching **1.9**:
   ```bash
   git commit -m "Update Component Name 2.0V"
   ```

---

## 🛆 Installing Dependencies  
If you clone this repository, install dependencies before running the project:
```bash
npm install
```

---

## 🔄 Commit Process and Pull Requests

1. **Create a new branch before making changes**
   ```bash
   git checkout -b feature-branch
   ```

2. **Commit changes** following the commit message format:
   ```bash
   git commit -m "Update README 1.0V"
   ```

3. **Push the branch to GitHub**
   ```bash
   git push origin feature-branch
   ```

4. **Create a pull request (PR)** and assign a reviewer.
   - Add a description with details:
     ```
     User name: Kalana001
     File Version: Readme
     Change: Create Readme
     ```

5. **Reviewer checks the PR**
   - If changes are approved, they comment:
     ```
     Review Done and Approved
     ```
   - Then, they merge the PR into `main`.

6. **Merge to main**
   ```bash
   git checkout main
   git merge feature-branch
   git push origin main
   ```

---


## 📦 Installing Dependencies  
If you clone this repository, install dependencies before running the project:
```bash
npm install
```

---

Happy coding!.. 🚀