import React, { Component } from 'react';

import Content from '../../hoc/PageContent';
import SidePanel from '../../hoc/Layout/Side-Panel';
import Main from '../../hoc/Layout/Main';
import QuizContent from "./quizContent";
import MajorLeftPanel from "./MajorLeftPanel";

class MajorQuiz extends Component {
  render() {
    return(
      <Content>
        <MajorLeftPanel />
          <Main heading={'In-Depth Assessment'}>
            <QuizContent/>
        </Main>
      </Content>
        
    )

  }
}

export default MajorQuiz;