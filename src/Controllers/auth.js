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
    },
    deleteUser: (req, res) => {
        authModel.deleteUser(req.query)
        .then((data) => {
            formRespons.success(res, data)
        }).catch((err) => {
            formRespons.error(res, err)
        })
    },
    updatePassword: (req, res) => {
        authModel.updatePassword(req.body, req.query)
        .then((data) => {
            formRespons.success(res, data)
        }).catch((err) => {
            formRespons.error(res, err)
        })
    },
    getPIN: (req, res)=> {
        authModel.getPIN(req.body,req.query)
        .then((data) => {
            formRespons.success(res,data)
        }).catch((err) => {
            formRespons.error(res, err)
        })
    },
    changePIN: (req, res) => {
        authModel.changePIN(req.body, req.query)
        .then((data) => {
            formRespons.success(res, data)
        }).catch((err) => {
            formRespons.error(res, err)
        })
    },
    getEmail: (req, res) => {
        authModel.getEmail(req.query)
        .then((data) => {
            formRespons.success(res,data)
        }).catch((err) => {
            formRespons.error(res, err)
        })
    },
    resetPassword: (req, res) => {
        authModel.ressetPassword(req.body, req.query)
        .then((data) => {
            formRespons.success(res, data)
        }).catch((err) => {
            formRespons.error(res, err)
        })
    },
    updatePhone: (req, res) => {
        authModel.updatePhone(req.body, req.query)
        .then((data) => {
            formRespons.success(res, data)
        }).catch((err) => {
            formRespons.error(res, err)
        })
    }

}

module.exports = authCntroller;