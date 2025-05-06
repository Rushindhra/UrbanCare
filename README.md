# 🌟 UrbanCare - Home & Personal Care Booking System

UrbanCare is a full-stack web application designed to simplify the process of booking trusted caretakers for aged people, babies, pets, and household services such as cooking and laundry. This platform enables users to find reliable service providers with ease and flexibility.

---

## 📌 Features

- 👶 **Baby Care Services**
- 🧓 **Elderly Care Services**
- 🐶 **Pet Care Services**
- 🏡 **Home Services** (cooking, washing clothes, etc.)
- 🔒 **Authentication** (Signup/Login)
- 📅 **Booking System** with forms and real-time listing

---

## 🌐 Webpage Preview

<p align="center">
  <img src="https://github.com/Rushindhra/UrbanCare/blob/main/image_2025-05-04_225440906.png?raw=true" alt="UrbanCare Webpage Preview" width="800"/>
</p>

<p align="center"><em>Figure: Live preview of the UrbanCare web application homepage</em></p>

---

## 🚀 Tech Stack

### 💻 Frontend
- React.js
- Tailwind CSS
- Bootstrap

### 🖥 Backend
- Node.js
- Express.js
- MongoDB (for Database)

---

## 📁 Project Structure

```bash
UrbanCare/
├── client/                          # Frontend (React.js + Bootstrap + TailwindCSS)
│   ├── public/                      # Static public assets
│   └── src/                         # React source code
│       ├── assets/                  # Static assets (images, etc.)
│       ├── components/              # Reusable UI components
│       │   ├── CareProviderCard.jsx
│       │   ├── Footer.jsx
│       │   ├── ImageThemeToggler.jsx
│       │   ├── Navbar.jsx
│       │   ├── ProtectedRoute.jsx
│       │   ├── ServiceCard.jsx
│       │   └── ThemeToggle.jsx
│       ├── context/               # Context API for state management
│       │   ├── AuthContext.jsx
│       │   └── ThemeContext.jsx
│       ├── hooks/                 # Custom React Hooks
│       │   └── useTheme.jsx
│       ├── pages/                 # Pages for routing
│       │   ├── BabyCare.jsx
│       │   ├── BookingForm.jsx
│       │   ├── BookingsList.jsx
│       │   ├── Home.jsx
│       │   ├── HomeServices.jsx
│       │   ├── Login.jsx
│       │   ├── PetCare.jsx
│       │   ├── Profile.jsx
│       │   ├── SeniorCare.jsx
│       │   ├── ServiceProviders.jsx
│       │   └── Signup.jsx
│       ├── services/              # API calls and utilities
│       │   └── api.js
│       ├── App.css
│       ├── App.jsx
│       ├── index.css
│       ├── index.html
│       ├── index.js
│       ├── main.jsx
│       └── setupProxy.jsx         # Proxy to backend
│   ├── eslint.config.js
│   ├── postcss.config.js
│   ├── package.json
│   ├── package-lock.json
│   └── tailwind.config.js
├── server/                          #entery point of backend server
│   ├── config/                      # Configuration files
│   │   ├── db.js                    # MongoDB connection
│   │   └── envVars.js               # Environment variables
│   ├── controllers/                 # Business logic
│   │   ├── authController.js
│   │   ├── BabyControll.js
│   │   ├── BookingControll.js
│   │   ├── HomeCategory.js
│   │   └── PetController.js
│   ├── models/                    # Mongoose schemas
│   │   ├── BabyCareModel.js
│   │   ├── Home.js
│   │   ├── PetModel.js
│   │   └── Usermodel.js
│   ├── routes/                    # Express routes
│   │   ├── authRoute.js
│   │   ├── BabyRoute.js
│   │   ├── Booking.js
│   │   ├── HomeServiceRoute.js
│   │   └── PetRoute.js
│   ├── utils/                     # Utility functions
│   │   └── generateToken.js
│   ├── server.js                  # Entry point of backend
│   └── package.json

