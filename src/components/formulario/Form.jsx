import React, { useState } from 'react';
import './Form.scss'

export function Form() {
    // referenciando as variáveis
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Nome:', nome);
        console.log('Email:', email);
        console.log('Mensagem:', mensagem);
        setNome('');
        setEmail('');
        setMensagem('');
    };

    return (
        <div className='container-form'>
            <h1 id="contact"></h1>
            <h1 className='title'>Vamos trabalhar juntos?</h1>
            <h1 className='title'>Entre em contato</h1>

            <form onSubmit={handleSubmit}>
                <div className='input-group'>
                   <input type="text" placeholder='Nome' id="nome" value={nome} onChange={(event) =>
                    setNome(event.target.value)} required/>
                </div>

                <div className='input-group'>
                    <input type="email" placeholder='Email' id="email" value={email} onChange={(event) =>
                    setEmail(event.target.value)} required/>
                </div>

                <div className='input-group-msg'>
                    <input type="mensagem" placeholder='Mensagem' id="msg" value={mensagem} onChange={(event) =>
                        setMensagem(event.target.value)} required/>
                </div>
                <div className='btn-submit'>
                    <button type="submit" value=''>Enviar</button>
                </div>
            </form>
        </div>
    );
}
