import React from 'react';


let ShoppingListCard = ({shoppinglist}) => {
  
    return (
      <div className="ShoppingListCard">
        <h4>SHOPPING LIST</h4>
        <ul>
          {
            shoppinglist.map((item, i) => {
              return (
                <li key={i}><span>{item.quantity} </span><span>{item.unit} of </span><span>{item.ingredient}</span></li>
              );
            })
          }
        </ul>
      </div>
    )
  }

export default ShoppingListCard;
