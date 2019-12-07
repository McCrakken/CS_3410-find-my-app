import React, {Component} from 'react';

import NotesContainer from "../Events/Notes/NotesContainer";

class MajorLeftPanel extends Component {
  state = {
    Heading: 'Assessments',
    AddBtnDisplay: false,
    hasModal: false,
    SubSection: [
      { heading: 'Past Assessments',
        Notes: [
          { title: 'Medium Assessment',
            text: 'Completed on: 12/7/19',
            borderColor: 'purple-1'
          },
          { title: 'Short Assessment',
            text: 'Completed on: 12/3/19',
            borderColor: 'blue-1'
          }]
      }]
  };
  render() {
    return (
        <NotesContainer state={this.state}>
          <button className={'btn btn-primary'}>Major Discovery</button>

          <ul className="list-group">
            <button className="list-group-item list-group-item-action active">
              Short Assessment
              <span className={'float-right'}>10 minutes</span>
            </button>
            <button className="list-group-item list-group-item-action">Medium Assessment
              <span className={'float-right'}>
                20 minutes</span>
            </button>
            <button className="list-group-item list-group-item-action">
              Long Assessment
              <span className={'float-right'}>30 minutes</span>
            </button>
          </ul>
        </NotesContainer>
    )
  }
}

export default MajorLeftPanel;

