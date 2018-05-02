import React from 'react';

import { connect } from 'react-redux';

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
                <div className="each-event">
                  <p>{event.eventTitle}</p>
                  <p>{event.eventDate}</p>
                  <div className="each-event-details">
                    <p>{event.mealType}</p>
                    <p>{event.eventSize}</p>
                  </div>
                  <img src={shoppingListIcon} className="shopping-list-icon" alt="shopping-list-icon"/>
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
