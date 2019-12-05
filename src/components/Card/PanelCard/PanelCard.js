import React from 'react';
import Card from '../Card';

//Stuffing more PanelCards into a PanelCard will change the look of the inner elements to divide the space into sections
const PanelCard = (props) => {
  return(
    <Card {...props} classes={'card panel-card'}>
      {props.children}
    </Card>
  )
};

export default PanelCard;