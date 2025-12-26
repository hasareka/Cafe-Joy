const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// 1. Create a Connection Pool
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// 2. Test the connection
db.getConnection((err, connection) => {
  if (err) {
    console.error('❌ Database connection failed:', err.message);
  } else {
    console.log('✅ Success: Connected to MySQL as cafe_user!');
    connection.release();
  }
});

// --- API ROUTES ---

// A. POST: Create a new reservation with Validation
app.post('/api/reservations', (req, res) => {
  const { full_name, phone, res_date, res_time, guests } = req.body;

  // --- PHONE VALIDATION LOGIC ---
  // Regex: Optional '+', followed by 7 to 15 digits
  const phoneRegex = /^\+?[0-9]{7,15}$/;

  if (!full_name || full_name.trim().length < 2) {
    return res.status(400).json({ error: "Please enter a valid name." });
  }

  if (!phone || !phoneRegex.test(phone)) {
    return res.status(400).json({ error: "Please enter a valid phone number (digits only)." });
  }
  // ------------------------------

  const sql = "INSERT INTO reservations (full_name, phone, res_date, res_time, guests) VALUES (?, ?, ?, ?, ?)";
  
  db.query(sql, [full_name, phone, res_date, res_time, guests], (err, result) => {
    if (err) {
      console.error("❌ Insert Error:", err.message);
      return res.status(500).json({ error: "Database error" });
    }
    console.log("✅ New Reservation saved! ID:", result.insertId);
    res.status(201).json({ message: "Reservation confirmed!" });
  });
});

// B. GET: Fetch all reservations
app.get('/api/reservations', (req, res) => {
  const sql = "SELECT * FROM reservations ORDER BY res_date DESC, res_time DESC";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("❌ Fetch Error:", err.message);
      return res.status(500).json({ error: "Database error" });
    }
    res.status(200).json(results);
  });
});

// C. DELETE: Remove a reservation
app.delete('/api/reservations/:id', (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM reservations WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("❌ Delete Error:", err.message);
      return res.status(500).json({ error: "Database error" });
    }
    res.status(200).json({ message: "Reservation deleted successfully" });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});