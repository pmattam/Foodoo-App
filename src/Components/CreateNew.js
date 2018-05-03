import React from 'react';

import { connect } from 'react-redux';

import NewEventMetadataForm from './NewEventMetadataForm';
import NewEventMenuForm from './NewEventMenuForm';
import NewEventShoppingList from './NewEventShoppingList';
import NewEventIngredientForm from './NewEventIngredientForm';


let mapStateToProps = (state) => {
  return {creatingPartOne: state.creatingPartOne, needAnotherRow: state.needAnotherRow};
}

let CreateNew = ({creatingPartOne, needAnotherRow}) => {
  if (creatingPartOne) {
    return (
      <div>
      < NewEventMetadataForm />
      </div>
    );
  }
  else if (!needAnotherRow) {
    return (
      <div>
        <p>NewEventMenuForm will someday render</p>{/* < NewEventMenuForm /> */}
        <p>NewEventIngredientForm will someday render</p>{/* < NewEventIngredientForm /> */}
      </div>
    );
  } else {
    return (
      <div>
        <p>NewEventMenuForm will someday render</p>{/* < NewEventMenuForm />*/}
        <p>NewEventShoppingList will someday render</p>{/* < NewEventShoppingList />*/}
        <p>NewEventIngredientForm will someday render</p>{/* < NewEventIngredientForm /> */}
      </div>
    );
  }
}


export default connect(mapStateToProps)(CreateNew);