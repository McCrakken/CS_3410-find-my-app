import React, { Component } from 'react';

import Content from '../../hoc/PageContent';
import SidePanel from '../../hoc/Layout/Side-Panel';
import Main from '../../hoc/Layout/Main';
import SignUpContainer from './SignUpCard/SignUpContainer';
import Modal from "../../components/Modal/Modal";
import ClassesContainer from "./ClassesCard/ClassesContainer";

class SignUp extends Component {
  state = {
    Heading: 'Reminders',
    HeadingBtnText: 'Add Event',
    AddBtnText: 'Add Event',
    AddModalText: 'Event',
    AddBtnDisplay: true,
    hasModal: true,
    SubSection: [
      { heading: 'Dec 9, 2019 - Monday',
        Notes: [
          { title: 'Final Presentation',
            text: 'Groups will present their High-Def prototypes and explain their development process.',
            borderColor: 'green-1'
          },
          { title: 'High-def Prototype',
            text: 'Submit source code and link to a deployed server for group projects.',
            borderColor: 'green-1'
          },
          { title: 'Final Exam',
            text: 'Final cumulative exam, 3:00pm - 4:50',
            borderColor: 'yellow-1'
          },
        ]},
      { heading: 'Dec 11, 2019 - Wednesday',
        Notes: [
          { title: 'Final Exam',
            text: 'Final exam requires students to use Java to implement different build patterns',
            borderColor: 'blue-1'
          },
        ]
      }],
  };

  render() {
    return(
        <Content>
            <SidePanel>
                <SignUpContainer/>
            </SidePanel>
            <Main heading={'Sign Up for Classes'}>
                <ClassesContainer />
            </Main>
        </Content>
    )

  }
}

export default SignUp;