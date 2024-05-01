import './Sobre.scss'
import imgLogo from '../../assets/logo.svg';

export function Sobre() {

    return (
      <>
      <section id="about" className='container-sobre'>
         <div className='sobre-nos'>
            <h1 className='title'>Sobre Nós</h1>
            <h1 className='txt'>Seja bem-vindo ao TechVerse, sua porta de entrada para soluções web inovadoras e personalizadas. Combinando criatividade, expertise técnica e um compromisso inabalável com a excelência, nós da TechVerse estamos aqui para transformar suas ideias em realidade digital.</h1>
            <h1 className='title'>Quem Somos</h1>
            <h1 className='txt'>No TechVerse, somos apaixonados por tecnologia e pela criação de experiências online que impactam positivamente nossos clientes e suas audiências. Com uma equipe talentosa de designers, desenvolvedores e estrategistas digitais, estamos empenhados em fornecer soluções web de alta qualidade que impulsionam o sucesso dos nossos clientes.</h1>
         </div>
         <img src={imgLogo} className='imgLogo'/>
      </section>
      </>
   )
}