import React, { Component } from 'react';

import Content from '../../hoc/PageContent';
import SidePanel from '../../hoc/Layout/Side-Panel';
import Main from '../../hoc/Layout/Main';
import NotesContainer from "../Events/Notes/NotesContainer";
import Calendar from "../../components/Calendar/Calendar";

class Schedule extends Component {
  render() {
    return(
      <Content>
        <SidePanel>
          <NotesContainer/>
        </SidePanel>
        <Main>
          <Calendar />
        </Main>
      </Content>
    )

  }
}

export default Schedule;