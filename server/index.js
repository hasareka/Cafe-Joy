const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Create a Connection Pool (better for performance)
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 3306
});

// Test the connection
db.getConnection((err, connection) => {
  if (err) {
    console.error('Database connection failed:', err.message);
  } else {
    console.log('✅ Success: Connected to MySQL as cafe_user!');
    connection.release();
  }
});

// The API Route to handle form submissions
app.post('/api/reservations', (req, res) => {
  const { full_name, res_date, res_time, guests } = req.body;
  const sql = "INSERT INTO reservations (full_name, res_date, res_time, guests) VALUES (?, ?, ?, ?)";
  
  db.query(sql, [full_name, res_date, res_time, guests], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error" });
    }
    res.status(201).json({ message: "Reservation saved to MySQL!" });
  });
});

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on http://localhost:${process.env.PORT}`);
});

// GET Route to fetch all reservations for the Admin Dashboard
app.get('/api/reservations', (req, res) => {
  const sql = "SELECT * FROM reservations ORDER BY res_date DESC, res_time DESC";
  
  db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error" });
    }
    res.status(200).json(results);
  });
});