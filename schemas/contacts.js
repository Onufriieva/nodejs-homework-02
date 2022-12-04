const Joi = require('joi');

const contactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.number().required()
})
 

const schemaId = Joi.string().min(3);


module.exports = {
  contactSchema,
  schemaId
}