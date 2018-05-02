import React from 'react';
import mainLogo from '../images/foodoo-logo.png';
import LoginScreen from './LoginScreen';

let HomePageScreen = () => 
  <div className="home-page-container">

    <div className="logo-and-description">
      <div><img src={mainLogo} className="home-main-logo" alt="mainlogo" /></div>
      <div>
        <p>Manage your catering service with foodoo</p>
      </div>
    </div>

    <div className="log-in-form">
    <LoginScreen />
    </div>
  </div>

export default HomePageScreen;
