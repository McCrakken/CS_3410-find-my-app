import React, {Component} from 'react';

import logo from '../../../logo.svg';
import EventCard from "../../../components/Card/EventCard/EventCard";
import Form from "../../../components/Form/Form";

class EventCardContainer extends Component {
  state = {
    events: [
      { title: 'Card - 1', text: 'Text used to make the first event', altText: 'event-1'},
      { title: 'Card - 2', text: 'Text used to make the second event', altText: 'event-2'},
      { title: 'Card - 3', text: 'Text used to make the third event', altText: 'event-3'},
      { title: 'Card - 4', text: 'Text used to make the fourth event', altText: 'event-4'}
    ]
  };

  handleChange = (e) => {
    if(["title", "text"].includes(e.target.className)) {
      let events = [...this.state.events];
      events[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({events}, () => console.log(this.state.events))
    } else {
      this.setState({[e.target.title]: e.target.value});
    }
  };

  addEvent = (e) => {
    this.setState((prevState) => ({
      events: [...prevState.events, {title:e.target, text:""}]
    }));
  };

  handleSubmit = (e) => {
    console.log(this.state.events);
    e.preventDefault();
  };

  render() {
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
        <button className={'btn btn-primary'}>Add Event</button>
        <Form onSubmit={this.handleSubmit} onChange={this.handleChange} addNew={this.addEvent}/>
      </div>

    )
  }
}

export default EventCardContainer;