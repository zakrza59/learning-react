import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {

  state = {
    persons:[
      {name: 'Max', age: 12},
      {name: 'Zed', age: 15},
      {name: 'Chris', age: 17}
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

  nameChange = (event) => {
    this.setState({ 
    persons:[
      {name: 'Chrisa', age: 2},
      {name: event.target.value, age: 5},
      {name: 'Chrisa', age: 7}
    ]})
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow})
  }
  

  render() {
    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchName.bind(this, "Rupert")}
            changed={this.nameChange}>and I like trains</Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} />
        </div>
      );

    }

    return (
      <div className="App">
        <h1>Hi</h1>
        <button onClick={this.togglePersonHandler} >Switch name</button>
        {persons}
      </div>
    );
  }
}

export default App;
