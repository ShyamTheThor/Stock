# Zerodha Dashboard Backend

This is the backend service for the Zerodha Dashboard clone application. It is built using **Node.js**, **Express.js**, and **MongoDB**.

## Features

- REST API for fetching and managing user portfolio data.
- Built-in endpoints to populate the database with dummy initial data for Holdings and Positions.
- Uses **Mongoose** for data modeling.
- (Planned) User authentication using Passport.js.

## Tech Stack

- **Node.js**
- **Express.js** - Web Framework
- **MongoDB** - Database
- **Mongoose** - Object Data Modeling (ODM) library
- **dotenv** - Environment variable management
- **Cors** & **Body-Parser** - Middlewares

## Project Structure

```
backend/
├── model/                  # Mongoose models (Holdings, Orders, Positions)
├── schemas/                # Mongoose schemas (Holdings, Orders, Positions)
├── index.js                # Main entry point and Express app configuration
├── package.json            # Project dependencies and scripts
└── .env                    # Environment variables (needs to be created)
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) installed or a MongoDB Atlas connection string

### Installation

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root of the `backend` directory and add your MongoDB connection string and Port:
   ```env
   PORT=3002
   MONGO_URI=your_mongodb_connection_string_here
   ```

### Running the Server

Start the development server using nodemon:

```bash
npm start
```
The server will start running on `http://localhost:3002` (or your defined PORT).

## API Endpoints

### Seed Data
The application provides two utility endpoints to seed the MongoDB database with initial mock data:

- **`GET /addHoldings`**: Clears existing holdings and inserts predefined dummy holdings data.
- **`GET /addPositions`**: Clears existing positions and inserts predefined dummy positions data.

## Models

- **Holdings**: Represents long-term stock holdings (CNC).
- **Positions**: Represents current active positions (Intraday/Delivery).
- **Orders**: Represents the user's order history.
