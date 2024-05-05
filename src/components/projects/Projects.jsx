import React, { useState } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import './Projects.scss';
import img from '../../assets/Rectangle 44.png';
import { VscGithubAlt } from "react-icons/vsc";
import { IoIosGlobe } from "react-icons/io";


export function Projects() {
  const [isFlipped, setIsFlipped] = useState({});

  const handleClick = (projectId) => {
    setIsFlipped(prevState => ({
      ...prevState,
      [projectId]: !prevState[projectId]
    }));
  };
  
  return (
    <section id="container-projects">
      <h2 className='title'>Nossos Projetos</h2>
      <div id="projetos">
        {[1, 2, 3, 4].map(projectId => (
          <div className="proj" key={projectId}>
            <Flipper flipKey={isFlipped[projectId]}>
              <Flipped flipId={`front-${projectId}`}>
                <div className={`front ${isFlipped[projectId] ? 'flipped' : ''}`}>
                  <img src={img} className='img' alt="Imagem do projeto"/>
                  <div className="container-desc">
                    <h2 className='txt-title'>Lemnos</h2>
                    <h3 className='txt-description'>Desde sua fundação em 2023, a Lemnos lidera o mercado tecnológico com a sua inovação, oferecendo uma ampla gama de produtos de ponta. </h3>
                  </div>
                </div>
              </Flipped>
              <Flipped flipId={`back-${projectId}`}>
                <div className={`back ${isFlipped[projectId] ? 'flipped' : ''}`}>
                  <img src={img} className='img' alt="Imagem do projeto"/>
                  <div className="container-nav">
                    <h2 className='txt-title'>Lemnos</h2>
                    <a href='https://lemnos.vercel.app/' className='btnNavProj'><IoIosGlobe className='icon'/>Projeto Online</a>
                    <a href='https://lemnos.vercel.app/' className='btnNavProj'><VscGithubAlt className='icon'/>Repositório</a>
                  </div>
                </div>
              </Flipped>
            </Flipper>
            <h2 className='txt-click' onClick={() => handleClick(projectId)}>Click Here →</h2>
          </div>
        ))}
      </div>
    </section>
  );
}