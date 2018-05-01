import React from 'react';


let EventTitle = ({title, date}) => {
    return (
      <div className="EventTitle-container">
        <p>{title}</p><p>{date}</p>
      </div>
    )
  }

export default EventTitle;
