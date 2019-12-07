import React from 'react';
import Card from '../Card';

const QuizCard = (props) => {
  return(
    <Card {...props} classes={'card quiz-card'}>
      {props.children}
    </Card>
  )
};

export default QuizCard;