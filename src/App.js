import { useState, useEffect } from "react";
import ApiWord from "./components/ApiWord";
import Result from "./components/Result";
import WordInput from "./components/WordInput";
import "./styles/style.scss";
import ValidatedWord from "./components/ValidatedWord";

function App() {
  const [hiddenWord, setHiddenWord] = useState("");
  const [gameState, setGameState] = useState(undefined);
  const [validatedWords, setValidatedWords] = useState([]);

  const handleData = (data) => {
    setHiddenWord(data);
  };

  const handleResult = (state) => {
    setGameState(state);
  };

  const handleValidatedWord = (newWord) => {
    setValidatedWords([...validatedWords, newWord]);
  };

  useEffect(() => {
    setValidatedWords([]);
    setGameState(undefined);
  }, [hiddenWord]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wordle Game</h1>
      </header>
      <div>
        <ApiWord onFetchData={handleData} />
        <ValidatedWord validatedWords={validatedWords} />
        <Result gameState={gameState} />
        <WordInput
          inputDisabled={!!gameState}
          onValidateWord={handleValidatedWord}
          onIsComplete={handleResult}
          hiddenWord={hiddenWord}
          validatedWords={validatedWords}
        />
      </div>
    </div>
  );
}

export default App;
