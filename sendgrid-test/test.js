// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey("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");
const msg = {
  to: 'anamikashasha96@gmail.com', // Change to your recipient
  from: 'anuradhapcs95@gmail.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })