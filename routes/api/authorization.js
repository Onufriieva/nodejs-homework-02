const express = require('express');

const { validation, paramValidation } = require('../../middlewares');
const {authorization: authControllers} = require('../../controllers')
const { registerSchema, loginSchema } = require('../../schemas/authorization')

const router = express.Router();

router.post("/singup", validation(registerSchema), authControllers.singup)

module.exports = router;