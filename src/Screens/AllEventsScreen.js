import React from 'react';

import { connect } from 'react-redux';

import shoppingListIcon from '../images/shopping-list-icon.svg';

import Header from '../Components/Header';

let mapPropsToState = (state) => {
  return {allEvents: state.eventsList}
}

let AllEventsScreen = ({allEvents}) => {
  return (
      <div className="AllEvents-container">
        <header>
          <Header />
        </header>
        <p>The Banner Component will go here</p>
        <div>
          {
            allEvents.map(event => {
              return (
                <div>
                  <p>{event.eventTitle}</p>
                  <p>{event.Date}</p>
                  <div>
                    <img src={shoppingListIcon}/>
                    <p>{event.mealType}</p>
                    <p>{event.eventSize}</p>
                  </div>
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
