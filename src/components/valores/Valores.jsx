import './Valores.scss';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

export function Valores() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector('.container');
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
    <>
      <motion.section
        className="container"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
        transition={{ duration: 1 }}
      >
        <h2 className="title">Por que Escolher a TechVerse:</h2>
        <div className="valores">
          <hr className="line" />

          <div className="textValues">
            <h3>•<span>Experiência e Expertise:</span> Temos anos de experiência e um histórico comprovado de sucesso na criação de soluções web de alta qualidade para uma variedade de clientes e setores.</h3>
            <h3>•<span>Parceria de Longo Prazo:</span> Estamos comprometidos em estabelecer relações de longo prazo com nossos clientes, trabalhando como parceiros em seu sucesso contínuo.</h3>
            <h3>•<span>Compromisso com a Qualidade:</span> Nós nos esforçamos para alcançar os mais altos padrões de qualidade em tudo o que fazemos, desde o design até o desenvolvimento e implementação.</h3>
            <h3>•<span>Abordagem Personalizada:</span> Cada projeto é tratado de forma única e personalizada, adaptando nossos serviços para atender às suas necessidades específicas e objetivos comerciais.</h3>
          </div>
        </div>
      </motion.section>
    </>
  );
}
