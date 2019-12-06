import React, { Component } from 'react';

import Content from '../../hoc/PageContent';
import SidePanel from '../../hoc/Layout/Side-Panel';
import Main from '../../hoc/Layout/Main';
import EventCardContainer from "./EventCard/EventCardContainer";
import NotesContainer from "./Notes/NotesContainer";
import Modal from "../../components/Modal/Modal";

class Events extends Component {
  render() {
    return(
      <Content>
        <SidePanel>
          <NotesContainer/>
        </SidePanel>
        <Main heading={'Events'}>
          <EventCardContainer/>
          <Modal/>
        </Main>
      </Content>
    )

  }
}

export default Events;