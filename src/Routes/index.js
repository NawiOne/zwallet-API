const express = require('express');
// const checkToken = require('../Helpers/midleware/checktoken')
// const admin = require('../Helpers/midleware/admin')

// const menuRouter = require('./menu');
// const historyRouter = require('./history');
const authRouter = require('../Routes/auth');
// const orderUserRouter = require('./userOrder')


const indexRouter = express.Router();

// indexRouter.use('/', menuRouter);
// indexRouter.use('/history',admin,historyRouter)
// indexRouter.use('/orderuser', orderUserRouter)

indexRouter.use("/auth", authRouter);
module.exports = indexRouter;