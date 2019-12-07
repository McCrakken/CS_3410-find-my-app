import React from 'react';

const Answer = (props) => {
    return(
        <div className={'quiz-buttons'}>
            <button className="btn btn-light" type="submit">Strongly Agree</button>
            <button className="btn btn-light" type="submit">Agree</button>
            <button className="btn btn-light" type="submit">Neutral</button>
            <button className="btn btn-light" type="submit">Disagree</button>
            <button className="btn btn-light" type="submit">Strongly Disagree</button>
        </div>
    )
};

export default Answer;