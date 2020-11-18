const nodemailer = require('nodemailer');
let transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'e210a9d4bd975c',
    pass: '9d4db67e2ff7a2'
  }
});
function sendEmail(req, res, err) {
  const message = {
    from: 'system@info.com', // Sender address
    to: req.body.email,         // List of recipients
    subject: 'Welcome to swfl engoy the experience', // Subject line
    text: 'Your account is verified' // Plain text body
  };
  transport.sendMail(message, function (err, info) {
    if (err) {
      return res.status(500).json(err);
    } else {
      console.log(info);
      return res.status(200).json(info);
    }
  });
}
module.exports.sendEmail = sendEmail