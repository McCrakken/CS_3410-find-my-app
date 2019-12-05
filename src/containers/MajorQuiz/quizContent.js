import React, {Component} from 'react';
import logo from '../../logo.svg';
import EventCard from "../../components/Card/EventCard/EventCard";
import Answer from "./AnswerOption";
class QuizContent extends Component{
    state = {
        event:[
            { title: 'Please answer questions below:', text: 'Text used to make the first event'},
        ]
    };
    render() {
        return(
            <div className={'quiz-content'}>
                {this.state.event.map((Event)=>{
                    return<EventCard
                    title={Event.title}
                    classes={'card event-card'}

                    />}
                )}
                <Answer/>
            </div>


        )
    }
}

export default QuizContent;