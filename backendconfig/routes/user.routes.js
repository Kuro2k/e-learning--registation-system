const express = require('express');
const authenticate = require('./../middleware/authenticate');
const userRouter = express.Router();
const userController = require('./../controllers/user.controller');

userRouter.post('/login', userController.login);
userRouter.post('/register', userController.register);
userRouter.put('/update/:id', authenticate, userController.update);
userRouter.put('/changepw/:id', authenticate, userController.updatepass);
userRouter.get('/learnerdetail/:id', authenticate, userController.getInfo);
module.exports = userRouter;