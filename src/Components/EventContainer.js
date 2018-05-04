import React from 'react';

import EventTitle from './EventTitle';
import EventDescription from './EventDescription';
import EventMetadata from './EventMetadata';

let EventContainer = ({allEvents, idOfEventBeingViewed}) => {
    let arr = allEvents.filter(event => event.eventid === parseInt(idOfEventBeingViewed, 10));
    let eventToDisplay = arr[0]; //how can I refactor this foolishness?
    return (
      <div className="EventContainer">
        < EventTitle title={eventToDisplay.eventtitle} date={eventToDisplay.eventdate}/>
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
