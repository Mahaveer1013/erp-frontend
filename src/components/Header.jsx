import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

    const [isOpen, setIsOpen] = useState(true);

    return (
        <header className={isOpen ? 'open' : ''}>
            <img src="https://panimalar.ac.in/assets/images/pec-logo.png" alt="logo" />
            <ul className={isOpen ? 'open' : ''}>
                <li>
                    <NavLink to={'/'} className={'active'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/about-us'}>About Us</NavLink>
                </li>
                <li>
                    <NavLink to={'/courses'}>Courses</NavLink>
                </li>
                <li>
                    <NavLink to={'/academics'}>Academics</NavLink>
                </li>
                <li>
                    <NavLink to={'/coe'}>COE</NavLink>
                </li>
                <li>
                    <NavLink to={'/placements'}>Placements</NavLink>
                </li>
                <li>
                    <NavLink to={'/research'}>Research</NavLink>
                </li>
                <li className='admission'>
                    <NavLink to={'/admission'}>Admission</NavLink>
                </li>
            </ul>
            <FontAwesomeIcon icon={faBars} className='menu-bar' />
        </header>
    )
}

export default Header