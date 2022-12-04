const contactsOperation = require('../../models/contacts');
const createError = require('http-errors')

const {schemaId} = require('../../schemas/contacts')

// const deleteContact = async(req, res, next) => {
//     try {
//         const {contactId} = req.params;
//         const removedContact = await contactsOperation.removeContact(contactId);
//         if(!removedContact){
//           throw createError(404, "Not found")
//         }
//         res.json({
//           status: "success",
//           code: 200,
//           message: "contact deleted",
//           data: {
//             result: removedContact
//           }
//         });
//       } catch (error) {
//         next(error)
//     }
// }




// const validationId = (schema, contactId) => {
//   const contactId = req.params.contactId;
//   return (req, res, next) => {
//     const { error } = schema.validate(contactId);
//     if (error) {
//       error.status = 400;
//       next(error);
//       return;
//     }
//     next();
//   };
// };




const deleteContact = async(req, res, next) => {
  const contactId = req.params.contactId;
  try {
      const { error } = schemaId.validate(contactId);

      if(error){
        throw createError(400, "Bad id")
      } else if(!error){
        const removedContact = await contactsOperation.removeContact(contactId);      
        
      if (removedContact) {
      return res.json({
             status: "success",
             code: 200,
             message: "contact deleted",
             data: {
               result: removedContact
             }
           });;
    } 
    if(!removedContact){
      throw createError(404, "Not found")
    }
      }     
    
    } catch (error) {
      next(error)
  }
}


module.exports = deleteContact;