const authRouter = require('express').Router();
const upload =  require('../Helpers/Midlleware/upload')
const authController =  require('../Controllers/auth');

authRouter.post('/register', authController.register)
authRouter.post('/login', authController.loginUser)
authRouter.patch('/update', upload.singleUpload, authController.updateUser)
authRouter.delete('/delete', authController.deleteUser)
authRouter.get('/', authController.getDatauser)
authRouter.post('/updatepass', authController.updatePassword)
authRouter.post('/getpin', authController.getPIN)
authRouter.patch('/changepin', authController.changePIN)
authRouter.get('/getemail', authController.getEmail)
authRouter.post('/resetpass', authController.resetPassword)
authRouter.patch('/phone', authController.updatePhone)
module.exports = authRouter