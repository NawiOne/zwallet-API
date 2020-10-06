const transactionRouter = require('express').Router();
const transController = require('../Controllers/transaction');

transactionRouter.post('/dotrans', transController.doTransaction);
transactionRouter.get('/', transController.getTransaction)
transactionRouter.post('/notif', transController.notification)

module.exports = transactionRouter;