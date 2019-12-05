import React, {useEffect, useState} from 'react'

import ItemBody from "./Components/ItemBody";
import ItemHeader from './Components/ItemHeader'

const AccordionItem = (props) => {
  //Reacthook useState allows this to manage a state used by nested components itemBody and itemHeader
  const [toggle, setToggle] = useState('collapse hide');
  const handleToggle = () => {
    if (!props.isDisabled)
      toggle === 'collapse show' ? setToggle('collapse hide') : setToggle('collapse show');
  };

  //Works like the life-cycle hook componentDidMount() but within a functional component
  useEffect(() => {
    if(props.isOpen)
      setToggle('collapse show');
  }, []);


  return (
    <div className="card">
      <ItemHeader title={props.title} click={handleToggle}/>
      <ItemBody show={toggle}>
        {props.children}
      </ItemBody>
    </div>
  )
};

export default AccordionItem;