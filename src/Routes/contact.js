const contacthRouter = require('express').Router();
const contactController = require('../Controllers/contact');

contacthRouter.get('/', contactController.getContact)
contacthRouter.get('/search', contactController.searchContact)

module.exports = contacthRouter;