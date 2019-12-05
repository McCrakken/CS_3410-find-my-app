import React, { Component } from 'react';


const Answer = (props)=>{
    return(

        <div className={props.classes}>
        <div>
            <button className="btn btn-outline-secondary" type="submit">Strongly Agree</button>
            <button className="btn btn-outline-secondary" type="submit">Agree</button>
            <button className="btn btn-outline-secondary" type="submit">Neutral</button>
            <button className="btn btn-outline-secondary" type="submit">Disagree</button>
            <button className="btn btn-outline-secondary" type="submit">Strongly Disagree</button>

        </div>

            {props.children}
        </div>

    )
};

export default Answer;