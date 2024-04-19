import react, { useState } from 'react';
import './Menu.scss'
import { TbMenu2 } from "react-icons/tb";

export function Menu() {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    }

    return (
        <>
            <button onClick={toggleMenu} className='menuButton'>
                <TbMenu2 className='menuIcon' />
            </button>

            <nav className={`menu ${isActive ? "active" : "inactive"}`}>
                <ul className='navegacao'>
                <li className="link"><a href="/">Home</a></li>
                <li className="link"><a href="#about">About</a></li>
                <li className="link"><a href="#projects">Projects</a></li>
                <li className="link"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </>
    )
}