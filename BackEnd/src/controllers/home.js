var express = require("express");
var router = express.Router();
var homeModel = require("../models/home");

router.get("/", async function (req, res) {
	const courseList = await homeModel.getAllCourse();
	const viewBag = {
		courseList: courseList,
	};
	res.render("#", viewBag);
});
router.post("/find", async function (req, res) {
	const name = req.body.name;
	const courseList = await homeModel.getCoursesByName(name);
	const viewBag = {
		courseList: courseList,
	};
	return res.redirect("/", viewBag);
});

module.exports = router;



