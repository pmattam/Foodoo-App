import React from 'react';
import CreateNew from '../Components/CreateNew';
import NewHeader from '../Components/NewHeader'

let CreateNewScreen = () =>  {
    return (
      <div className="Container">
        <header>
          <NewHeader />
          <h1> New Event </h1>
        </header>
        <p className="intro">
          Enter event information
        </p>
        <CreateNew />
      </div>
    );
  }

export default CreateNewScreen;
