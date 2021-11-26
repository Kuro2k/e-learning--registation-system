var express = require("express");
var router = express.Router();
var loginModel = require("../models/login");

router.get("/login", async function(req,res){
	res.render("#");
});
router.post("/login", async function(req,res){
	var username = req.body.username;
	var password_user= req.body.password_user;
	const user = await loginModel.get(username,password_user);
	if(Number(user)){
		res.redirect("/")
	}
	else{
		res.redirect("/login")
	}
})

module.exports = router;

