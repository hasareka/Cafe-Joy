Cafe Joy – Full Stack Coffee Shop Website

A modern, responsive web application for a specialty coffee shop, featuring a custom reservation engine, automated email notifications, and a full-stack architecture.

🚀 Features
Dynamic Landing Page: High-performance UI built with React and Vite.

Reservation System: Real-time table booking with date, time, and guest validation.

Automated Email Confirmations: Instant "Reservation Received" emails sent to customers via Nodemailer.

Management Dashboard: A protected admin view to track, confirm, or delete reservations.

Fully Responsive: Optimized for mobile, tablet, and desktop using Tailwind CSS.

🛠️ Tech Stack
Frontend: React.js, Vite, Tailwind CSS, Axios.

Backend: Node.js, Express.js.

Database: MySQL.

Tools: Nodemailer (SMTP), Dotenv (Environment Security).

📂 Project Structure
Plaintext

cafe-joy/
├── client/                # React Frontend (Vite)
│   ├── src/components/    # UI Components (Menu, About, Reservation)
│   └── src/assets/        # High-resolution images
├── server/                # Node.js Backend
│   ├── index.js           # Express Server & API Routes
│   └── .env               # Database & Email Credentials (Hidden)
└── database/
    └── database.sql         # SQL script to setup MySQL tables
⚙️ Installation & Setup
Clone the repository:

Bash

git clone https://github.com/hasareka/cafe-joy.git
Setup the Database:

Open MySQL Workbench.

Run the following command to create the table:

SQL

CREATE TABLE reservations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(255) NOT NULL,
  res_date DATE NOT NULL,
  res_time VARCHAR(50) NOT NULL,
  guests INT NOT NULL,
  status VARCHAR(50) DEFAULT 'Pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

Configure Environment Variables: Create a .env file in the server folder:

Code snippet

DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=cafe_joy
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-google-app-password
Run the application:

Backend: cd server && npm start

Frontend: cd client && npm run dev

