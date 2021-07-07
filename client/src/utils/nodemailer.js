"use strict";
require('dotenv').config();
require("cors");


const nodemailer = require("nodemailer");
// async..await is not allowed in global scope, must use a wrapper
const sendEmail = async () => {
  let testAccount = await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL, 
      pass: process.env.MAIL_PASS
    }
  });
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'Smart Project Recruiter', // sender address
    to: 'darrell.chess@gmail.com',// list of receivers
    subject: "Someone is interested in working on your project with you!", // Subject line
    text: 'comment', // plain text body
  
  });
  console.log("Message sent: %s", info.messageId);
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  sendEmail().catch(console.error)
}
    

    export default sendEmail;