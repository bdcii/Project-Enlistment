"use strict";

const nodemailer = require("nodemailer");
// async..await is not allowed in global scope, must use a wrapper
const sendEmail = async (emailAddress) => {
  let testAccount = await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "smartprojectrecruiter@gmail.com", 
      pass: "SmartPr0j3ct!"
    }
  });
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'Smart Project Recruiter', // sender address
    to: emailAddress,// list of receivers
    subject: "Someone is interested in working on your project with you!", // Subject line
    text: "Test 123", // plain text body
  
  });
  console.log("Message sent: %s", info.messageId);
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
    

    export default sendEmail;