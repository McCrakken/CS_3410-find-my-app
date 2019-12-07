import React from 'react';

const card = (props) => {
  const headerBtn = props.headerBtn ? props.headerBtn: null;
  // const headerBtnText = props.headerBtnText ? props.headerBtnText: null;
  const borderColor = '3px solid ' + props.borderColor;
  return (
    <div className={props.classes} style={{borderLeft: borderColor}}>
      {props.image ? <img className='card-img-top' src={props.image} alt={props.altText}/> : null }
      {props.header ? (
        <h5 className={'card-header'}>
          {props.header}
          <span>{headerBtn}</span>
        </h5>
      ) : null }
      <div className="card-body">
        {props.title ? <h5 className="card-title">{props.title}</h5> : null}
        {props.text ? <p className='card-text'>{props.text}</p> : null}
        {props.children}
      </div>
    </div>
)};

export default card;