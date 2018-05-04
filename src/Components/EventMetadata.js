import React from 'react';

import EventSize from '../Components/EventSize';
import EventType from '../Components/EventType';
import MealType from '../Components/MealType';
import ClientName from '../Components/ClientName';
import MenuCard from '../Components/MenuCard';
import ShoppingListCard from '../Components/ShoppingListCard';

let EventMetadata = ({size, type, meal, client, menu, shoppinglist}) => {
    return (
      <div className="EventMetadata">
        <div className="event-st">
        < EventSize size={size}/>
        < EventType type={type}/>
        </div>
        <div className="event-mc">
        < MealType meal={meal}/>
        < ClientName client={client}/>
        </div>
        <div className="ms">
        < MenuCard menu={menu}/>
        < ShoppingListCard shoppinglist={shoppinglist}/>
        </div>
      </div>
    )
  }

export default EventMetadata;
