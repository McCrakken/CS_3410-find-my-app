import React, { Component } from 'react';

import Content from '../../hoc/PageContent';
import SidePanel from '../../hoc/Layout/Side-Panel';
import Main from '../../hoc/Layout/Main';

class DegreeChanges extends Component {
  render() {
    return(
      <Content>
        <SidePanel />
        <Main heading={'Degree Changes Page'}>
        </Main>
      </Content>
    )

  }
}

export default DegreeChanges;