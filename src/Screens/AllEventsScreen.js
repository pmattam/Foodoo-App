import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import shoppingListIcon from '../images/shopping-list-icon.svg';

import Header from '../Components/Header';

import { getAllEvents } from "../Lib/api-calls";
import { addEventsToStore } from "../Actions/dispatch-actions";

let mapPropsToState = (state) => {
  return { allEvents: state.eventsList}
};

let mapDispatchToProps = dispatch => {
  return { addEventsToStore: events => dispatch(addEventsToStore(events)) }
};

class AllEventsScreen extends Component {

  componentDidMount() {
    getAllEvents() 
      .then(res => res.json())
      .then(events => {
        console.log(events);
        this.props.addEventsToStore(events);
      }); 
  }

  render() {

    let allEvents = this.props.allEvents;

    return (
        <div className="AllEvents-container">
          <header>
            <Header />
          </header>
          <div>
            {
              allEvents.map(event => {
                return (
                    <Link to={`/events/${event.eventid}`}>
                      <p>{event.eventtitle}</p>
                      <p>{event.eventdate}</p>
                      <div>
                        <p>{event.mealtype}</p>
                        <p>{event.eventsize}</p>
                        <img src={shoppingListIcon} alt="shopping-list-icon" style={this.style}/>
                      </div>
                    </Link>
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
