const express = require('express');
const rootRoutes = express.Router();
const userRouter = require('./user.routes');
const courseRouter = require('./course.routes');
const enrollRouter = require('./enroll.routes');

rootRoutes.use('/user', userRouter);
rootRoutes.use('/course', courseRouter);
rootRoutes.use('/enroll', enrollRouter);

module.exports = rootRoutes;