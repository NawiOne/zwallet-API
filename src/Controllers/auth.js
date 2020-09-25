const authModel = require('../Models/auth');
const formRespons = require('../Helpers/formRespone');

const authCntroller = {
    register : (req, res) =>{
        authModel.register(req.body)
        .then((data) =>{
            const respondata = {
                ...req.body,
                id: data.insertid,
                password : 'encypted'
            }
            formRespons.success(res, respondata)
           
        })
        .catch((err) =>{
            formRespons.error(res, err)
        })
    },
    loginUser: (req, res) =>{
        authModel.loginUser(req.body)
        .then((data) =>{
            formRespons.success(res, data)

        })
        .catch((err) =>{
            formRespons.error(res, err)
        })
        
    },
    updateUser: (req, res) =>{
        authModel.updateUser(req.body)
        .then((data) => {
            formRespons.success(res, data)
        })
        .catch((err) => {
            formRespons.error(res, err)
        })
    },
    getDatauser: (req, res) => {
        authModel.getDataUser(req.query)
        .then((data) =>{
            formRespons.success(res, data)
        }).catch((err) => {
            formRespons.error(res, err)
        })
    }

}

module.exports = authCntroller;