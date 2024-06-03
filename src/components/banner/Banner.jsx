import React, { useState, useEffect } from 'react';
import imgLogo from '../../assets/logos/logo.svg';
import BackgroundBanner from '../../assets/background-banner.png';
import iconIg from '../../assets/icons/icon-ig.svg';
import iconLi from '../../assets/icons/icon-li.svg';
import iconFb from '../../assets/icons/icon-fb.svg';
import './Banner.scss'

export function Banner() {
  const [displayText, setDisplayText] = useState('');
  const introText = "TechVerse.";
  
  useEffect(() => {
    const textArray = introText.split('');
    let displayText = '';

    const timeoutIds = textArray.map((letter, i) => {
      return setTimeout(() => {
        displayText += letter;
        setDisplayText(displayText);
      }, 150 * i);
    });

    return () => {
      timeoutIds.forEach(id => clearTimeout(id));
    };
  }, []);

  return (
    <section className='container-banner'>
      <div className="banner-wrapper">
        <img src={BackgroundBanner} alt="banner" className='banner'/>
      </div>
      <div className="containerHero">
        <div className='txtIntro'>
          <h3>Olá, nós somos a </h3>
          <h1 className='tech-font'>{displayText}</h1>
          <h3>Navegando pelas vastidões do desenvolvimento web. Descubra novos horizontes para sua presença online.</h3>
          <div className="contato">
            <a href='#contact' className='btn-contato'>Entre em Contato Conosco →
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
            <div className="icons">
              <a href='https://www.linkedin.com/in/tech-verse-6429b82a2/' target='_blank'><img src={iconLi} alt="linkedin" className='iconLi'/></a>
              <a href='https://www.instagram.com/_techverse_1/' target='_blank'><img src={iconIg} alt="instagram" className='iconIg'/></a>
              <a href='https://www.facebook.com/profile.php?id=61558240271859' target='_blank'><img src={iconFb} alt="facebook" className='iconFc'/></a>
            </div>
          </div>
        </div>
        <img src={imgLogo} className='imgLogo'/>
      </div>
    </section>
  )
}