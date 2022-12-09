// const contactsOperation = require('../../models/contacts');
const {Contact} = require('../../models');

// const {v4} = require('uuid');
 

const addContact = async(req, res, next) => {
  try {
    //   const id = v4();
    //    req.body.id = id
      const newContact = await Contact.create(req.body);
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