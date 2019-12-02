import React from 'react';

const card = (props) => {
  return (
    <div className={props.classes}>
      {props.image ? <img className='card-img-top' src={props.image} /> : null }
      <div className="card-body">
        <h5 className="card-title">
          {props.title ? props.title : null}
        </h5>
        <p className='card-text'>
          {props.text ? props.text : null}
        </p>
        {props.children}
      </div>
    </div>
)};

export default card;