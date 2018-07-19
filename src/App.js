import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi</h1>
        <Person  name="Max" age="12"/>
        <Person name="Zed" age="15"></Person>
        <Person name="Chirs" age="17" />
      </div>
    );
  }
}

export default App;
