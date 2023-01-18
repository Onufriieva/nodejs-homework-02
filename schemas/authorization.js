const Joi = require('joi');

const registerSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().min(5).required()
  });

  const loginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().min(5).required()
  })

  const verifySchema = Joi.object({
    email: Joi.string().required(),
  });

  module.exports = {
    registerSchema,
    loginSchema,
    verifySchema
  }