import { useState } from "react";
import ApiWord from "./components/ApiWord";
import Result from "./components/Result";
import WordInput from "./components/WordInput";
import "./styles/style.scss";
import ValidatedWord from "./components/ValidatedWord";

// 'complete', 'failed', undefined

function App() {
  const [valueData, setValueData] = useState("");
  const [inputWord, setInputWord] = useState("");
  const [gameState, setGameState] = useState(undefined);


  const handleData = (data) => {
    console.log("ApiWord ===", data);
    setValueData(data);
  };
  const handleInputWord = (newWord) => {
    setInputWord(newWord);
  }

  const handleResult = (state) => {
    setGameState(state);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wordle Game</h1>
      </header>
      <div>
        <ApiWord onFetchData={handleData} />
        <ValidatedWord apiWordData={valueData} newWord={inputWord} onIsComplete={handleResult}/>
        <Result gameState={gameState}/>
        <WordInput onSubmit={handleInputWord} />
      </div>
    </div>
  );
}

export default App;
