import React from 'react'

const Accordion = (props) => {

  return (
    <div className="accordion">
      {props.children}
    </div>
  )
};

export default Accordion;