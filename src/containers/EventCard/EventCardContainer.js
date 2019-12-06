import React, {Component} from 'react';

import logo from '../../logo.svg';
import EventCard from "../../components/Card/EventCard/EventCard";

class EventCardContainer extends Component {
    state = {
        events: [
            { title: 'Card - 1', text: 'Text used to make the first event'},
            { title: 'Card - 3', text: 'Text used to make the third event'},
            { title: 'Card - 4', text: 'Text used to make the fourth event'}
        ]
    };

    render() {
        return(
            <div className={'event-card-container'}>
                {this.state.events.map((Event) => {
                    return <EventCard
                        title={Event.title}
                        text={Event.text}
                        classes={'card event-card'}
                        image={logo}
                    />}
                )}
                <button className={'btn btn-primary'}>Add Event</button>
            </div>

        )
    }
}

export default EventCardContainer;