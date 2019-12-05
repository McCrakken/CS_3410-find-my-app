import React, { Component } from 'react';

import Content from '../../hoc/PageContent';
import SidePanel from '../../hoc/Layout/Side-Panel';
import Main from '../../hoc/Layout/Main';

class Schedule extends Component {
  render() {
    return(
      <Content>
        <SidePanel />
        <Main heading={'Schedule Page'}>
        </Main>
      </Content>
    )

  }
}

export default Schedule;