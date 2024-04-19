import imgLogo from '../../assets/logo.svg';
import BackgroundBanner from '../../assets/background-banner.png';
import iconIg from '../../assets/icon-ig.png';
import iconLi from '../../assets/icon-li.png';
import iconFb from '../../assets/icon-fb.png';
import './Banner.scss'

export function Banner() {

  return (
    <section className='container-banner'>
      <img src={ BackgroundBanner} alt="banner" className='banner'/>
      <div className="containerHero">
        <div className='txtIntro'>
          <h1>Olá, nós somos a </h1>
          <a className='tech-font'>TechVerse</a>
          <h1>Navegando pelas vastidões do desenvolvimento web. Descubra novos horizontes para sua presença online.</h1>
          <div className="contato">
            <a href='#contact' className='btn-contato'>Entre em Contato Conosco →</a>
              <div className="icons">
                <a href='https://www.linkedin.com/in/tech-verse-6429b82a2/'><img src={iconLi} alt="linkedin" className='icon'/></a>
                <a href='https://www.instagram.com/_techverse_1/'><img src={iconIg} alt="instagram" className='icon'/></a>
                <a href='https://www.facebook.com/profile.php?id=61558240271859'><img src={iconFb} alt="facebook" className='icon'/></a>
              </div>
          </div>
        </div>
        <img src={imgLogo} className='imgLogo'/>
      </div>
    </section>
  )
}