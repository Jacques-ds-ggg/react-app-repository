import fox from './noun_Fox_20234.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={fox} className="App-logo" alt="logo" />
        <p>
          Get all <code>code and files to </code>portfolio.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Look Up
        </a>
      </header>
    </div>
  );
}

export default App;
