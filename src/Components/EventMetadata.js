import React from 'react';

import EventSize from '../Components/EventSize';
import EventType from '../Components/EventType';
import MealType from '../Components/MealType';
import ClientName from '../Components/ClientName';
import MenuCard from '../Components/MenuCard';
import ShoppingListCard from '../Components/ShoppingListCard';

let EventMetadata = () => {
    return (
      <div className="EventMetadata">
        < EventSize />
        < EventType />
        < MealType />
        < ClientName />
        < MenuCard />
        < ShoppingListCard />
      </div>
    )
  }

export default EventMetadata;
