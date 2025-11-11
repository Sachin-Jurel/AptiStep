<div align="center">
  <img src="https://raw.githubusercontent.com/Sachin-Jurel/AptiStep/main/Logo.png" alt="AptiStep Logo" width="120" height="120" />

 AptiStep

**Master Aptitude with Confidence** 🚀

An interactive aptitude learning and test preparation platform designed to help students excel in quantitative aptitude, logical reasoning, verbal ability, and more.

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat-square&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=flat-square&logo=mongodb)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.12-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [📁 Project Structure](#-project-structure)
- [🎨 Key Features](#-key-features)
- [📱 Screenshots](#-screenshots)
- [🤝 Contributing](#-contributing)
- [📝 License](#-license)

---

## ✨ Features

### 🎓 Learning & Practice
- 📚 **Topic-Wise Practice Tests** - Focused quizzes by topic with instant feedback
- ⏱️ **Full-Length Mock Tests** - Time-bound tests with auto submission and detailed results
- 🧠 **Adaptive Learning** - Difficulty adjusts automatically based on performance
- 📖 **Detailed Solutions & Explanations** - Step-by-step answers and comprehensive notes
- 📥 **Study Materials & Notes** - Quick revision materials and downloadable PDFs

### 📊 Analytics & Progress
- 📈 **Smart Performance Analytics** - Graphs, charts, and personalized insights
- 📜 **Test History & Reports** - View past attempts and track progress over time
- 🏆 **User Profiles & Achievements** - Personalized dashboard with ranks, badges, and achievements

### 🔐 Security & User Experience
- 🔒 **Secure Login & Data Privacy** - JWT-based authentication and data protection
- 📱 **Clean, Responsive UI** - Works seamlessly on desktop and mobile devices
- 🎨 **Modern Design** - Beautiful and intuitive interface with smooth animations

---

## 🛠️ Tech Stack

### Frontend
- **⚛️ React 19.1.1** - UI library
- **🎨 Tailwind CSS 4.1.12** - Styling framework
- **🔄 React Router DOM 7.8.2** - Routing
- **📦 Axios 1.11.0** - HTTP client
- **🎯 Lucide React** - Icon library
- **🔥 Heroicons** - Additional icons
- **⚡ Vite 7.1.2** - Build tool

### Backend
- **🚀 Express.js 5.1.0** - Web framework
- **🍃 MongoDB** - Database
- **📦 Mongoose 8.19.3** - ODM
- **🔐 JWT** - Authentication
- **☁️ Cloudinary** - Image storage
- **🤖 Google Generative AI** - AI-powered test generation
- **🔒 Bcrypt** - Password hashing

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **MongoDB** (local or cloud instance)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/AptiStep.git
   cd AptiStep
   ```

2. **Install Frontend dependencies**
   ```bash
   cd Frontend
   npm install
   ```

3. **Install Backend dependencies**
   ```bash
   cd ../Backend
   npm install
   ```

4. **Environment Setup**
   
   Create a `.env` file in the `Backend` directory:
   ```env
   MONGO_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   GOOGLE_GEN_AI_API_KEY=your_google_gen_ai_api_key
   ```

5. **Add Logo Image (Optional)**
   
   Add `logo.png` to `Frontend/src/assets/` directory. The logo should be a PNG image that represents the AptiStep brand.
   
   **To display the logo in README.md**, add this line after adding the logo file:
   ```markdown
   ![AptiStep Logo](Frontend/src/assets/logo.png)
   ```
   
   **Note**: The logo is used in the Navbar component. The application will work without it, but a broken image icon will appear in the navbar until `logo.png` is added.

6. **Run the application**
   
   **Start Backend Server:**
   ```bash
   cd Backend
   node index.js
   ```
   Backend runs on `http://localhost:8080`
   
   **Start Frontend Development Server:**
   ```bash
   cd Frontend
   npm run dev
   ```
   Frontend runs on `http://localhost:5173`

---

## 📁 Project Structure

```
AptiStep/
├── Frontend/
│   ├── src/
│   │   ├── assets/          # Images and static files
│   │   │   ├── logo.png     # ⚠️ Add your logo here
│   │   │   ├── default.png
│   │   │   └── ...
│   │   ├── Components/      # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Test.jsx
│   │   │   └── TestComponent.jsx
│   │   ├── Pages/           # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Features.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── SignUp.jsx
│   │   │   ├── Profile.jsx
│   │   │   └── ...
│   │   ├── context/         # React context
│   │   │   └── userContext.jsx
│   │   ├── AdditionalData/  # JSON data files
│   │   ├── app.jsx          # Main app component
│   │   ├── main.jsx         # Entry point
│   │   └── index.css        # Global styles
│   ├── package.json
│   └── vite.config.js
│
├── Backend/
│   ├── config/              # Configuration files
│   │   ├── cloudinaryConfig.js
│   │   └── multerConfig.js
│   ├── models/              # Database models
│   │   └── user.js
│   ├── Prompts/             # AI prompts
│   │   ├── TestPrompt.js
│   │   ├── QuantPrompt.js
│   │   └── logicalPrompt.js
│   ├── index.js             # Main server file
│   └── package.json
│
└── README.md
```

---

## 🎨 Key Features

### 📚 Test Categories

- **📊 Quantitative Aptitude**
  - Arithmetic
  - Algebra
  - Geometry
  - Statistics
  - Probability

- **🧩 Logical Reasoning**
  - Pattern Recognition
  - Analytical Reasoning
  - Syllogism
  - Blood Relations
  - Direction Sense

- **📝 Verbal Ability**
  - Grammar
  - Vocabulary
  - Reading Comprehension
  - Synonyms
  - Antonyms

- **📈 Data Interpretation**
  - Charts
  - Graphs
  - Tables
  - Pie Charts
  - Bar Graphs

- **🌍 General Knowledge**
  - Current Affairs
  - History
  - Geography
  - Science
  - Sports

- **💻 Computer Awareness**
  - Hardware
  - Software
  - Networking
  - Programming
  - Database

---

## 📱 Responsive Design

AptiStep is fully responsive and works seamlessly on:
- 💻 Desktop
- 📱 Mobile
- 📱 Tablet

The mobile-friendly navbar includes:
- 🍔 Hamburger menu for mobile devices
- 📱 Slide-in navigation panel
- 🎯 Touch-friendly interface

---

## 🔐 Authentication

- 🔑 JWT-based authentication
- 🍪 Secure cookie-based sessions
- 👤 User profile management
- 🔒 Password encryption with bcrypt
- 🖼️ Profile picture upload with Cloudinary

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the ISC License.

---

## 👥 Authors

- **Sachin Jurel** - *Initial work* - [GitHub](https://github.com/sachinjurel)

---

## 🙏 Acknowledgments

- React community for amazing documentation
- Tailwind CSS for beautiful utility classes
- MongoDB for robust database solutions
- All contributors and users of AptiStep

---

<div align="center">

**Made with ❤️ for students preparing for aptitude tests**

⭐ Star this repo if you find it helpful!

</div>

