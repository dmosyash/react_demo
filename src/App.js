import React, { Component } from 'react';
import logo from './logo.svg';
import Hello from './components/hello';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      names: []
    }
  }

  componentWillMount () {
    this.setState({names: [{
        id: 1,
        name: 'Foo'
      }, {
        id: 2,
        name: 'Bar'
      }]
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
           <Hello names={this.state.names}/>
          To get start, edit <code>src/App.js</code> and save to reload.
        </div>
      </div>
    );
  }
}
export default App;
