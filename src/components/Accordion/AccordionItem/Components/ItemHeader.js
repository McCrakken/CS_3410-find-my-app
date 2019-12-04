import React from 'react';

const ItemHeader = (props) => {
  return(
    <div className="card-header" onClick={props.click}>
      <h5 className="mb-0">
          {props.title}
      </h5>
    </div>
  )
};

export default ItemHeader;