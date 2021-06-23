//code from nodemailer react youtube video

//======================================================
//environmental variables in .env file:
//SMTP info
MAIL_FROM = "" //* where you want to send the mail from
MAIL_HOST = ""
MAIL_PORT = Number
MAIL_USER = ""
MAIL_PASS = "password"
//=======================================================

//=======================================================
//backend code (index.js or server.js?)

const express = require("express")
const app = express()
require("dotenv").config()
const bodyParser = require("body-parser")
const cors = require("cors")


const nodemailer = require("nodemailer")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())




//Post Route
app.post("/send_mail", cors(), async (req, res) => {
    let { text } = req.body
    const transport = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    })

    await transport.sendMail({
        from: process.env.MAIL_FROM,
        to: "user email you wish to send to",  //will likely be developer or project manager mail
        subject: "test email",   //likely a notification for a project candidate or project manager
        html: `<div className="email" style="  
        border: 1px solid black;
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px;   
        ">
        <h2>Here is your email!</h2>
        <p>${text}</p>

        <p>All the best, Darwin</p>
        </div>
        `
    })


})


app.listen((process.env.PORT || 4000, () => {
    console.log("Server is listening on port 4000")
}))
//=====================================================


//=======================================================
//Code entered in src/App.js..possibly handle as component/utility?
import axios from "axios"
import React, { useState } from 'react'
import './App.css';

function App() {
    const [sent, setSent] = useState(false)
    const [text, setText] = useState("")

    //function to handle sending of email
    const handleSend = async () => {
        setSent(true)
        try {
            await axios.post("http://localhost:4000/send_mail", {text})
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="App">
            {!sent ? (
                     <form onSubmit={handleSend}>
                     <input type="text" value={text} onChange={(event) => setText(event.target.value)}
                     />
                     <button type="submit">Send Email</button>
     
                 </form>
                  ): (
                      <h1>Email Sent</h1>
                  )}
             </div>
    )
}

export default App;
//=======================================================


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '',
        pass: ''
    }
});

let mailOptions = {
    from: '', //email sending account
    to: '', // where email is being sent
    subject: '', //email subject
    text: ''
};

transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
        console.log('Error Occurs');
    } else {
        console.log('Email sent!!!');
    }
});