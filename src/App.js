import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {

  state = {
    persons:[
      {name: 'Max', age: 12},
      {name: 'Zed', age: 15},
      {name: 'Chris', age: 17}
    ]
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
  

  render() {
    return (
      <div className="App">
        <h1>Hi</h1>
        <button onClick={() => this.switchName("Olav")} >Switch name</button>
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
}

export default App;
