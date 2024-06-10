import './Header.scss'
import imgLogo from '../../assets/logos/logo-header-footer.svg';
import { Menu } from './component/menu/Menu'

export function Header() {
  return (
    <header className='header'>
        <a href="#">
          <img src={imgLogo} className='imgLogo'/>
        </a>
        <nav className='nav-infos'>
          <ul >
            <li className="link">
              <a href="/">Home</a>
            </li>
            <li className="link">
              <a href="#about">Sobre</a>
            </li>
            <li className="link">
              <a href="#container-projects">Projetos</a>
            </li>
            <li className="link">
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </nav>

        <nav className="menuMobile">
          <Menu />
        </nav>
    </header>
  )
}