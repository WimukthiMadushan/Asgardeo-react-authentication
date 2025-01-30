# React Authentication Using WSO2 Asgardeo

This is a React application that implements authentication using **WSO2 Asgardeo**. It provides secure user authentication and access control using Asgardeo’s OAuth2/OIDC-based authentication.

---

## 🚀 Features
- 🔑 **Authentication with WSO2 Asgardeo**
- 🔐 **Protected Routes** to restrict access
- 📦 **React Router Integration**
- 🎨 **Styled with Tailwind CSS & Material UI**
- 🌐 **Hosted on Vercel**

---

## 📂 Project Structure
📦 react-asgardeo-auth ┣ 📂 src ┃ ┣ 📂 Pages ┃ ┃ ┣ 📜 HomePage.js ┃ ┃ ┣ 📜 ContainerPage.js ┃ ┃ ┗ 📜 NotFoundPage.js ┃ ┣ 📜 App.js ┃ ┣ 📜 config.json ┃ ┗ 📜 index.js ┣ 📜 .gitignore ┣ 📜 package.json ┗ 📜 README.md

---

## ⚙️ Setup & Installation
### **1️⃣ Clone the Repository**
```sh
git clone (https://github.com/WimukthiMadushan/Asgardeo-react-authentication.git)
cd react-asgardeo-auth
```
### **2️⃣ Install Dependencies ** 
```sh
npm install
```
### **3️⃣ Configure Asgardeo Authentication**
```sh
{
  "clientID": "your-client-id",
  "baseUrl": "https://api.asgardeo.io/t/your-tenant",
  "signInRedirectURL": "http://localhost:3000",
  "signOutRedirectURL": "http://localhost:3000",
  "scope": ["profile", "email"]
}
```

### **4️⃣ Start the Development Server**
```sh
npm run dev
```
The application should now be running at http://localhost:3000 🚀.

## 🛠️ Usage

### **🔹 Authentication Handling**
• The app uses `@asgardeo/auth-react` to manage authentication.  
• **Public Route:** `/` (Accessible by anyone)  
• **Protected Route:** `/container` (Requires login)  

## 🎨 UI & Styling
This project uses:
• Tailwind CSS for layout and responsiveness
• Material UI for beautiful UI components

## 📌 Deployment
```sh
vercel
```

![image](https://github.com/user-attachments/assets/3e1525dd-cdaf-4d3f-8bfe-5f3af2ac2a03)

![image](https://github.com/user-attachments/assets/d316de27-2ec9-4da0-a8fd-2f2663290973)

![image](https://github.com/user-attachments/assets/bd58bf52-a30f-49a3-9f58-8d2aa4439749)

![image](https://github.com/user-attachments/assets/8c11c73f-a5c1-4fad-b2dc-31b940f9b84d)

![image](https://github.com/user-attachments/assets/9d4ccdc1-8694-44af-b8d3-d88e72919480)

