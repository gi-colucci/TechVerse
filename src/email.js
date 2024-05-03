const nodemailer  = require('nodemailer');  

const transpoter = nodemailer.createTransport({
    service: 'Gmail',
});

async function  EnviarEmail(email, mensagem){
    const mailOptions = {
        from: email,
        to: "devtechverse@gmail.com",
        subject:'Nova mensagem de contato!',
        text: `Email: ${email}\n\nMensagem:\n${mensagem}` 
    };

    await transpoter.sendMail(mailOptions);
}
module.exports = {EnviarEmail};