var mysql = require("mysql-await");

var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "education_registration",
});
exports.get = async function (username, password_user) {
	return await connection.awaitQuery(`SELECT COUNT(*) FROM user_system WHERE username = ${username}  AND password_user = ${password_user}`) ;
};
