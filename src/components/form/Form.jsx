import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Form.scss';

export function Form() {
    const [form, setDatalhes] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isVisible, setIsVisible] = useState(false);

    const handleDetalhes = (e) => {
        const { name, value } = e.target;
        setDatalhes((prevDetalhes) => ({
            ...prevDetalhes,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = form;
        const mailtoLink = `mailto:devtechverse@gmail.com?subject=Nova Mensagem&body=De: ${encodeURIComponent(email)}%0A%0A${encodeURIComponent(message)}`;
        console.log(mailtoLink); // Log do link mailto
        window.location.href = mailtoLink;
    };

    useEffect(() => {
        const handleScroll = () => {
            const container = document.getElementById('container-form');
            const rect = container.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.div
            className="container-form"
            id="container-form"
            initial={{ x: '-100%', opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : { x: '-100%', opacity: 0 }}
            transition={{ duration: 1.5 }}
        >
            <h2 id="contact"></h2>
            <h2 className='title'>Vamos trabalhar juntos?</h2>
            <h2 className='title'>Entre em contato:</h2>

            <form onSubmit={handleSubmit}>
                <div className='input-group'>
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleDetalhes}
                        type="text"
                        placeholder="Seu nome"
                    />
                </div>

                <div className='input-group'>
                    <input
                        name="email"
                        value={form.email}
                        onChange={handleDetalhes}
                        type="email"
                        placeholder="Seu e-mail"
                    />
                </div>

                <div className='input-group-msg'>
                    <input
                       name="message"
                       value={form.message}
                       onChange={handleDetalhes}
                       type="text"
                       placeholder="Mensagem"
                    />
                </div>
                
                <div className='btn-submit'>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </motion.div>
    );
}
