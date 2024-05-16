import React, { useState, useEffect } from 'react';
import './Form.scss'
// import sendEmail from '../../email';
import axios from 'axios';
import ScrollReveal from 'scrollreveal';

export function Form() {
    // useEffect(() => {
    //     ScrollReveal().reveal('.container-form ',
    //     {
    //     origin: 'left', 
    //     distance: '100px', 
    //     duration: 1000,
    //     delay: 0, 
    //     easing: 'ease-out', 
    //     opacity: 0, 
    //     scale: 1,
    //     reset: false, 
    //   });
    // }, []);

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;setForm(prevForm => ({...prevForm,[name]: value,}));
        console.log(value)
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/send-email', form);
            alert('Email enviado com sucesso!');
            setForm({
                name: '',
                email: '',
                message: '',
            });
        } catch (error) {
            console.error('Erro ao enviar o email:', error);
            alert('Erro ao enviar o email. Por favor, tente novamente mais tarde.');
        }
    };

    return (
        <div className='container-form'>
            <h2 id="contact"></h2>
            <h2 className='title'>Vamos trabalhar juntos?</h2>
            <h2 className='title'>Entre em contato</h2>

            <form onSubmit={handleSubmit}>
                <div className='input-group'>
                    <input
                        type="text"
                        placeholder='Nome'
                        name="name"
                        id="nome"
                        value={form.name} 
                        onChange={handleChange} 
                        required
                    />
                </div>

                <div className='input-group'>
                    <input
                        type="email"
                        placeholder='Email'
                        name="email"
                        id="email"
                        value={form.email} 
                        onChange={handleChange} 
                        required
                    />
                </div>

                <div className='input-group-msg'>
                    <input
                        type="text"
                        placeholder='Mensagem'
                        name="message"
                        id="msg"
                        value={form.message} 
                        onChange={handleChange} 
                        required
                    />
                </div>
                
                <div className='btn-submit'>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    );
}