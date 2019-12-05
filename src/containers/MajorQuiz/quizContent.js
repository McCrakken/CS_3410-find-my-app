import React, {Component} from 'react';
import logo from '../../logo.svg';
import EventCard from "../../components/Card/EventCard/EventCard";

class QuizContent extends Component{
    state = {
        event:[

        ]
    };
    render() {
        return(
            <div className={'quiz-content'}>
                {this.state.event.map((Event)=>{
                    return<EventCard
                    title={Event.title}
                    classes={'card event-card'}
                    image={logo}
                    />}
                )}

            </div>
        )
    }
}

export default QuizContent;