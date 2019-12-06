import React, {Component, Fragment} from 'react';

import logo from '../../../logo.svg';
import EventCard from "../../../components/Card/EventCard/EventCard";
import Form from "../../../components/Form/Form";
import Modal from "../../../components/Modal/Modal";

class EventCardContainer extends Component {
  state = {
    events: [
      { title: 'Card - 1', text: 'Text used to make the first event', altText: 'event-1'},
      { title: 'Card - 2', text: 'Text used to make the second event', altText: 'event-2'},
      { title: 'Card - 3', text: 'Text used to make the third event', altText: 'event-3'},
      { title: 'Card - 4', text: 'Text used to make the fourth event', altText: 'event-4'}
    ]
  };

  render() {
    const modalBody = (
      <Fragment>
        <div className="form-group">
          <label htmlFor="title">Event Title</label>
          <input type="text" className="form-control" id="title" />
        </div>
        <div className="form-group">
          <label htmlFor="text">Event Description</label>
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
    return(
      <div className={'event-card-container'}>
        {this.state.events.map((Event) => {
          return <EventCard
            altText={Event.altText}
            title={Event.title}
            text={Event.text}
            classes={'card event-card'}
            image={logo}
          />}
        )}
        <button className={'btn btn-primary'} data-toggle={'modal'} data-target={'#addEventModal'}>
          Add Event
        </button>
        <Modal id={'addEventModal'} title={'Add Event'} body={modalBody} footer={modalFooter} />
      </div>

    )
  }
}

export default EventCardContainer;