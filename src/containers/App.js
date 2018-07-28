import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClassses from '../components/hoc/WithClass';
import classes from './App.css';

class App extends Component {

  state = {
    persons:[
      {id: '1', name: 'Max', age: 12},
      {id: '2', name: 'Fiona', age: 15},
      {id: '3', name: 'Chris', age: 17}
    ],
    otherState: 'some other value',
    showPerson: false
  }

  nameChange = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow})
  }

  render() {
    let persons = null;

    if (this.state.showPerson) {
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChange} />;
    }

    return (
        <WithClassses classes={classes.App}>
          <Cockpit 
            showPerson={this.state.showPerson}
            persons={this.state.persons}
            clicked={this.togglePersonHandler} />
          {persons}
        </WithClassses>
    );
  }
}

export default App;
