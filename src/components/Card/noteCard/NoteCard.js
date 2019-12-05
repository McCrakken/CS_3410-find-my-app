import React from 'react';
import Card from '../Card';
const Notecard = (props) =>{
  return(
    <Card {...props} classes={'card notecard'}>
      {props.children}
    </Card>
  )
};

export default Notecard;