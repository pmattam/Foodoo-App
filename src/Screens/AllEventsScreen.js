import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import shoppingListIcon from '../images/shopping-list-icon.svg';

import Header from '../Components/Header';

import { getAllEvents } from "../Lib/api-calls";
import { loadEventsToStore } from "../Actions/dispatch-actions";

let mapPropsToState = (state) => {
  return { allEvents: state.eventsList}
};

let mapDispatchToProps = dispatch => {
  return { loadEventsToStore: events => dispatch(loadEventsToStore(events)) }
};


class AllEventsScreen extends Component {

  componentDidMount() {
    getAllEvents() 
      .then(res => res.json())
      .then(events => {
        console.log(events);
        this.props.loadEventsToStore(events);
      }); 
  }

  render() {

    let allEvents = this.props.allEvents;

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
                      <p>{event.eventtitle}</p>
                      <p>{event.eventdate}</p>
                    <div className="each-event-details">
                        <p>{event.mealtype}</p>
                        <p>{event.eventsize}</p>
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
}

export default connect(mapPropsToState, mapDispatchToProps)(AllEventsScreen);
