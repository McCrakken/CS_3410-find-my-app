import React from 'react';

const SidePanel = (props) => {
  return (
    <div className={'side-panel col-sm-4 col-md-3'}>
      {props.children}
    </div>
  )
};

export default SidePanel;