import React from 'react';
import Card from '../Card';
const Notecard = (props) =>{
  const classes = props.borderColor ? props.borderColor + ' card notecard' : 'card notecard';
  return(
    <Card {...props} classes={classes} >
      {props.children}
    </Card>
  )
};

export default Notecard;