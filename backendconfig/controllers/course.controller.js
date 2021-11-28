const Course = require('./../models/course.model');

exports.getAll = (req, res) => {
    Course.getAll(result => {
        if (result === null) {
            res.status(500).send(result);
        } else {
            res.send(result);
        }
    })
}

exports.getDetail = (req, res) => {
    Course.getDetail(req.params.id, result => {
        if (result === null) {
            res.status(500).send(result);
        } else {
            res.send(result);
        }
    })
}

exports.find = (req, res) => {
    Course.find(req.body, result => {
        if (result === null) {
            res.status(500).send(result);
        } else {
            res.send(result);
        }
    })
}

exports.getcourses = (req, res) => {
    Course.getCourse(req.params.id, result => {
        if (result === null) {
            res.status(500).send(result);
        } else {
            res.send(result);
        }
    })
}