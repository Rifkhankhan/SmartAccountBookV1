const mysql = require('mysql2/promise')
require('dotenv').config() // Load environment variables from .env file
// Create MySQL connection pool
const pool = mysql.createPool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME
})

// Check database connection
pool
	.getConnection()
	.then(connection => {
		console.log('Database connected successfully!')
		connection.release() // Release the connection back to the pool
	})
	.catch(error => {
		console.error('Error connecting to database:', error)
	})

module.exports = pool
