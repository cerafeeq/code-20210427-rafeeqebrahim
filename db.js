var mysql = require('mysql2');

const connection = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME
})

connection.connect((err) => {
	if (!err) {
		console.log('Database is connected')
	} else {
		console.log('Error connecting database', err)
	}
})

connection.connect((err) => {
	if (err) throw err;
})

module.exports = connection;