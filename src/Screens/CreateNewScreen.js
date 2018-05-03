import React from 'react';
import CreateNew from '../Components/CreateNew';
import NewHeader from '../Components/NewHeader';



let CreateNewScreen = () => {
  return (
    <div className="Container">
      <header>
        < NewHeader />
        <h1> Create New Event </h1>
      </header>
      < CreateNew />
    </div>
    )
  }

export default CreateNewScreen;
