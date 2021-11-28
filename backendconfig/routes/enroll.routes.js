const express = require('express');
const enrollRouter = express.Router();
const enrollController = require('./../controllers/enroll.controller');

enrollRouter.post('/register', enrollController.register);
enrollRouter.post('/delete', enrollController.delete);

module.exports = enrollRouter;