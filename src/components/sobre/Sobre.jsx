import './Sobre.scss';
import imgLogo from '../../assets/logos/logo.svg';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

export function Sobre() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const container = document.getElementById('about');
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
                id="about"
                className="container-sobre"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
                transition={{ duration: 1 }}
            >
                <div className="sobre-nos">
                    <h1 className="title">Sobre Nós</h1>
                    <h1 className="txt">Seja bem-vindo ao TechVerse, sua porta de entrada para soluções web inovadoras e personalizadas.
                        Combinando criatividade, expertise técnica e um compromisso inabalável com a excelência, nós da
                        TechVerse estamos aqui para transformar suas ideias em realidade digital.</h1>
                    <h1 className="title">Quem Somos</h1>
                    <h1 className="txt">No TechVerse, somos apaixonados por tecnologia e pela criação de experiências online que impactam
                        positivamente nossos clientes e suas audiências. Com uma equipe talentosa de designers, desenvolvedores
                        e estrategistas digitais, estamos empenhados em fornecer soluções web de alta qualidade que impulsionam
                        o sucesso dos nossos clientes.</h1>
                </div>
                <motion.img src={imgLogo} className="imgLogo" />
            </motion.section>
        </>
    );
}
