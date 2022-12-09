const Joi = require('joi');

const contactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean()
})
 

const schemaId = Joi.object({
    contactId: Joi.string().min(1)
})


module.exports = {
  contactSchema,
  schemaId
}