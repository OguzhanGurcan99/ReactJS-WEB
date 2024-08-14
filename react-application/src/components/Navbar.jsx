import './Navbar.css';

import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return <div className='nav_bar'>
        <div className='link_bar'>
            <Link to="/">Home</Link>
            <Link to="/sale">Sale</Link>
            <Link to="/rent">Rent</Link>
            <Link to="/favorites">Favorites</Link>
        </div>

    </div>





};

export default Navbar;
