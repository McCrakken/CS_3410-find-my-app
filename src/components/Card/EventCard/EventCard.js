import React from 'react';

import Card from '../Card';

const EventCard = (props) => {
  return(
    <Card {...props} classes={'card event-card'}>
      {props.children}
    </Card>
  )
};

export default EventCard;