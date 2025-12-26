-- 1. Create the Database
CREATE DATABASE IF NOT EXISTS cafe_joy;
USE cafe_joy;

-- 2. Create a dedicated user with a password (to avoid 'Access Denied' errors)
-- We use 'mysql_native_password' because it is most compatible with Node.js
CREATE USER 'cafe_user'@'localhost' IDENTIFIED WITH mysql_native_password AS 'Coffee@123';
GRANT ALL PRIVILEGES ON cafe_joy.* TO 'cafe_user'@'localhost';
FLUSH PRIVILEGES;

-- 3. Create the Reservations Table
CREATE TABLE reservations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    res_date DATE NOT NULL,
    res_time VARCHAR(50) NOT NULL,
    guests INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);