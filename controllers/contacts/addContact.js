const contactsOperation = require('../../models/contacts')
const createError = require('http-errors')

const {v4} = require('uuid');

const Joi = require('joi');

const productSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.number().required()
})

const addContact = async(req, res, next) => {
    try {
        const {error} = productSchema.validate(req.body);
        if(error) {
            throw createError(400, "Missing required name field")
        }
        const id = v4();
         req.body.id = id
        const newContact = await contactsOperation.addContact(req.body);
        res.json({
          status: "success",
          code: 201,
          data: {
            result: newContact
          }
        });
      } catch (error) {
        next(error)
    }
}

module.exports = addContact;