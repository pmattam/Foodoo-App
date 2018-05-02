import React from 'react';
import { Link } from "react-router-dom";

import mainLogo from '../images/foodoo-logo.png';
import filterIcon from '../images/filter-Icon.svg';
import createNewIcon from '../images/create-new-icon.svg';

let Header = () => {
    return (
    <div className="header"> 
        <div><Link to="/"><img src={mainLogo} className="main-logo" alt="mainlogo" /></Link></div>
        <div className="space"></div>
        <div><Link to="/new"><img src={createNewIcon} className="create-New-Icon" alt="newIcon" /></Link></div>
        <div><img src={filterIcon} className="filter-Icon" alt="newIcon" /></div>
        {/* this vvvv needs to change state */}
        <div><Link to="/login">Log out</Link></div> 
    </div>
    )
}

export default Header;