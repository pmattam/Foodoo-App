import React from 'react';


let EventTitle = ({title, date}) => {
    return (
      <div className="EventTitle-container">
        <div><h2>{title.toUpperCase()}</h2></div>
        <div className="space"></div>
        <div><p>{date}</p></div>
      </div>
    )
  }

export default EventTitle;
