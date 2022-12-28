const createError = require('http-errors');
const bcrypt = require('bcryptjs');
const gravatar = require("gravatar");

const {User} = require('../../models');

const singup = async(req, res, next) => {
   try {
    const { email, password } = req.body;
    const user = await User.findOne({email});
    if(user) {
        throw createError(409, `${email} in use. Choose another`);
    }
    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(8));
    const avatarURL = gravatar.url(email)
    const result = await User.create({ email, password: hashPassword, avatarURL });
    res.json({
        status: "success",
        code: 201,
        data: {
          user: {
            email: email,
            subscription: "starter"
          }
        }
      }); 
   } catch (error) {
    next(error)
   } 
} 

module.exports = singup;