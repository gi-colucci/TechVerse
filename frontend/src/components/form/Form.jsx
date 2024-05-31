import React, { useState, useEffect } from 'react';
import { sendCustomEmail } from './email';
import './Form.scss'
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

    const [form, setDatalhes] = useState({
        email: '',
        message: '',
      });
    
      const handleDetalhes = (e) => {
        const { name, value } = e.target;
    
        setDatalhes((prevDetalhes) => {
          return {
            ...prevDetalhes,
            [name]: value,
          };
        });
      };
    
      const handleSendEmail = () => {
        sendCustomEmail(form);
      };

    return (
        <div className='container-form'>
            <h2 id="contact"></h2>
            <h2 className='title'>Vamos trabalhar juntos?</h2>
            <h2 className='title'>Entre em contato</h2>

            <form>
                <div className='input-group'>
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleDetalhes}
                        type="text"
                        placeholder="name"
                    />
                </div>

                <div className='input-group'>
                    <input
                        name="email"
                        value={form.email}
                        onChange={handleDetalhes}
                        type="email"
                        placeholder="email"
                    />
                </div>

                <div className='input-group-msg'>
                    <input
                       name="message"
                       value={form.message}
                       onChange={handleDetalhes}
                       type="text"
                       placeholder="mensagem"
                    />
                </div>
                
                <div className='btn-submit'>
                    <button onClick={handleSendEmail}>Enviar</button>
                </div>
            </form>
        </div>
    );
}