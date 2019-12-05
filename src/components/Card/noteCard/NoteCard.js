import React from 'react';
import Card from '../Card';
const Notecard = (props) =>{
  return(
      <Card classes={'card notecard'} title={props.title}
            text={props.content} />
  )
};

export default Notecard;