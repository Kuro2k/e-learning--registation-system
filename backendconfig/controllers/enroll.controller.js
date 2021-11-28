const db = require('./connection');

exports.register = (req, res) => {
    const { learner_id, course_id, enroll_status, payment_status, fee, startdate } = req.body;
    db.query(
        `call enroll_course('${learner_id}', '${course_id}', '${enroll_status}', '${payment_status}', '${fee}', '${startdate}')`,
        (error, r) => {
            console.log(error);
            if (error) {
                res.status(500).send(error);
            } else {
                res.send("Đăng ký thành công!");
            }
        }
    )
}

exports.delete = (req, res) => {
    const { course_id, learner_id } = req.body;
    db.query(
        `call Delete_course('${course_id}', '${learner_id}')`,
        (error, r) => {
            if (error) {
                res.status(500).send(error);
            } else {
                res.send("Xóa thành công!");
            }
        }
    )
}