import React from 'react';
import exitdoor from '../images/exitdoor.svg';

let NavBack = () => {
    return (
      <div className="NavBack">
          <img src={exitdoor} className="exit-door" alt="back" />
      </div>
    )
  }

export default NavBack;