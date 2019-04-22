import React from 'react';
import { NavLink } from 'react-router-dom';
import Links from './Links';
import MobileLinks from './MobileLinks';

const NavBar = (props) => {
    return (
        <div className="container">
            <nav className="nav-wrapper grey darken-3">
                <NavLink to='/' className="brand-logo left">CallBells</NavLink>
                <Links />
            </nav>
            <MobileLinks />
        </div>
    )
}

export default NavBar;