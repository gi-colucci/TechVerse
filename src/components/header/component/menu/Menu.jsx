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
                <li className="link">
                    <FaHome className='icon-home' />
                    <a href="/">Home</a></li> 
                <li className="link">
                    <VscQuestion className='icon-about'/>
                    <a href="#about">About</a></li>
                <li className="link">
                    <GoProjectSymlink className='icon-project' />
                    <a href="#projects">Projects</a></li>
                <li className="link">
                    <IoMdContacts className='icon-contact' />
                    <a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </nav>
    )
}

