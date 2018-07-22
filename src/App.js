import React, { Component } from 'react';
import Person from './Person/Person';
import classes from './App.css';

class App extends Component {

  state = {
    persons:[
      {id: '1', name: 'Max', age: 12},
      {id: '2', name: 'Zed', age: 15},
      {id: '3', name: 'Chris', age: 17}
    ],
    otherState: 'some other value',
    showPerson: false
  }

  switchName = (newName) => {
    this.setState({ 
    persons:[
      {name: newName, age: 2},
      {name: 'Zeda', age: 5},
      {name: 'Chrisa', age: 7}
    ]})
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
  debugger;

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
            className="Person" 
            name={person.name} 
            age={person.age} 
            click={() => this.deletePersonHandler(person)}
            key={person.id}
            changed={(event) => this.nameChange(event, person.id)} /> 
          })}
        </div>
      );      
      btnClass = classes.Red;
    }

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push( classes.red ); 
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push( classes.bold ); 
    }



    return (
        <div className={classes.App}>
          <h1>Hi</h1>
          <p className={assignedClasses.join(' ')}>This works</p>
          <button
          className={btnClass} 
          onClick={this.togglePersonHandler} >Switch name</button>
          {persons}
        </div>
    );
  }
}

export default App;
