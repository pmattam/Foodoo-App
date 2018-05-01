import React from 'react';

import EventContainer from '../Components/EventContainer';
import NavBack from '../Components/NavBack';
import Header from '../Components/Header'

let OneEventScreen = () => {
    return (
      <div className="OneEventScreen">
      <header>
        <Header />
      </header>
        <p>The Banner Component rendered</p>
        < EventContainer />
        < NavBack />
      </div>
    )
}

export default OneEventScreen;
