import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GroceryList from './GroceryList'

class App extends Component {
  render() {
    var a = "234";
    var b = 123
    var scope = "golab var"

    function test(){
      document.writeln(scope + "<br />")
      var scope = "local var"
      document.writeln(scope + "<br />")
    }
    test();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>{a + b}</h2>
        <GroceryList></GroceryList>
      </div>
    );
  }
}


export default App;
