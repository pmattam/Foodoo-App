import React from 'react';

import EventContainer from '../Components/EventContainer';
import NavBack from '../Components/NavBack';
import Header from '../Components/Header'

let OneEventScreen = () => {
    return (
      <div className="OneEvent-container">
      <header>
        <Header />
      </header>
        < EventContainer />
        < NavBack />
      </div>
    )
}

export default OneEventScreen;
