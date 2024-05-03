import './Footer.scss'
import imgLogo from '../../assets/logo-header-footer.svg';

export function Footer() {

  return (
    <>
    <a href=''>
      <footer className='container-footer'>
        <img src={imgLogo} className="imgLogo"/>
        <div className='txtFooter'>
          <h1>© 2023 - TechVerse</h1>
          <h1>Terms And Conditions | Privacy Policy</h1>
        </div>
      </footer>
      </a>
    </>
  )
}