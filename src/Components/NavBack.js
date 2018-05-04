import React from 'react';

import { Link } from 'react-router-dom';

import exitdoor from '../images/exitdoor.svg';

let NavBack = () => {

    return (
      <div className="NavBack">
        <Link to="/events"><img src={exitdoor} className="exit-door" alt="back"/></Link>
      </div>
    )
  }

export default NavBack;
