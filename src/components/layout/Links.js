import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarLinks = (props) => {
    return (
        <div>
            <NavLink to="/" className="sidenav-trigger right" data-target="mobile-links">
                <i className="material-icons right">menu</i>
            </NavLink>
            <ul className="right hide-on-med-and-down">
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/products'>Products</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </div>
    )
}

export default NavBarLinks;