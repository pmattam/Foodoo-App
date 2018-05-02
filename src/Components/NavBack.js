import React from 'react';

import { Link } from 'react-router-dom';

import exitdoor from '../images/exitdoor.svg';

let NavBack = () => {

  const style = { //we can get rid of this and the style attribute in the img tag once we do real CSS styling later
    height: "24px",
    width: "20px"
  }

    return (
      <div className="NavBack">
        <Link to="/events"><img src={exitdoor} className="exit-door" alt="back" style={style}/></Link>
      </div>
    )
  }

export default NavBack;
