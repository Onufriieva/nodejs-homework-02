const singup = require('./singup');
const login = require('./login');
const logout = require('./logout');
const updateAvatar = require('./updateAvatar');
const verifyEmail = require('./verifyEmail');
const resendVerifyEmail = require('./resendVerifyEmail');

module.exports = {
    singup,
    login,
    logout,
    updateAvatar,
    verifyEmail,
    resendVerifyEmail
}