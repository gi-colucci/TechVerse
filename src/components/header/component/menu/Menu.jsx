import React, { useState, useRef } from 'react';
import './Menu.scss';
import { LuMenu } from "react-icons/lu";
import { GoProjectSymlink } from "react-icons/go";
import { IoMdContacts } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { VscQuestion } from "react-icons/vsc";

export function Menu() {
    const dropDownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
        toggleModal();
    }

    const toggleModal = () => {
        const htmlTag = document.querySelector('html');
        const modalOpen = isActive;
        if (modalOpen) {
            htmlTag.classList.remove('modalOpen');
        } else {
            htmlTag.classList.add('modalOpen');
        }
    }

    return (
        <nav className='menuNav'>
            <button onClick={toggleMenu} className='menuButton'>
                <LuMenu className='menuIcon' />
            </button>

            <div onClick={toggleMenu} className={`modal ${isActive ? "active" : "inactive"}`}></div>
            
            <nav ref={dropDownRef} className={`menu ${isActive ? "active" : "inactive"}`}>
                <ul className='navegacao'>
                    <button onClick={toggleMenu} className='btnFechar'>X</button>
                    <a href="#" > 
                        <FaHome className='icon' />
                        <li className="link">Home</li>
                    </a>
                    <a href="#about" > 
                        <VscQuestion className='icon'/>
                        <li className="link">About</li>
                    </a>
                    <a href="#container-projects" > 
                        <GoProjectSymlink className='icon' />
                        <li className="link">Projects</li>
                    </a>
                    <a href="#contact" > 
                        <IoMdContacts className='icon' />
                        <li className="link">Contact</li>
                    </a>
                </ul>
            </nav>
        </nav>
    )
}