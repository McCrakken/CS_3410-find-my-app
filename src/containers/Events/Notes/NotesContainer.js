import React, {Component, Fragment} from 'react';

import PanelCard from "../../../components/Card/PanelCard/PanelCard";
import Notecard from "../../../components/Card/noteCard/NoteCard";
import Modal from "../../../components/Modal/Modal";

class NotesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
  }

  render() {
    const modalBody = (
      <Fragment>
        <div className="form-group">
          <label htmlFor="title">{this.state.AddModalText} Title</label>
          <input type="text" className="form-control" id="title" />
        </div>
        <div className="form-group">
          <label htmlFor="text">{this.state.AddModalText} Content</label>
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

    const addHeaderBtn = this.state.AddBtnDisplay ? (
      <button className={'btn btn-light btn-add'} data-toggle={'modal'} data-target={'#addNoteModal'}>
        <ion-icon style={{display: 'block', color: '#434c50'}} name="add" title={this.state.AddBtnText}></ion-icon>
      </button>
    ): null;
    const addItemBtn = this.state.AddBtnDisplay ? (
      <button className={'btn btn-light btn-add'} data-toggle={'modal'} data-target={'#addNoteModal'}>
        {this.state.AddBtnText}
      </button>
    ): null;

    return(
      <Fragment>
        <PanelCard header={this.state.Heading} headerBtn={addHeaderBtn}>
          {this.state.SubSection.map((Section) => {
            return (
              <PanelCard header={Section.heading} headerBtn={addItemBtn}>
                {Section.Notes.map((Card) => {
                  return <Notecard title={Card.title} text={Card.text} borderColor={Card.borderColor}/>
                })}
              </PanelCard>
            )
          })}
          {this.state.Notes ? this.state.Notes.map((Note) => {
            return <Notecard title={Note.title} text={Note.text}/>
          }): null}
          {this.state.AddBtnDisplay ? (
            <button className={'btn btn-light btn-add'} data-toggle={'modal'} data-target={'#addNoteModal'}>
              {this.state.AddBtnText}
            </button>
          ): null}
        </PanelCard>
        <Modal title={this.state.HeadingBtnText} id={'addNoteModal'} body={modalBody} footer={modalFooter}/>
      </Fragment>

    )
  }
}

export default NotesContainer;