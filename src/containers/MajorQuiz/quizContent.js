import React, {Component} from 'react';

import QuizCard from "../../components/Card/QuizCard/QuizCard";
import Answer from "./AnswerOption";

class QuizContent extends Component{
  state = {
    questions:[
      { number: 1, text: 'Example question content for an assessment item'},
      { number: 2, text: 'Example question content for an assessment item'},
      { number: 3, text: 'Example question content for an assessment item'},
      // { number: 4, text: 'Example question content for an assessment item'},
      // { number: 5, text: 'Example question content for an assessment item'},
    ]
  };
  render() {
    return(
      <div className={'quiz-content'}>
        <label>Please answer the questions below:</label>
        <div className={'questions-container'}>
          {this.state.questions.map((Question)=>{
            return (
              <QuizCard title={Question.number + ') ' + Question.text} classes={'card quiz-card'}>
                <Answer/>
              </QuizCard>
            )}
          )}
        </div>
      </div>
    )
  }
}

export default QuizContent;