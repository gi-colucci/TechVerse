const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5173;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'SEU_EMAIL@gmail.com',
        pass: 'SUA_SENHA_DO_GMAIL'
    }
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/send-email', (req, res) => {
    const { name, email, message } = req.body;

    transporter.sendMail({
        from: email,
        to: 'devtechverse@gmail.com',
        subject: 'Novo contato do formulário de contato',
        html: `
            <p>Nome: ${name}</p>
            <p>Email: ${email}</p>
            <p>Mensagem: ${message}</p>
        `
    }, (error, info) => {
        if (error) {
            console.error('Erro ao enviar o email:', error);
            res.status(500).send('Erro ao enviar o email. Por favor, tente novamente mais tarde.');
        } else {
            console.log('Email enviado:', info.response);
            res.status(200).send('Email enviado com sucesso!');
        }
    });
});

app.listen(PORT, () => {
    console.log(Servidor rodando na porta ${PORT});
});