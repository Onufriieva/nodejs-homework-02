const express = require('express');

const { validation } = require('../../middlewares');
const { contactSchema } = require('../../schemas/contacts')
const {contacts: contactController} = require('../../controllers');

const validateMiddleware = validation(contactSchema);
const router = express.Router();


router.get('/', contactController.getAll)

router.get('/:contactId', contactController.getOneById) 

router.post('/', validateMiddleware, contactController.addContact) 

router.delete('/:contactId', contactController.deleteContact)

router.put('/:contactId',validateMiddleware, contactController.updateContact)

module.exports = router
