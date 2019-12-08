import React, { Component } from 'react';

import Content from '../../hoc/PageContent';
import SidePanel from '../../hoc/Layout/Side-Panel';
import Main from '../../hoc/Layout/Main';
import SignUpContainer from './SignUpCard/SignUpContainer';
import ClassesContainer from "./ClassesCard/ClassesContainer";

class SignUp extends Component {
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