import React from 'react';

const ItemBody = (props) => {
  return(
    <div id="collapseOne" className={props.show}>
      <div className="card-body">
        {props.children}
      </div>
    </div>
  )
};

export default ItemBody;