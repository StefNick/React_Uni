import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DiCodeBadge } from 'react-icons/di';
import {FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

function Navbar() {
    const[click, setClick] = useState(false);
    const[button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    },[]);

    window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <DiCodeBadge className="navbar-icon" />BEST Chișinău
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                             <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                 Home
                             </Link>
                        </li>
                        <li className="nav-item">
                             <Link to="/projects" className="nav-links" onClick={closeMobileMenu}>
                                 Projects
                             </Link>
                        </li>
                        <li className="nav-item">
                             <Link to="/contactus" className="nav-links" onClick={closeMobileMenu}>
                                 Contact Us
                             </Link>
                        </li>
                        <li className="nav-btn">
                            {button ? (
                                <Link to="/apply" className="btn-link" >
                                    <Button buttonStyle="btn--outline">Apply</Button>
                                </Link>
                            ): (
                                <Link to="/apply" className="btn-link" onClick={closeMobileMenu}>
                                    <Button buttonStyle="btn--outline"
                                            buttonSize="btn--mobile"
                                    ></Button>
                                </Link>
                            )}
                        </li>

                    </ul>
                </div>
            </div>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
