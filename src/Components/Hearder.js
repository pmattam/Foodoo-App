import React from 'react';
import mainLogo from '../images/foodoo-logo.png';
import { Link } from "react-router-dom";

let Header = () => {
    return (
    <div class="home-page-container"> 
        <img src={mainLogo} className="main-logo" alt="mainlogo" />
        <Link to="/login">Log In</Link>
    </div>
    )
}

export default Header;