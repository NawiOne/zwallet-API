const authRouter = require('express').Router();
const upload =  require('../Helpers/Midlleware/upload')
const authController =  require('../Controllers/auth');

authRouter.post('/register', authController.register)
authRouter.post('/login', authController.loginUser)
authRouter.patch('/update', upload.singleUpload, authController.updateUser)

module.exports = authRouter