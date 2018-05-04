import React from 'react';
import { connect } from 'react-redux';

import NewHeader from '../Components/NewHeader';
import NewEventMetadataForm from '../Components/NewEventMetadataForm';
import NewEventMenuForm from '../Components/NewEventMenuForm';
import NewEventIngredientForm from '../Components/NewEventIngredientForm';

let mapStateToProps = (state) => {
  return {
    displayNext: state.displayNext, 
    needAnotherRow: state.needAnotherRow,
    creatingNewEvent: state.creatingNewEvent,
    newEvent: state.newEvent
  };
}

let CreateNewScreen = ({displayNext, needAnotherRow, creatingNewEvent, newEvent}) => {
  if (!displayNext) {
    return (
      <div>
        <header>
          < NewHeader />
          <h1> Create New Event </h1>
        </header>
        < NewEventMetadataForm />
      </div>
    );
  }
  else if (!needAnotherRow) {
    return (
      <div>
        <header>
          < NewHeader />
          <h1> Create New Event </h1>
        </header>
        < NewEventMenuForm />
        < NewEventIngredientForm />
      </div>
    );
  } else {
    return (
      <div>
        <header>
          < NewHeader />
          <h1> Create New Event </h1>
        </header>
        <p>NewEventMenuForm will someday render</p>{/* < NewEventMenuForm />*/}
        <p>NewEventShoppingList will someday render</p>{/* < NewEventShoppingList />*/}
        <p>NewEventIngredientForm will someday render</p>{/* < NewEventIngredientForm /> */}
      </div>
    );
  }
}


export default connect(mapStateToProps)(CreateNewScreen);
