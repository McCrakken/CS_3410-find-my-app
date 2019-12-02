import React from 'react';

import SidePanel from "./Layout/Side-Panel";
import Main from './Layout/Main';

const content = (props) => {
  return (
    <div className="PageContent">
      <SidePanel />
      <Main>
        {props.children}
      </Main>
    </div>
  )
};

export default content;