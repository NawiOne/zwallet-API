const transactionModel = require('../Models/transaction');
const formRespons = require('../Helpers/formRespone');
const {io} = require('../../sharedVariables')

const transactionController = {
    doTransaction: (req, res) => {
    transactionModel.doTransaction(req.body)
    .then((data) => {
        const {receiver_id, sender_id, trans_type, amount, trans_name} = req.body;
        const title = trans_name + 'Success';
        const message = `you have received Rp${amount}`
        io.to(receiver_id).emit('transaction', {title, message})
        formRespons.success(res, data)
    }).catch((err) => {
        formRespons.error(res, err)
    })
    },
    getTransaction: (req, res)=> {
        const {id, page, limit} = req.query
        transactionModel.getTransaction(id, page, limit)
        .then((data) => {
            formRespons.paginationHistory(req.query, res,data)
        }).catch((err) => {
            formRespons.error(res, err)
        })
    },
    notification: (req, res) => {
        transactionModel.notification(req.body)
        .then((data) => {
            formRespons.success(res, data)
        }).catch((err) => {
            formRespons.error(res, err)
        })
    }
}
module.exports= transactionController;