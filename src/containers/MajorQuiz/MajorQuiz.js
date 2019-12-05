import React, { Component } from 'react';

import Content from '../../hoc/PageContent';
import SidePanel from '../../hoc/Layout/Side-Panel';
import Main from '../../hoc/Layout/Main';

class MajorQuiz extends Component {
  render() {
    return(
      <Content>
        <SidePanel />
        <Main heading={'Major Quiz Page'}>
        </Main>
      </Content>
    )

  }
}

export default MajorQuiz;