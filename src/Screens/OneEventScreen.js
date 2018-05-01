import React from 'react';

import EventContainer from '../Components/EventContainer';
import NavBack from '../Components/NavBack';

let OneEventScreen = () => {
    return (
      <div className="OneEvent-container">
        <p>The Banner Component rendered</p>
        < EventContainer />
        < NavBack />
      </div>
    )
}

export default OneEventScreen;
