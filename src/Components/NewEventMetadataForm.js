import React, { Component } from 'react';

import { connect } from 'react-redux';

let mapDispatchToProps = (dispatch) => {
  return {newEventMetadataCreator: (metadata) => dispatch(newEventMetadataCreator(metadata))};
}

class NewEventMetadataForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    
    let clickNext = () => {
      this.setState({creatingPartOne: false});
      this.props.newEventMetadataCreator(this.state);
    }

    return (
      <div className="form-container">
        <p> Client Name </p>
        <input type="text" name="client-name-input" onChange={(event) => this.setState({clientname: event.target.value})}/>

        <p> Date </p>
        <input type="text" name="date-input" onChange={(event) => this.setState({eventdate: event.target.value})}/>

        <p> Event Title </p>
        <input type="text" name="event-title-input" onChange={(event) => this.setState({eventtitle: event.target.value})}/>

        <p> Event Description </p>
        <textarea name="event-description-input" onChange={(event) => this.setState({eventdescription: event.target.value})}/>

        <p> Event Type </p>
          <select className="event-type" onChange={(event) => this.setState({eventtype: event.target.value})}>
            <option default>Select</option>
            <option value="Wedding">Wedding</option>
            <option value="Graduation">Graduation</option>
            <option value="Corporate">Corporate</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Birthday">Birthday</option>
          </select>

        <p> Number of Guests </p>
        <input type="number" name="number-of-guests-input" onChange={(event) => this.setState({eventsize: event.target.value})}/>

        <p> Meal Type </p>
          <select className="meal-type-drop-down" onChange={(event) => this.setState({mealtype: event.target.value})}>
            <option default>Select</option>
            <option value="Buffet">Buffet</option>
            <option value="Sit-down">Sit Down</option>
          </select>
        <button onClick={clickNext}>Next =></button>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(NewEventMetaDataForm);