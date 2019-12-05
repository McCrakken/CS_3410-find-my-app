import React, { Component } from 'react';

import Content from '../../hoc/PageContent';
import SidePanel from '../../hoc/Layout/Side-Panel';
import Main from '../../hoc/Layout/Main';
import EventCardContainer from "./EventCard/EventCardContainer";

class Events extends Component {
  render() {
    return(
      <Content>
        <SidePanel />
        <Main heading={'Events'}>
          <EventCardContainer/>
        </Main>
      </Content>
    )

  }
}

export default Events;