var mysql = require("mysql-await");

var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "education_registration",
});

exports.getCourse = async function (id) {
	return await connection.awaitQuery(`SELECT * FROM course WHERE id=${id}`);
};

exports.getNumLearner = async function (id) {
	return await connection.awaitQuery(
		`SELECT COUNT(learnerid) FROM enrolls_info WHERE enrolls_info.courseid = ${id} and enrolls_info.enrollment_status in ('enrolled', 'postponed')`
	);
};
