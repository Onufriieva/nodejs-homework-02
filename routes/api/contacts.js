const express = require('express');

const {contacts: ctrl} = require('../../controllers')

const router = express.Router();


router.get('/', ctrl.getAll)

router.get('/:contactId', ctrl.getOneById) 

router.post('/', ctrl.addContact) 

router.delete('/:contactId', ctrl.deleteContact)

router.put('/:contactId', ctrl.updateContact)

module.exports = router
