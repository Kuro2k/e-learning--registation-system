var express = require("express");
var router = express.Router();
var registerModel = require("../models/registerList");

router.get("/regcourse/id:", async function (req, res) {
	const userId = req.params.id;
	const courseList = await registerModel.getCourseList(userId);
	const viewBag = {
		courseList: courseList,
	};
	res.render("#", viewBag);
});

router.post("/regcourse/id:/delete", async function (req, res) {
	const userId = req.params.id;
	const courseId = req.body.id;
	await registerModel.getDeleteCourse(courseId, userId);
	res.redirect("/regcourse/id:");
});
module.exports = router;
