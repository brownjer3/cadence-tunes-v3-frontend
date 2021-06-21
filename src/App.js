import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          What's your target running cadence?
        </h1>
        <p>
          Running cadence is the number of steps you take every minute. Most runner's aim for ~180.
        </p>
        <input type='number'></input>
        <button>Next</button>
      </header>
    </div>
  );
}

export default App;
