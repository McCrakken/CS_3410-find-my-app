import React from 'react';
import Badge from 'react-bootstrap/Badge';

import Card from '../Card';

const DegreePathEventCard = (props) => {
  return(
    <Card
      classes={'card event-card2'}
      image={props.image}
      title={props.title}
      text={props.text }
    />
    

  )
};

export default DegreePathEventCard;