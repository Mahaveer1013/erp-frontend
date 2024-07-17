import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const hadleMenuBar = () => {
        setIsOpen(prev=>!prev)   
    }

    return (
        <header>
            <img src="https://panimalar.ac.in/assets/images/pec-logo.png" alt="logo" />
            <ul className={isOpen ? 'open' : ''}>
                <li onClick={hadleMenuBar}>
                    <NavLink to={'/'}>Home</NavLink>
                </li>
                <li onClick={hadleMenuBar}>
                    <NavLink to={'/about-us'}>About Us</NavLink>
                </li>
                <li onClick={hadleMenuBar}>
                    <NavLink to={'/courses'}>Courses</NavLink>
                </li>
                <li onClick={hadleMenuBar}>
                    <NavLink to={'/academics'}>Academics</NavLink>
                </li>
                <li onClick={hadleMenuBar}>
                    <NavLink to={'/placements'}>Placements</NavLink>
                </li>
                <li onClick={hadleMenuBar}>
                    <NavLink to={'/research'}>Research</NavLink>
                </li>
                <li className='login' onClick={hadleMenuBar}>
                    <NavLink to={'/login'}>Login</NavLink>
                </li>
                <li className='admission' onClick={hadleMenuBar}>
                    <NavLink to={'/admission'}>Admission</NavLink>
                </li>
            </ul>
            <FontAwesomeIcon icon={faBars} className='menu-bar' onClick={hadleMenuBar}/>
        </header>
    )
}

export default Header