var mysql = require("mysql-await");

var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "education_registration",
});

exports.getCourseList = async function (id) {
	return await connection.awaitQuery(
		`SELECT *  FROM course  WHERE id IN (SELECT courseid FROM enrolls HERE enrolls.learnerid=${id})`
	);
};

exports.getDeleteCourse = async function (courseId, userId) {
	await connection.awaitQuery(
		`DELETE FROM enrolls WHERE learnerid = ${userId} AND courseid = ${courseId}`
	);
	await connection.awaitQuery(
		`DELETE FROM enrolls_info WHERE learnerid = ${userId} AND courseid = ${courseId}`
	);
};
