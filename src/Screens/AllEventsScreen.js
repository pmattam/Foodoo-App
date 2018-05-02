import React from 'react';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import shoppingListIcon from '../images/shopping-list-icon.svg';

import Header from '../Components/Header';

let mapPropsToState = (state) => {
  return {allEvents: state.eventsList}
}

let AllEventsScreen = ({allEvents}) => {
  return (
      <div>
        <header>
          <Header />
        </header>
        <div className="all-events-container">
          {
            allEvents.map(event => {
              return (
                <div key={event.eventid} className="border">
                  <Link to={`/events/${event.eventid}`}>
                  <div className="each-event">
                    <p className="title">{event.eventTitle}</p>
                    <p>{event.eventDate}</p>
                    <div className="each-event-details">
                      <p>{event.mealType}</p>
                      <p>{event.eventSize}</p>
                      <Link to="/shoppinglist"> <img src={shoppingListIcon} className="shopping-list-icon" alt="shopping-list-icon" /> </Link>

                    </div>
                  </div>
                  </Link>
                </div>
              )
            }
            )
          }
        </div>
      </div>
    );
  }

export default connect(mapPropsToState)(AllEventsScreen);
