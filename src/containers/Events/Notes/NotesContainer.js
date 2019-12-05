import React, {Component, Fragment} from 'react';

import PanelCard from "../../../components/Card/PanelCard/PanelCard";
import Notecard from "../../../components/Card/noteCard/NoteCard";

class NotesContainer extends Component {
  state = {
    SubSection: [
      { heading: 'Human Factors',
        Notes: [
          { title: 'It\'s the Final!', text: 'Don\'t panic! Just breathe, just breathe... In and out now, here we go.'},
          { title: 'Prototype Preparation', text: 'Work with the group to finalize your high-def prototype.'},
        ]},
      { heading: 'Discrete Math II',
        Notes: [
          { title: 'Another Final?', text: 'I guess it must just be that time of season.'},
          { title: 'Will and Testament', text: 'Just kidding, you\'ll be fine... right?'},
        ]
      }],
    Notes: [
      { title: 'Happy Holidays!', text: 'We\'re almost there everyone, not much longer now!'},
    ],
  };

  render() {
    const panelButton = 'New Section';
    const sectionBtn = 'Add Note';
    const addItemBtn = <ion-icon style={{display: 'block', color: '#434c50'}} name="add"></ion-icon>;

    return(
      <Fragment>
        <PanelCard header={'Notes'} headerBtn={addItemBtn} headerBtnText={panelButton}>
          {this.state.SubSection.map((Section) => {
            return (
              <PanelCard header={Section.heading} headerBtn={sectionBtn}>
                {Section.Notes.map((Card) => {
                  return <Notecard title={Card.title} text={Card.text}/>
                })}
              </PanelCard>
            )
          })}
          {this.state.Notes.map((Note) => {
            return <Notecard title={Note.title} text={Note.text}/>
          })}
          <button className={'btn btn-light btn-add'}>{sectionBtn}</button>
        </PanelCard>
      </Fragment>

    )
  }
}

export default NotesContainer;