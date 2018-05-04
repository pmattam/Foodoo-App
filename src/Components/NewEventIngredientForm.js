import React from 'react';

import { connect } from 'react-redux';

import { newEventCreator } from "../Actions/dispatch-actions";
import { doneEditing } from "../Actions/dispatch-actions";

import createNewIcon from '../images/create-new-icon.svg';

let mapDispatchToProps = (dispatch) => {
    return {
      newEventCreator: (details) => dispatch(newEventCreator(details)),
      doneEditing: () => dispatch(doneEditing())
    };
  }


class NewEventIngredientForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        needAnotherRow: false
    }
  }

    render() {
        let clickDone = () => {
            this.props.newEventCreator(this.state);
            this.props.doneEditing();
        }

        let addNewRow = () => this.setState({needAnotherRow: true})


        return (
            <div>
                <h3>Shopping List</h3>
                <div>
                    <input type="number" name="quantity-input" onChange={(event) => this.setState({shoppinglist: [{quantity: event.target.value}]})}/>
                    <select name="unit-input" onChange={(event) => this.setState({shoppinglist: [{unit: event.target.value}]})}>
                    <option default>Select</option>
                    <option>lbs</option>
                    <option>pkgs</option>
                    <option>bottles</option>
                    <option>cans</option>
                    <option>loaves</option>
                    <option>other</option>
                    </select>
                    <span> of </span>
                    <input type="text" name="ingredient-input" onChange={(event) => this.setState({shoppinglist: [{ingredient: event.target.value}]})}/>
                    <span><button onClick={addNewRow} ><img src={createNewIcon} className="create-New-Icon" alt="newIcon" /></button></span>
                </div>
                <button onClick={clickDone}>DONE</button>
                </div>
        );

    }
}

export default connect(null, mapDispatchToProps)(NewEventIngredientForm);