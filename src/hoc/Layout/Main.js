import React from 'react';

const main = (props) => {
  return (
    <div className='main-content col-sm-8 col-md-9'>
      <h2>{props.heading}</h2>
      <div>
        {props.children}
      </div>
    </div>
  )
};

export default main;