# 🟢 Zerodha Clone — Full Stack Trading Platform

A full-stack clone of [Zerodha](https://zerodha.com), India's largest stock broker. Built with React, Node.js, Express, and MongoDB.

---

## 📸 Project Structure

```
zero/
├── frontend/       → Landing page (React) — Home, About, Products, Pricing, Support, Signup, Login
├── dashboard/      → Trading dashboard (React) — Holdings, Positions, Orders, Funds, Watchlist
└── backend/        → REST API (Node.js + Express) — Auth, Holdings, Positions, Orders
```

---

## ✨ Features

### 🌐 Frontend (Landing Page)
- Beautiful Zerodha-style landing page
- Pages: Home, About, Products, Pricing, Support
- **Authentication** — Signup & Login with JWT
- Redirects to Dashboard after successful login
- Fully responsive with Bootstrap

### 📊 Dashboard
- Live Holdings table with P&L calculation
- Positions tracker
- Orders management
- Funds overview
- Watchlist with Buy window
- Charts powered by Chart.js

### ⚙️ Backend (REST API)
- `POST /signup` — Register new user (bcrypt password hashing)
- `POST /login` — Login and receive JWT token
- `GET /allHoldings` — Fetch all stock holdings
- `GET /allPositions` — Fetch all positions
- `POST /newOrder` — Place a new order
- MongoDB Atlas for cloud database

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, React Router, Bootstrap |
| Dashboard | React 18, MUI, Chart.js, Axios |
| Backend | Node.js, Express 5, Mongoose |
| Database | MongoDB Atlas |
| Auth | bcryptjs + JSON Web Token (JWT) |
| Deployment | Vercel (Frontend + Dashboard), Render (Backend) |

---

## 🚀 Running Locally

### Prerequisites
- Node.js v18+
- npm
- MongoDB Atlas account (free)

### 1. Clone the repo

```bash
git clone https://github.com/your-username/zerodha-clone.git
cd zerodha-clone
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` folder:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/zerodha
JWT_SECRET=your_secret_key_here
FRONTEND_URL=http://localhost:3000
DASHBOARD_URL=http://localhost:3001
PORT=3002
```

Start the backend:

```bash
npm start
```
> Runs on `http://localhost:3002`

---

### 3. Setup Frontend

```bash
cd frontend
npm install
```

Create a `.env` file in the `frontend/` folder:

```env
REACT_APP_BACKEND_URL=http://localhost:3002
REACT_APP_DASHBOARD_URL=http://localhost:3001
```

Start the frontend:

```bash
npm start
```
> Runs on `http://localhost:3000`

---

### 4. Setup Dashboard

```bash
cd dashboard
npm install
```

Create a `.env` file in the `dashboard/` folder:

```env
REACT_APP_BACKEND_URL=http://localhost:3002
PORT=3001
```

Start the dashboard:

```bash
npm start
```
> Runs on `http://localhost:3001`

---



## 🔐 Environment Variables Reference

### Backend (`backend/.env`)
```env
MONGO_URI=           # MongoDB Atlas connection string
JWT_SECRET=          # Secret key for JWT signing
FRONTEND_URL=        # Deployed frontend URL (for CORS)
DASHBOARD_URL=       # Deployed dashboard URL (for CORS)
PORT=3002            # Optional, defaults to 3002
```

### Frontend (`frontend/.env`)
```env
REACT_APP_BACKEND_URL=     # Backend API base URL
REACT_APP_DASHBOARD_URL=   # Dashboard app URL (redirect after login)
```

### Dashboard (`dashboard/.env`)
```env
REACT_APP_BACKEND_URL=     # Backend API base URL
PORT=3001                  # Local only — Vercel ignores this
```

---

## 📁 Folder Structure (Detailed)

```
zero/
├── backend/
│   ├── model/
│   │   ├── HoldingsModel.js
│   │   ├── OrdersModel.js
│   │   ├── PositionsModel.js
│   │   └── UserModel.js
│   ├── schemas/
│   ├── index.js
│   ├── .env              ← (not committed)
│   └── .env.example      ← (safe to commit)
│
├── frontend/
│   ├── public/
│   │   └── media/images/ ← All SVGs and PNGs
│   ├── src/
│   │   └── landing_page/
│   │       ├── home/
│   │       ├── about/
│   │       ├── products/
│   │       ├── pricing/
│   │       ├── support/
│   │       ├── signup/
│   │       ├── login/
│   │       ├── Navbar.js
│   │       └── Footer.js
│   ├── .env              ← (not committed)
│   └── .env.example      ← (safe to commit)
│
└── dashboard/
    ├── src/
    │   └── components/
    │       ├── Home.js
    │       ├── Dashboard.js
    │       ├── WatchList.js
    │       ├── Holdings.js
    │       ├── Positions.js
    │       ├── Orders.js
    │       ├── Funds.js
    │       ├── Menu.js
    │       ├── TopBar.js
    │       └── BuyActionWindow.js
    ├── .env              ← (not committed)
    └── .env.example      ← (safe to commit)
```

---

## 🧑‍💻 Author

Built by **Shyam** as part of the Apna College full-stack project series.

---

## 📄 License

This project is for **educational purposes only**. It is not affiliated with or endorsed by Zerodha.
