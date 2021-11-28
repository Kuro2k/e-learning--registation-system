const express = require('express');
const authenticate = require('./../middleware/authenticate');
const courseRouter = express.Router();
const courseController = require('./../controllers/course.controller');


courseRouter.get('/courses', courseController.getAll);
courseRouter.get('/detail/:id', courseController.getDetail);
courseRouter.post('/find', courseController.find);
courseRouter.get('/registercourse/:id', authenticate, courseController.getcourses);

module.exports = courseRouter;