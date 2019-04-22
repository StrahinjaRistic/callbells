import React from 'react';
import { NavLink } from 'react-router-dom';

const MobileLinks = () => {
    return (
        <ul className="sidenav sidenav-close" id="mobile-links">
            <li><NavLink to="">
                <i className="material-icons right">clear</i>
            </NavLink></li>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/products'>Products</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
    )
}
export default MobileLinks;