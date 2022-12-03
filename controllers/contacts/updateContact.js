const contactsOperation = require('../../models/contacts')
const createError = require('http-errors')


const Joi = require('joi');

const productSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.number().required()
})

const updateContact = async(req, res, next) => {
    try {
        const {error} = productSchema.validate(req.body);
        if(error) {
          throw createError(400, "Missing fields")
        }
        const {contactId} = req.params;
        const updateContact = await contactsOperation.updateContact(contactId, req.body);
        if(!updateContact){
          throw createError(404, "Not found")
        }
        res.json({
          status: "success",
          code: 200,
          data: {
            result: updateContact
          }
        });
      } catch (error) {
        next(error)
    }
}

module.exports = updateContact;