# 📈 Stock - Zerodha Clone

A full-stack stock trading platform inspired by Zerodha, built using the MERN stack. The project includes a responsive landing page, user authentication, portfolio dashboard, holdings management, and stock trading features.

🌐 **Live Demo:** https://stock-two-liart.vercel.app

---

# 🚀 Features

### Landing Page

* Responsive Zerodha-inspired UI
* Products, Pricing, Support, and About pages
* Login and Signup pages
* Dashboard redirection

### Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes

### Dashboard

* Portfolio Overview
* Holdings Management
* Positions Tracking
* Buy Stock Feature
* Real-time Charts and Analytics
* Watchlist Management

### Backend

* REST API built with Express.js
* MongoDB Database
* JWT Authentication
* CORS Configuration
* Environment Variables Support

---

# 🛠️ Tech Stack

## Frontend

* React.js
* React Router DOM
* CSS3
* Material UI

## Dashboard

* React.js
* Axios
* Chart.js
* Material UI

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication

## Deployment

* Frontend: Vercel
* Dashboard: Vercel
* Backend: Render
* Database: MongoDB Atlas

---

# 📂 Project Structure

```bash
Stock/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── model/
│   ├── routes/
│   ├── index.js
│   └── package.json
│
├── dashboard/
│   ├── public/
│   ├── src/
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/ShyamTheThor/Stock.git
cd Stock
```

---

# Backend Setup

```bash
cd backend
npm install
npm start
```

Runs on:

```bash
http://localhost:3002
```

---

# Frontend Setup

```bash
cd frontend
npm install
npm start
```

Runs on:

```bash
http://localhost:3000
```

---

# Dashboard Setup

```bash
cd dashboard
npm install
npm start
```

Runs on:

```bash
http://localhost:3001
```

---

# 🔐 Environment Variables

Create a `.env` file inside the `backend` folder.

```env
PORT=3002
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
FRONTEND_URL=http://localhost:3000
DASHBOARD_URL=http://localhost:3001
```

---

# 🚀 Deployment

## Backend (Render)

```text
Root Directory: backend
Build Command: npm install
Start Command: npm start
```

## Frontend (Vercel)

```text
Framework: Create React App
Root Directory: frontend
Build Command: npm run build
Output Directory: build
```

## Dashboard (Vercel)

```text
Framework: Create React App
Root Directory: dashboard
Build Command: npm run build
Output Directory: build
```

---


# 🎯 Future Improvements

* Real-time stock prices
* WebSocket integration
* Dark Mode
* Transaction History
* Portfolio Analytics
* Stock Search and Filtering
* Email Verification
* Password Reset

---

# 👨‍💻 Author

**Shyam M**

* GitHub: https://github.com/ShyamTheThor


---

# ⭐ Support

If you found this project helpful, please consider giving it a ⭐ on GitHub.
