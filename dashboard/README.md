# Zerodha Dashboard Clone

A front-end clone of the Zerodha trading dashboard built with React.js. This application simulates a trading interface, including a watchlist, portfolio holdings, order placement, and visualizations.

## Features

- **Watchlist**: View and track selected stocks with live-like price updates.
- **Holdings & Positions**: Check your current stock holdings, calculate P&L, and visualize investments.
- **Order Placement**: Place Buy orders via a dedicated order window interface.
- **Visualizations**: Interactive charts to track portfolio performance (using Chart.js).
- **Responsive UI**: Material-UI integrated for sleek and modern styling.

## Technologies Used

- **React 18**: Frontend framework.
- **React Router v6**: For navigation.
- **Material-UI (MUI)**: For UI components and icons.
- **Chart.js & React-Chartjs-2**: For rendering data charts (Doughnut, Vertical Graphs).
- **Axios**: For handling API requests.

## Prerequisites

- Node.js installed on your machine.
- A running backend server on `http://localhost:3002` (as configured for endpoints like `/allHoldings` and `/newOrder`).

## Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

This will launch the application on `http://localhost:3000`.

## Directory Structure

- `src/components/`: Contains all the reusable React components (`WatchList`, `Holdings`, `BuyActionWindow`, `Dashboard`, etc.).
- `src/data/`: Contains static data and mocked responses for UI testing.
- `public/`: Static files and the main `index.html`.

## Note

Ensure your mock backend is running on port `3002` to successfully fetch holdings and place new orders.
