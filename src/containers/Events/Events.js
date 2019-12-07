import React, { Component } from 'react';

import Content from '../../hoc/PageContent';
import SidePanel from '../../hoc/Layout/Side-Panel';
import Main from '../../hoc/Layout/Main';
import EventCardContainer from "./EventCard/EventCardContainer";
import NotesContainer from "./Notes/NotesContainer";
import Modal from "../../components/Modal/Modal";

class Events extends Component {
  state = {
    Heading: 'Notes',
    HeadingBtnText: 'Add Section',
    AddBtnText: 'Add Note',
    AddBtnDisplay: true,
    AddModalText: 'Event',
    hasModal: true,
    SubSection: [
      { heading: 'Human Factors',
        Notes: [
          { title: 'It\'s the Final!',
            text: 'Don\'t panic! Just breathe, just breathe... In and out now, here we go.',
            borderColor: 'green-1'
          },
          { title: 'Prototype Preparation',
            text: 'Work with the group to finalize your high-def prototype.',
            borderColor: 'green-1'
          },
        ]},
      { heading: 'Discrete Math II',
        Notes: [
          { title: 'Another Final?',
            text: 'I guess it must just be that time of season.',
            borderColor: 'yellow-1'
          },
          { title: 'Will and Testament',
            text: 'Just kidding, you\'ll be fine... right?',
            borderColor: 'yellow-1'
          },
        ]
      }],
    Notes: [
      { title: 'Happy Holidays!', text: 'We\'re almost there everyone, not much longer now!'},
    ],
  };
  render() {
    return(
      <Content>
        <SidePanel>
          <NotesContainer state={this.state}/>
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