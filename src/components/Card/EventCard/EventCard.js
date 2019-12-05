import React from 'react';

import Card from '../Card';

const EventCard = (props) => {
  return(
    <Card
      classes={'card event-card'}
      image={props.image}
      title={props.title}
      text={props.text}
    />

  )
};

export default EventCard;