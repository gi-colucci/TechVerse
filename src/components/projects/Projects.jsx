import React, { useState} from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import './Projects.scss';
import { motion } from 'framer-motion';
import { VscGithubAlt } from "react-icons/vsc";
import { IoIosGlobe } from "react-icons/io";
import imgLemnos from '../../assets/logos/LemnosLogo.svg';
import imgMercury from '../../assets/logos/MercuryLogo.svg'
import imgAlpha from '../../assets/logos/AlphaSpeed.svg';
import imgGym from '../../assets/logos/GymInfinityLogo.svg';

export function Projects() {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isFlipped4, setIsFlipped4] = useState(false);

  // Função handleClick para controlar o flip de cada projeto individualmente
  const handleClick = (projectId) => {
    switch (projectId) {
      case 1:
        setIsFlipped1(!isFlipped1);
        break;
      case 2:
        setIsFlipped2(!isFlipped2);
        break;
      case 3:
        setIsFlipped3(!isFlipped3);
        break;
      case 4:
        setIsFlipped4(!isFlipped4);
        break;
      default:
        break;
    }
  };

  return (
      <motion.section id="container-projects"
      initial={{ opacity: 0, x: -50 }} 
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }} 
    >
        <h2 className='title'>Nossos Projetos</h2>
        <div id="projetos">
            <motion.div className='proj'
                  initial={{ opacity: 0, x: -50 }} 
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }} >
            <Flipper flipKey={isFlipped1}>
                <Flipped flipId="front">
                  <div className={`front ${isFlipped1 ? 'flipped' : ''}`}>
                    <img src={imgLemnos} className='img'/>
                    <div className="container-desc">
                      <h2 className='txt-title'>Lemnos</h2>
                      <h3 className='txt-description'>Projeto e-commerce feito utilizando React, SCSS & JS. Desde sua fundação em 2023, a Lemnos lidera o mercado tecnológico com a sua inovação, oferecendo uma ampla gama de produtos eletrônicos de ponta. </h3>
                    </div>
                  </div>
                </Flipped>
                <Flipped flipId="back">
                  <div className={`back ${isFlipped1 ? 'flipped' : ''}`}>
                  <img src={imgLemnos} className='img'/>
                    <div className="container-nav">
                      <h2 className='txt-title'>Lemnos</h2>
                      <a href='https://lemnos.vercel.app/' className='btnNavProj'><IoIosGlobe className='icon'/>Projeto Online</a>
                      <a href='https://github.com/L7643/Lemnos' className='btnNavProj'><VscGithubAlt className='icon'/>Repositório</a>
                    </div>
                  </div>
                </Flipped>
              </Flipper>
              <h2 className='txt-click' onClick={() => handleClick(1)}>Clique aqui →</h2>
            </motion.div>

            <motion.div className='proj'
                  initial={{ opacity: 0, x: -50 }} 
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }} >
                 <Flipper flipKey={isFlipped2}>
                <Flipped flipId="front">
                  <div className={`front ${isFlipped2 ? 'flipped' : ''}`}>
                  <img src={imgMercury} className='img'/>
                    <div className="container-desc">
                      <h2 className='txt-title'>Mercury</h2>
                      <h3 className='txt-description'>A Mercury foi um projeto criado utilizando HTML, CSS & JS, especializado na venda de veículos esportivos de alto desempenho, projetados para oferecer uma experiência de condução emocionante e potência excepcional.</h3>
                    </div>
                  </div>
                </Flipped>
                <Flipped flipId="back">
                  <div className={`back ${isFlipped2 ? 'flipped' : ''}`}>
                  <img src={imgMercury} className='img'/>
                    <div className="container-nav">
                      <h2 className='txt-title'>Mercury</h2>
                       <a href='https://lucasbonato.github.io/Mercury/' className='btnNavProj'><IoIosGlobe className='icon'/>Projeto Online</a>
                      <a href='https://github.com/LucasBonato/Mercury' className='btnNavProj'><VscGithubAlt className='icon'/>Repositório</a>
                    </div>
                  </div>
                </Flipped>
              </Flipper>
              <h2 className='txt-click' onClick={() => handleClick(2)}>Clique aqui →</h2>
            </motion.div>

          <motion.div className='proj'
                initial={{ opacity: 0, x: -50 }} 
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }} >
          <Flipper flipKey={isFlipped3}>
                <Flipped flipId="front">
                  <div className={`front ${isFlipped3 ? 'flipped' : ''}`}>
                  <img src={imgAlpha} className='img'/>
                    <div className="container-desc">
                      <h2 className='txt-title'>Alpha Speed</h2>
                      <h3 className='txt-description'>Alpha Speed, e-commerce de veículos excepcionais, feito utilizando HTML, CSS & JS. Fundada em 2021, tendo uma longa história de fornecer veículos de alta qualidade.</h3>
                    </div>
                  </div>
                </Flipped>
                <Flipped flipId="back">
                  <div className={`back ${isFlipped3 ? 'flipped' : ''}`}>
                  <img src={imgAlpha} className='img'/>
                    <div className="container-nav">
                      <h2 className='txt-title'>Alpha Speed</h2>
                      <a href='https://l7643.github.io/AlphaSpeed/' className='btnNavProj'><IoIosGlobe className='icon'/>Projeto Online</a>
                      <a href='https://github.com/L7643/AlphaSpeed' className='btnNavProj'><VscGithubAlt className='icon'/>Repositório</a>
                    </div>
                  </div>
                </Flipped>
              </Flipper>
              <h2 className='txt-click' onClick={() => handleClick(3)}>Clique aqui →</h2>
            </motion.div>

            <motion.div className='proj'
                  initial={{ opacity: 0, x: -50 }} 
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }} >            <Flipper flipKey={isFlipped4}>
                <Flipped flipId="front">
                  <div className={`front ${isFlipped4 ? 'flipped' : ''}`}>
                    <img src={imgGym} className='img'/>
                    <div className="container-desc">
                      <h2 className='txt-title'>Gym Infinity</h2>
                      <h3 className='txt-description'>Um projeto com aspecto simples focado no front-end, não conectado ao banco de dados, portanto não é um site "vivo" se resumindo a página inicial de uma academia demostrando tecnicas de desnvolvimento front. </h3>
                    </div>
                  </div>
                </Flipped>
                <Flipped flipId="back">
                  <div className={`back ${isFlipped4 ? 'flipped' : ''}`}>
                  <img src={imgGym} className='img'/>
                    <div className="container-nav">
                      <h2 className='txt-title'>Gym Infinity</h2>
                      <a href='https://lucasbonato.github.io/Infinity-Gym/' className='btnNavProj'><IoIosGlobe className='icon'/>Projeto Online</a>
                      <a href='https://github.com/LucasBonato/Infinity-Gym' className='btnNavProj'><VscGithubAlt className='icon'/>Repositório</a>
                    </div>
                  </div>
                </Flipped>
              </Flipper>
              <h2 className='txt-click' onClick={() => handleClick(4)}>Clique aqui →</h2>
            </motion.div>
        </div>
        </motion.section>
  )
}