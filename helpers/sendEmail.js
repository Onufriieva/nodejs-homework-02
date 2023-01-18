const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async(data) => {
  try {
    const email = {...data, from: 'onufrieva.julia@gmail.com'};
    await sgMail.send(email);
    return true;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

// const data = {
//   to: "fetaco3242@moneyzon.com",
//   subject: "Verify email",
//   html: `<p>Verify email</p>`
// };

module.exports = sendEmail;