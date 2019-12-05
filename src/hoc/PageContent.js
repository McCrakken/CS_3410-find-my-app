import React from 'react';

const content = (props) => {
  return (
    <div className="PageContent">
      {props.children}
    </div>
  )
};

export default content;