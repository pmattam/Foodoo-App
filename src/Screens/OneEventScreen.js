import React from 'react';
import { connect } from 'react-redux';

import EventContainer from '../Components/EventContainer';
import NavBack from '../Components/NavBack';
import Header from '../Components/Header';



let mapStateToProps = (state, props) => {
  return {
    allEvents: state.eventsList,
    eventid: props.match.params.id
  }
}

let OneEventScreen = () => {
    return (
      <div className="OneEvent-container">
      <header>
        <Header />
      </header>
        < EventContainer />
        < NavBack />
      </div>
    )
}

export default connect(mapStateToProps)(OneEventScreen);
