import React, {Component, Fragment} from 'react';

import PanelCard from "../../../components/Card/PanelCard/PanelCard";
import Notecard from "../../../components/Card/noteCard/NoteCard";
import Modal from "../../../components/Modal/Modal";

class NotesContainer extends Component {
  state = {
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
    const modalBody = (
      <Fragment>
        <div className="form-group">
          <label htmlFor="title">Note Title</label>
          <input type="text" className="form-control" id="title" />
        </div>
        <div className="form-group">
          <label htmlFor="text">Note Content</label>
          <textarea className="form-control" id="text" />
        </div>
      </Fragment>
    );

    const modalFooter = (
      <Fragment>
        <button type="button" data-dismiss={'modal'} className="btn btn-light">Cancel</button>
        <button type="submit" data-dismiss={'modal'} className="btn btn-primary">Submit</button>
      </Fragment>
    );

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
                  return <Notecard title={Card.title} text={Card.text} borderColor={Card.borderColor}/>
                })}
              </PanelCard>
            )
          })}
          {this.state.Notes.map((Note) => {
            return <Notecard title={Note.title} text={Note.text}/>
          })}
          <button className={'btn btn-light btn-add'} data-toggle={'modal'} data-target={'#addNoteModal'}>
            {sectionBtn}
          </button>
        </PanelCard>
        <Modal title={'Add Note'} id={'addNoteModal'} body={modalBody} footer={modalFooter}/>
      </Fragment>

    )
  }
}

export default NotesContainer;