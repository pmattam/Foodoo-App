import React from 'react';

import EventTitle from './EventTitle';
import EventDescription from './EventDescription';
import EventMetadata from './EventMetadata';

let EventContainer = ({allEvents, idOfEventBeingViewed}) => {
    let eventToDisplay = allEvents.filter(event => event.eventid === parseInt(idOfEventBeingViewed, 10))[0];
    
    return (
      <div className="event-container">
        < EventTitle title={eventToDisplay.eventtitle} date={eventToDisplay.eventdate.slice(0, 10)}/>
        < EventDescription description={eventToDisplay.eventdescription}/>
        < EventMetadata 
          size={eventToDisplay.eventsize} 
          type={eventToDisplay.eventtype} 
          meal={eventToDisplay.mealtype} 
          client={eventToDisplay.clientname}
          menu={eventToDisplay.menu}
          shoppinglist={eventToDisplay.shoppinglist}
        />
      </div>
    )
  }

export default EventContainer;
