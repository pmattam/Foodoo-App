import React from 'react';
import CreateNew from '../Components/CreateNew';

let CreateNewScreen = () =>  {
    return (
      <div className="Container">
        <header> 
          <h1> Create a new event here! </h1>
        </header>
        <p className="intro">
          Enter event information.
        </p>
        <CreateNew />
      </div>
    );
  }

export default CreateNewScreen;
