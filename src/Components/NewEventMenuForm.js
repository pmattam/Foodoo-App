import React from 'react';

import { connect } from 'react-redux';

import { newEventCreator } from "../Actions/dispatch-actions";

let mapDispatchToProps = (dispatch) => {
    return {
      newEventCreator: (details) => dispatch(newEventCreator(details))
    };
  }


class NewEventMenuForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

    render() {
        let clickSave = () => this.props.newEventCreator(this.state);
        
      return (
        <div>
          <h3>Menu Details</h3>
          <p>Appetizer: <span><input type="text" name="menu-appetizer-input" onChange={(event) => this.setState({appetizer: event.target.value})}/></span></p>
          <p>Main: <span><input type="text" name="menu-main-input" onChange={(event) => this.setState({main: event.target.value})}/></span></p>
          <p>Dessert: <span><input type="text" name="menu-dessert-input" onChange={(event) => this.setState({dessert: event.target.value})}/></span></p>
          <p>Signature Drink: <span><input type="text" name="menu-drink-input" onChange={(event) => this.setState({drink: event.target.value})}/></span></p>
          <button onClick={clickSave}>SAVE</button>
        </div>
      );
    }
}

export default connect(null, mapDispatchToProps)(NewEventMenuForm);