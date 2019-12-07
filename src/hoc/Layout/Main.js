import React from 'react';

const main = (props) => {
  return (
    <div className='main-content col-sm-8 col-md-9'>
      {props.heading ? (<h2 className={'main-heading'}>{props.heading}</h2>) : null}
      <div className={'page-content'}>
        {props.children}
      </div>
    </div>
  )
};

export default main;