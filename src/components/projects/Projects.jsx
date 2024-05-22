import React, { useState, useEffect } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import './Projects.scss';
import img from '../../assets/img-projects.jpeg';
import { VscGithubAlt } from "react-icons/vsc";
import { IoIosGlobe } from "react-icons/io";
import ScrollReveal from 'scrollreveal';

export function Projects() {
  // useEffect(() => {
  //   ScrollReveal().reveal('#container-projects',
  //   {
  //   origin: 'left', 
  //   distance: '100px', 
  //   duration: 1000,
  //   delay: 0, 
  //   easing: 'ease-out', 
  //   opacity: 0, 
  //   scale: 1, 
  //   reset: false, 
  // });
  // }, []);
  
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
    <section id="container-projects">
      <h2 className='title'>Nossos Projetos</h2>
      <div id="projetos">
            <div className='proj'>
            <Flipper flipKey={isFlipped1}>
                <Flipped flipId="front">
                  <div className={`front ${isFlipped1 ? 'flipped' : ''}`}>
                    <img src={img} className='img'/>
                    <div className="container-desc">
                      <h2 className='txt-title'>Lemnos</h2>
                      <h3 className='txt-description'>Projeto e-commerce feito utilizando React, SCSS & JS. Desde sua fundação em 2023, a Lemnos lidera o mercado tecnológico com a sua inovação, oferecendo uma ampla gama de produtos eletrônicos de ponta. </h3>
                    </div>
                  </div>
                </Flipped>
                <Flipped flipId="back">
                  <div className={`back ${isFlipped1 ? 'flipped' : ''}`}>
                    <img src={img} className='img'/>
                    <div className="container-nav">
                      <h2 className='txt-title'>Lemnos</h2>
                      <a href='https://lemnos.vercel.app/' className='btnNavProj'><IoIosGlobe className='icon'/>Projeto Online</a>
                      <a href='https://github.com/L7643/Lemnos' className='btnNavProj'><VscGithubAlt className='icon'/>Repositório</a>
                    </div>
                  </div>
                </Flipped>
              </Flipper>
              <h2 className='txt-click' onClick={() => handleClick(1)}>Click Here →</h2>
            </div>

            <div className='proj'>
            <Flipper flipKey={isFlipped2}>
                <Flipped flipId="front">
                  <div className={`front ${isFlipped2 ? 'flipped' : ''}`}>
                    <img src={img} className='img'/>
                    <div className="container-desc">
                      <h2 className='txt-title'>Mercury</h2>
                      <h3 className='txt-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in quam dapibus, consequat urna scelerisque, tempor est.</h3>
                    </div>
                  </div>
                </Flipped>
                <Flipped flipId="back">
                  <div className={`back ${isFlipped2 ? 'flipped' : ''}`}>
                    <img src={img} className='img'/>
                    <div className="container-nav">
                      <h2 className='txt-title'>Mercury</h2>
                       <a href='https://lucasbonato.github.io/Mercury/' className='btnNavProj'><IoIosGlobe className='icon'/>Projeto Online</a>
                      <a href='https://github.com/LucasBonato/Mercury' className='btnNavProj'><VscGithubAlt className='icon'/>Repositório</a>
                    </div>
                  </div>
                </Flipped>
              </Flipper>
              <h2 className='txt-click' onClick={() => handleClick(2)}>Click Here →</h2>
            </div>

          <div className='proj'>
          <Flipper flipKey={isFlipped3}>
                <Flipped flipId="front">
                  <div className={`front ${isFlipped3 ? 'flipped' : ''}`}>
                    <img src={img} className='img'/>
                    <div className="container-desc">
                      <h2 className='txt-title'>Alpha Speed</h2>
                      <h3 className='txt-description'>Alpha Speed, e-commerce de veículos excepcionais, feito utilizando HTML, CSS & JS. Fundada em 2021, tendo uma longa história de fornecer veículos de alta qualidade.</h3>
                    </div>
                  </div>
                </Flipped>
                <Flipped flipId="back">
                  <div className={`back ${isFlipped3 ? 'flipped' : ''}`}>
                    <img src={img} className='img'/>
                    <div className="container-nav">
                      <h2 className='txt-title'>Alpha Speed</h2>
                      <a href='https://l7643.github.io/AlphaSpeed/' className='btnNavProj'><IoIosGlobe className='icon'/>Projeto Online</a>
                      <a href='https://github.com/L7643/AlphaSpeed' className='btnNavProj'><VscGithubAlt className='icon'/>Repositório</a>
                    </div>
                  </div>
                </Flipped>
              </Flipper>
              <h2 className='txt-click' onClick={() => handleClick(3)}>Click Here →</h2>
            </div>

            <div className='proj'>
            <Flipper flipKey={isFlipped4}>
                <Flipped flipId="front">
                  <div className={`front ${isFlipped4 ? 'flipped' : ''}`}>
                    <img src={img} className='img'/>
                    <div className="container-desc">
                      <h2 className='txt-title'>Gym Infinity</h2>
                      <h3 className='txt-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in quam dapibus, consequat urna scelerisque, tempor est.. </h3>
                    </div>
                  </div>
                </Flipped>
                <Flipped flipId="back">
                  <div className={`back ${isFlipped4 ? 'flipped' : ''}`}>
                    <img src={img} className='img'/>
                    <div className="container-nav">
                      <h2 className='txt-title'>Gym Infinity</h2>
                      <a href='https://lucasbonato.github.io/Infinity-Gym/' className='btnNavProj'><IoIosGlobe className='icon'/>Projeto Online</a>
                      <a href='https://github.com/LucasBonato/Infinity-Gym' className='btnNavProj'><VscGithubAlt className='icon'/>Repositório</a>
                    </div>
                  </div>
                </Flipped>
              </Flipper>
              <h2 className='txt-click' onClick={() => handleClick(4)}>Click Here →</h2>
            </div>
        </div>
      </section>
  )
}