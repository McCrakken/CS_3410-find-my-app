import React, {Component} from 'react';

import logo from '../../../logo.svg';
import EventCard from "../../../components/Card/EventCard/EventCard";
import DegreePathEventCard from "../../../components/Card/EventCard/DegreePathEventCard";
import DegreeForm from "../../../components/Form/DegreeForm";
import Icon from '../../../static/classIcon.png';

class DegreeCardContainer2 extends Component {
  state = {
    events: [
      { title: 'CS 4450', text: 'Analysis of Programming Languages', altText: 'Required'},
      { title: 'CS 481R', text: 'Internship', altText: 'event-2'}
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
      events: [...prevState.events, {title:e.title, text:e.text}]
    }));
  };

  handleSubmit = (e) => {
    console.log(this.state.events);
    e.preventDefault();
  };

  render() {
    return(
      <div className={'degree-card-container'}>
        {this.state.events.map((Event) => {
          return <DegreePathEventCard
            altText={Event.altText}
            title={Event.title}
            text={Event.text}
            classes={'card event-card2'}
            image={Icon}
          />}
        )}
        <button className={'btnSize'}>Edit Plan</button>
        <DegreeForm onSubmit={this.handleSubmit} onChange={this.handleChange} addNew={this.addEvent}/>
      </div>

    )
  }
}

export default DegreeCardContainer2;