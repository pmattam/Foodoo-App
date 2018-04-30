import React from 'react';

import EventTitle from './EventTitle';
import EventDescription from './EventDescription';
import EventMetadata from './EventMetadata';

let EventContainer = () => {
    return (
      <div className="EventContainer">
        <p>The Event Container Component:</p>
        < EventTitle />
        < EventDescription />
        < EventMetadata />
      </div>
    )
  }

export default EventContainer;
