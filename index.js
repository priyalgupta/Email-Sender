var dotenv = require('dotenv')
dotenv.config()

const nodemailer = require('nodemailer');

let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    secure: false,
    auth: {
        user: process.env.EMAIL_TEST,
        pass: process.env.EMAIL_TEST_APP_PSWD
    }
})


let details = {
    from: process.env.EMAIL_TEST,
    to: process.env.EMAIL_TEST,
    subject: "Hello",
    text: "Testing"
}

mailTransporter.sendMail(details,(err)=>{
    if(err){
        console.log("It has an error", err)
    }
    else{
        console.log("Email has sent")
    }
})