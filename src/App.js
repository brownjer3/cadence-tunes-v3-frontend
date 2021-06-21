// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';

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
          <form>
            <label htmlFor="cadence">
              <h1>
                What's your target running cadence?
              </h1>
              <h3>{this.state.cadence}</h3>
            </label>
            <input
              id="cadence"
              type="number"
              onChange={this.handleChange}
            />
            <button>
              Next
            </button>
          </form>
        </header>
      </div>
    )
  }

  handleChange = (e) => {
    this.setState({cadence: e.target.value})
  }
  
}

export default App;
