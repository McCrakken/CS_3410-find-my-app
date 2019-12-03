import React from 'react';
import Card from '../Card';
const Eventcard = (props) =>{
    return(
        <Card classes={'card eventcard'} title={props.title}
              text={props.content} />
    )
};

export default Eventcard;