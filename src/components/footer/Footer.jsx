import './Footer.scss'
import imgLogo from '../../assets/logos/logo-header-footer.svg';

export function Footer() {

  return (
    <>
    <a href=''>
      <footer className='container-footer'>
        <img src={imgLogo} className="imgLogo"/>
        <div className='txtFooter'>
          <h1>© 2023 - TechVerse</h1>
          <h1>Termos e Condições | Política de Privacidade</h1>
        </div>
      </footer>
      </a>
    </>
  )
}