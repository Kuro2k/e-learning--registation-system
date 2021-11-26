var mysql = require("mysql-await");

var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "education_registration",
});

exports.getAllCourse = async function () {
	return await connection.awaitQuery("SELECT * FROM course");
};

exports.getNumLearner = async function (id) {
	return await connection.awaitQuery(
		`SELECT COUNT(learnerid) FROM enrolls_info WHERE enrolls_info.courseid = ${id} and enrolls_info.enrollment_status in ('enrolled', 'postponed')`
	);
};
exports.getCoursesByName = async function (name) {
	return await connection.awaitQuery(`SELECT * FROM course WHERE name=${name}`);
};
