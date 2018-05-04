import React from 'react';

import { connect } from 'react-redux';

import { newEventShoppingCreator } from "../Actions/dispatch-actions";
import { doneEditing } from "../Actions/dispatch-actions";

import createNewIcon from '../images/create-new-icon.svg';
// import ShoppingListCard from './ShoppingListCard';

let mapDispatchToProps = (dispatch) => {
    return {
        newEventShoppingCreator: (shoppinglist) => dispatch(newEventShoppingCreator(shoppinglist)),
      doneEditing: () => dispatch(doneEditing())
    };
  }


class NewEventIngredientForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        shoppinglist: [],
        quantity: null,
        unit: null,
        ingredient: null
    }
  }
  
    render() {
        let {shoppinglist} = this.state;
        let clickDone = () => {
            this.props.newEventShoppingCreator(this.state.shoppinglist);
            this.props.doneEditing();
        }

        let newIngredient = () => {
            let currentIngredient = {
                "quantity": this.state.quantity,
                "unit": this.state.unit, 
                "ingredient": this.state.ingredient
            }; 
            this.setState({...shoppinglist, shoppinglist: [...shoppinglist, currentIngredient] })
        }
            return (
                
                <div>
                    <h3>Shopping List</h3>
                    <div>
                        <input type="number" name="quantity-input" onChange={ (event) => this.setState({quantity: event.target.value})}/>
                        <select name="unit-input" onChange={ (event) => this.setState({unit: event.target.value})}>
                            <option default>Select</option>
                            <option>lbs</option>
                            <option>pkgs</option>
                            <option>bottles</option>
                            <option>cans</option>
                            <option>loaves</option>
                            <option>other</option>
                        </select>
                        <span> of </span>
                        <input type="text" name="ingredient-input" onChange={ (event) => this.setState({ingredient: event.target.value})}/>
                        <span><button onClick={newIngredient} ><img src={createNewIcon} className="create-New-Icon" alt="newIcon" /></button></span>
                    </div>
                    <button onClick={clickDone}>DONE</button>
                    </div>
            );
        }
    }

export default connect(null, mapDispatchToProps)(NewEventIngredientForm);