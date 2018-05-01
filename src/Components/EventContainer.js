import React from 'react';

import EventTitle from './EventTitle';
import EventDescription from './EventDescription';
import EventMetadata from './EventMetadata';

let EventContainer = ({allEvents, idOfEventBeingViewed}) => {
    return (
      <div className="EventContainer">
        < EventTitle title={allEvents.eventTitle} date={allEvents.eventDate}/>
        < EventDescription />
        < EventMetadata />
      </div>
    )
  }

export default EventContainer;
