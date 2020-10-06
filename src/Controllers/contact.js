const contactModel = require('../Models/contact');
const formRespons = require('../Helpers/formRespone');

const contactController = {
    getContact: (req, res) => {
        const {page, limit, id} = req.query
        contactModel.getContact(page, limit, id)
        .then((data) => {
            formRespons.pagination(req, res, data)
        }).catch((err) => {
            formRespons.error(res, err)
        })
    },
    searchContact: (req, res) => {
        const {name} = req.query;
        contactModel.searchContact(name)
        .then((data) => {
            formRespons.success(res, data)
        }).catch((err) => {
            formRespons.error(res, err)
        })
    }
}

module.exports = contactController;