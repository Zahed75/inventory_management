var nodemailer = require('nodemailer');

const SendEmailUtility = async (EmailTo, EmailText, EmailSubject) => {

    //SMTP SETUP

    let transporter = nodemailer.createTransport({
        host: "tech.syscomatic@gmail.com",
        port: 25,
        secure: false,
        auth: {
            user: "tech.syscomatic@gmail.com",
            pass: 'F@ll2@22'
        },
        tls: {
            rejectUnauthorized: false
        },

    });

    let mailOptions = {
        from: 'Syscomatic-Inventory Management System- <tech.syscomatic@gmail.com>',
        to: EmailTo,
        subject: EmailSubject,
        text: EmailText
    };

    return await transporter.sendMail(mailOptions)


}
module.exports = SendEmailUtility