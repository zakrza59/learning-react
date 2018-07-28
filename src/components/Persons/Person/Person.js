import React, { Component } from 'react';
import WithClasses from '../../hoc/WithClass';
import classes from './Person.css';

class Person extends Component {
  render() {
    return (
      <WithClasses classes={classes.Person}>
        <p onClick={this.props.click}>I'm {this.props.name} and I have {this.props.age} {this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </WithClasses>
    )
  }  
}

export default Person;
