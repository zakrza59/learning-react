import React from 'react'
import ReactAux from '../hoc/ReactAux'
import classes from './Cockpit.css'

const Cockpit = (props) => {
  const assignedClasses = [];
  let btnClass = classes.Button;
  if (props.showPerson) {
    btnClass = [classes.Button, classes.Red].join(' ');
  }

  if (props.persons.length <= 2) {
    assignedClasses.push( classes.red ); 
  }

  if (props.persons.length <= 1) {
    assignedClasses.push( classes.bold ); 
  }
  
  return (
    <ReactAux>
      <h1>Hi</h1>
      <p className={assignedClasses.join(' ')}>This works</p>
      <button
        className={btnClass} 
        onClick={props.clicked} >Switch name</button>
    </ReactAux>
  )
}

export default Cockpit