import React, { useState, useEffect } from 'react';
import './Form.scss';
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

    const [form, setDatalhes] = useState({
        name: '',
        email: '',
        message: '',
    });
    
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
        const mailtoLink = `mailto:devtechverse@gmail.com?subject=Mensagem de ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom:%20${encodeURIComponent(email)}`;
        console.log(mailtoLink); // Log do link mailto
        window.location.href = mailtoLink;
    };

    return (
        <div className='container-form'>
            <h2 id="contact"></h2>
            <h2 className='title'>Vamos trabalhar juntos?</h2>
            <h2 className='title'>Entre em contato</h2>

            <form onSubmit={handleSubmit}>
                <div className='input-group'>
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleDetalhes}
                        type="text"
                        placeholder="Nome"
                    />
                </div>

                <div className='input-group'>
                    <input
                        name="email"
                        value={form.email}
                        onChange={handleDetalhes}
                        type="email"
                        placeholder="Email"
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
        </div>
    );
}