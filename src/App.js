// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';

class App extends Component {
  reneder() {
    return (
      <div className="App">
        <header className="App-header">
          <form>
            <label htmlFor="cadence">
              <h1>What's your target running cadence?</h1>
            </label>
            <br />
            <input
              id="cadence"
              type="number"
            />
            <button>
              Next
            </button>
          </form>
        </header>
      </div>
    )
  }
  
}

export default App;
