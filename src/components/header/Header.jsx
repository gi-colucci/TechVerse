import './Header.scss'
import imgLogo from '../../assets/logo-header-footer.svg';
import { Menu } from './component/menu/Menu'

export function Header() {
  return (
    <header className='header'>
        <img src={imgLogo} className='imgLogo'/>
        <nav className='nav-infos'>
          <ul >
            <li className="link">
              <a href="/">Home</a>
            </li>
            <li className="link">
              <a href="#about">About</a>
            </li>
            <li className="link">
              <a href="#projects">Projects</a>
            </li>
            <li className="link">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <nav className="menuMobile">
          <Menu />
        </nav>
    </header>
  )
}