import React from 'react';

let CreateNew = () => {
    return (
      <div className="form-container">
      <form>

        <div className="client-name">
        <p> Name of client </p>
          <input type="text" name="client-name-input"/>
        </div>

       <div className="date">
        <p> Date </p>
        <input type="text" name="date-input" />
        </div>


        <div className="event-type">
        <p> Event Type </p>  
        <label className="event-type-dropdown">
          <select className="event-type">
          <option value="wedding">Wedding</option>
          <option value="graduation">Graduation</option>
          <option value="corporate">Corporate</option>
          <option value="anniversary">anniversary</option>
          <option value="birthday">Birthday</option>
          </select>
        </label>
        </div>

        <div className="number-of-guests">
        <p> Number of Guests </p>
        <input type="text" name="number-of-guests-input" />
        </div>

        <div className="meal-type">
        <p> Meal Type </p>
        <label>
          <select className="meal-type-drop-down">
          <option value="buffet">Buffet</option>
          <option value="sit-down">Sit Down</option>
          </select>
        </label>
        </div>

        <div className="menu">
          <p> Menu </p>
          <input type="text" name="menu-input" />
        </div>

        <div className="shopping-list">
          <p>  Shopping List </p>
          <input type="text" name="shopping-list-input" />
        </div>


      </form>
      </div>
    )
}

export default CreateNew;