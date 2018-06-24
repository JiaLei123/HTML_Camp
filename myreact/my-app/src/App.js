import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var a = "234";
    var b = 123;
    var c = 1E2;
    var d = 'niohao1234';
    // var d = true.toString();
    var scope = "golab var"
    function test() {
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
        <h2>{c}</h2>
        <h2>{isNaN(d).toString()}</h2>
        <h2>{Number.MAX_VALUE} * {Number.MIN_VALUE} * {Number.POSITIVE_INFINITY} * {Number.NEGATIVE_INFINITY} * {Number.NaN}</h2>
        <h2>{d.indexOf('hao')} * {d.indexOf('o', 6)} * {d.lastIndexOf('o')}</h2>
        <h2>{d.substring(2)} * {d.slice(-3)} * {d.slice(-2, -3)}</h2>
        <h2>{d.search("/\d+")} * {d.match("[a-z]+")} * {d.match("[0-9]+")}</h2>
      </div>
    );
  }
}


export default App;
