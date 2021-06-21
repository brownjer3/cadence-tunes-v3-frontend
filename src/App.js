// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import Cadence from './Cadence'
import Genres from './Genres'

class App extends Component {

  state = {
    cadence: 0, 
    genres: [], 
    recommendations: []
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Cadence handleChange={this.handleChange} handleSubmit={this.handleSubmit} cadence={this.state.cadence}/>
          <Genres genres={this.state.genres}/>
        </header>
      </div>
    )
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // need to add a validation check here to ensure cadence is within range
    // change prompt text to "Target Cadence: X" and change CSS to move to top of page
    // display Spotify genre options
  }
  
}

export default App;
