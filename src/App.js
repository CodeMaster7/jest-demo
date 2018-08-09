import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fns from './utils/functions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {},
      starship: {}
    }
    this.getPerson = this.getPerson.bind(this);
    this.getStarship = this.getStarship.bind(this);
  }
  getPerson() {
    fns.getPerson().then(data => {
      this.setState({
        person: data
      })
    })
  }
  getStarship() {
    fns.getStarship(9).then(data => {
      this.setState({
        starship: data
      })
    })
  }
  render() {
    return (
      <div className="App">
        {JSON.stringify(this.state.person)}
        <button onClick={this.getPerson}> Get Person</button>
        {JSON.stringify(this.state.starship)}
        <button onClick={this.getStarship}> Get Starship</button>
      </div>
    );
  }
}

export default App;
