const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const nodemailer = require('nodemailer');
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

// 3. Configure Nodemailer Transporter
// NOTE: Ensure EMAIL_USER and EMAIL_PASS are in your .env file
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS // Use a Google App Password here
  }
});

// --- API ROUTES ---

// A. POST: Create a new reservation & Send Email
app.post('/api/reservations', (req, res) => {
  const { full_name, phone, email, res_date, res_time, guests } = req.body;

  // Validation Regex
  const phoneRegex = /^\+?[0-9]{7,15}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!full_name || full_name.trim().length < 2) {
    return res.status(400).json({ error: "Please enter a valid name." });
  }
  if (!phone || !phoneRegex.test(phone)) {
    return res.status(400).json({ error: "Please enter a valid phone number." });
  }
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ error: "Please enter a valid email address." });
  }

  // Insert into DB (Make sure your table has an 'email' and 'status' column)
  const sql = "INSERT INTO reservations (full_name, phone, email, res_date, res_time, guests) VALUES (?, ?, ?, ?, ?, ?)";
  
  db.query(sql, [full_name, phone, email, res_date, res_time, guests], (err, result) => {
    if (err) {
      console.error("❌ Insert Error:", err.message);
      return res.status(500).json({ error: "Database error" });
    }

    // --- EMAIL LOGIC ---
    const mailOptions = {
      from: `Cafe Joy <${process.env.EMAIL_USER}>`, // Shows "Cafe Joy" as the sender name
      to: email,
      bcc: process.env.EMAIL_USER, // Sends a copy to you automatically
      replyTo: process.env.EMAIL_USER, 
      subject: 'Reservation Received - Cafe Joy',
      html: `
        <div style="font-family: Arial, sans-serif; border: 1px solid #ddd; padding: 20px; max-width: 600px; color: #333;">
          <h2 style="color: #b45309;">Reservation Received!</h2>
          <p>Hello <strong>${full_name}</strong>,</p>
          <p>We've received your table request at Cafe Joy. Here are your details:</p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li style="margin-bottom: 10px;">📅 <strong>Date:</strong> ${res_date}</li>
              <li style="margin-bottom: 10px;">⏰ <strong>Time:</strong> ${res_time}</li>
              <li style="margin-bottom: 10px;">👥 <strong>Guests:</strong> ${guests}</li>
            </ul>
          </div>
          <p>We will contact you soon at <strong>${phone}</strong> to confirm your reservation.</p>
          <p>See you soon!</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #777; text-align: center;">
            Cafe Joy | 123 Brew Street, NY <br>
            <em>Bringing joy to your coffee breaks.</em>
          </p>
        </div>
      `
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) console.log("❌ Email Error:", error);
      else console.log("📧 Confirmation Email Sent: " + info.response);
    });

    res.status(201).json({ message: "Reservation confirmed and email sent!" });
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

// C. PATCH: Update reservation status (Confirmed, Seated, No-Show)
app.patch('/api/reservations/:id/status', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  
  const sql = "UPDATE reservations SET status = ? WHERE id = ?";
  db.query(sql, [status, id], (err, result) => {
    if (err) {
      console.error("❌ Status Update Error:", err.message);
      return res.status(500).json({ error: "Database error" });
    }
    res.status(200).json({ message: `Status updated to ${status}` });
  });
});

// D. DELETE: Remove a reservation
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