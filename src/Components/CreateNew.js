import React from 'react';

import { connect } from 'react-redux';

import { newEventCreator } from "../Actions/dispatch-actions";

let mapDispatchToProps = (dispatch) => {
  return {newEventCreator: (details) => dispatch(newEventCreator(details))};
}



class CreateNew extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

    render() {
      return (
        <div className="form-container">

          <div className="client-name">
            <p> Client Name </p>
            <input type="text" name="client-name-input" onChange={(event) => this.setState({clientname: event.target.value})}/>
          </div>

          <div className="date">
            <p> Date </p>
            <input type="text" name="date-input" onChange={(event) => this.setState({eventdate: event.target.value})}/>
          </div>

          <div className="event-title">
            <p> Event Title </p>
            <input type="text" name="event-title-input" onChange={(event) => this.setState({eventtitle: event.target.value})}/>
          </div>

          <div className="event-description">
            <p> Event Description </p>
            <textarea name="event-description-input" onChange={(event) => this.setState({eventdescription: event.target.value})}/>
          </div>
  
  
          <div className="event-type">
            <p> Event Type </p>  
            <label className="event-type-dropdown">
              <select className="event-type" onChange={(event) => this.setState({eventtype: event.target.value})}>
                <option default>Select</option>
                <option value="Wedding">Wedding</option>
                <option value="Graduation">Graduation</option>
                <option value="Corporate">Corporate</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Birthday">Birthday</option>
              </select>
            </label>
          </div>
  
          <div className="number-of-guests">
            <p> Number of Guests </p>
            <input type="number" name="number-of-guests-input" onChange={(event) => this.setState({eventsize: event.target.value})}/>
          </div>
  
          <div className="meal-type">
            <p> Meal Type </p>
            <label>
              <select className="meal-type-drop-down" onChange={(event) => this.setState({mealtype: event.target.value})}>
                <option default>Select</option>
                <option value="Buffet">Buffet</option>
                <option value="Sit-down">Sit Down</option>
              </select>
            </label>
          </div>
          <button onClick={ () => this.props.newEventCreator(this.state) }>Save</button>
      </div>
      )
    }  
}

export default connect(null, mapDispatchToProps)(CreateNew);