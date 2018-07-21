import React from 'react';
import './Person.css';

const Person = (props) => {
  const style = {}

  return (
    <div className="Person" style={style}>
      <p onClick={props.click}>I'm {props.name} and I have {props.age} {props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
}

export default Person;
