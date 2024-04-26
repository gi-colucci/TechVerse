const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { enviarEmail } = require('./email'); // Certifique-se de implementar o arquivo 'email.js' corretamente
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.post('/sendEmail', async (req, res) => { // Corrigido 'asynic' para 'async'
    const { email, mensagem } = req.body;
    try {
        await enviarEmail(email, mensagem); // Aguarda a conclusão da função enviarEmail
        res.send('Email enviado com sucesso!');
    } catch (error) {
        console.error('Erro ao enviar email:', error);
        res.status(500).send('Ocorreu um erro no envio do e-mail');
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html')); // Corrigido o caminho para o arquivo index.html
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});