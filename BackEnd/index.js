var express = require("express");
var app = express();

var homeController = require("./src/controllers/home");
var loginController = require("./src/controllers/login");
var courseController = require("./src/controllers/course");
var registerListController = require("./src/controllers/registerList");

app.use(express.static("public"));

app.use(
	express.urlencoded({
		extended: true,
	})
);
app.use(express.json());

app.use("/", homeController);
app.use("/login", loginController);
app.use("/course/id:", courseController);
app.use("/regcourse/id:", registerListController);

app.listen(5000, function () {
	console.log("Server is listening on port 5000!");
});
