const express = require('express');
// const checkToken = require('../Helpers/midleware/checktoken')
// const admin = require('../Helpers/midleware/admin')

// const menuRouter = require('./menu');
// const historyRouter = require('./history');
const authRouter = require('../Routes/auth');
const contactRouter = require('./contact');
const transRouter = require('../Routes/transaction');


const indexRouter = express.Router();

// indexRouter.use('/', menuRouter);
// indexRouter.use('/history',admin,historyRouter)
// indexRouter.use('/orderuser', orderUserRouter)

indexRouter.use("/auth", authRouter);
indexRouter.use("/contact", contactRouter)
indexRouter.use('/transaction', transRouter)
module.exports = indexRouter;