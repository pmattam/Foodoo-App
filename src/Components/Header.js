import React from 'react';
import mainLogo from '../images/foodoo-logo.png';
import { Link } from "react-router-dom";

let Header = () => {
    return (
    <div className="header"> 
        <div><img src={mainLogo} className="main-logo" alt="mainlogo" /></div>
        <div className="space"></div>
        <div><Link to="/login">Log In</Link></div>
    </div>
    )
}

export default Header;