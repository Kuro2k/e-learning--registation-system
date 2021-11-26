var express = require("express");
var router = express.Router();
var courseModel = require("../models/course");

router.get("/course/id:", async function (req, res) {
	const id = req.params.id;
	const details = await courseModel.getCourse(id);
	const numOfLearners = await courseModel.getNumLearner(id);
	const viewBag = {
		details: details,
		numOfLearners: numOfLearners,
	};
	res.render("#", viewBag);
});

module.exports = router;