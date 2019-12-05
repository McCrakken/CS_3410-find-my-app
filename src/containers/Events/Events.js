import React, { Component } from 'react';

import Content from '../../hoc/PageContent';
import SidePanel from '../../hoc/Layout/Side-Panel';
import Main from '../../hoc/Layout/Main';
import EventCardContainer from "./EventCard/EventCardContainer";
import NotesContainer from "./Notes/NotesContainer";

class Events extends Component {
  render() {
    return(
      <Content>
        <SidePanel>
          <NotesContainer/>
        </SidePanel>
        <Main heading={'Events'}>
          <EventCardContainer/>
        </Main>
      </Content>
    )

  }
}

export default Events;