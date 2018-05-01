import React from 'react';
import CreateNew from '../Components/CreateNew';
import Header from '../Components/Header';



let CreateNewScreen = () =>  {
    return (
      <div className="Container">
        <header>
          <Header />
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
