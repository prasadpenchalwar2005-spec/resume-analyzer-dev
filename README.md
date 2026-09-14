# 🤖 GenAI Resume Analyzer

An AI-powered full-stack web application built to analyze resumes and provide an AI-driven interview experience.

This project uses Google GenAI, React, Node.js, Express.js, and MongoDB to create an interactive platform where users can register, authenticate, upload resume-related files, and interact with AI-powered interview functionality.

## ✨ Features

- 🔐 User Registration & Login
- 🔑 JWT-based Authentication
- 🛡️ Protected Routes
- 📄 Resume/PDF Processing
- 🤖 AI-powered Interview Generation
- 🧠 Google GenAI Integration
- 🎯 Interactive Interview Experience
- 📊 Interview Report Generation
- 🗄️ MongoDB Database Integration
- 📁 File Upload Support
- 🍪 Cookie-based Authentication
- ⚡ Fast React Frontend with Vite
- 🎨 SCSS-based Styling
- ✅ Input Validation using Zod

## 🛠️ Tech Stack

### Frontend

- React 19
- Vite
- React Router
- Axios
- SCSS
- ESLint

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Google GenAI
- JWT
- bcryptjs
- Multer
- PDF Parse
- Puppeteer
- Zod
- CORS
- Cookie Parser
- dotenv

## 📁 Project Structure

```text
GenAIResume-Analyzer/
│
├── Backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   └── services/
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── features/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── app.routes.jsx
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md