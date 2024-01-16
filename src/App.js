import './App.css';
import ApiWord from './components/ApiWord';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Wordle Game</h1>
      </header>
      <div>
        <ApiWord />

      </div>
    </div>
  );
}

export default App;
