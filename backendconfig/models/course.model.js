const db = require("./../controllers/connection");

var Course = function (data) {
    this.id = data.id;
    this.name = data.name;
    this.tuition_fee = data.tuition_fee;
    this.start_date = data.start_date;
    this.course_length = data.course_length;
    this.num_learner = data.num_learner;
}

Course.getAll = (result) => {
    db.query(
        "call ViewCourse()",
        (error, courses) => {
            if (courses.length == 0 || error) {
                result(null);
            } else {
                result(courses[0]);
            }
        }
    )
}

Course.getDetail = (params, result) => {
    db.query(
        `call SelectDetails('${params}')`,
        (error, course) => {
            if (course.length == 0 || error) {
                result(null);
            } else {
                result(course[0]);
            }
        }
    )
}

Course.find = (data, result) => {
    db.query(
        `select * from course_list where name LIKE '%${data.name}%'`,
        (error, courses) => {
            if (courses.length == 0 || error) {
                result(null);
            } else {
                result(courses);
            }
        }
    )
}

Course.getCourse = (params, result) => {
    db.query(
        `call SelectCourseList('${params}')`,
        (error, courses) => {
            if (courses.length == 0 || error) {
                result(null);
            } else {
                result(courses);
            }
        }
    )
}

module.exports = Course;