import React from 'react';
import Header from '../Components/Header';
import { connect } from 'react-redux';
import ShoppingListCard from '../Components/ShoppingListCard'

let mapStateToProps = (state, props) => {
  return { allEvents: state.eventsList, 
    id: props.match.params.id }
};

let ShoppingListScreen = ({allEvents, id}) =>  {
  console.log(id);
  let theEvent = allEvents.find(event => event.eventid === parseInt(id, 10))
  console.log(theEvent);
    return (
        <div className="ShoppingList-container">
          <header>
            <Header />
          </header>
          <div>
            <ShoppingListCard shoppinglist={theEvent.shoppinglist}/>
          </div>
        </div>
  )
}

export default connect(mapStateToProps)(ShoppingListScreen);

