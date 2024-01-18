import { useState } from "react";
import ApiWord from "./components/ApiWord";
import Result from "./components/Result";
import WordInput from "./components/WordInput";
import "./styles/style.scss";
import ValidatedWord from "./components/ValidatedWord";

function App() {
  const [valueData, setValueData] = useState("");
  const [inputWord, setInputWord] = useState('');

  const handleData = (data) => {
    console.log("ApiWord ===", data);
    setValueData(data);
  };
  const handleInputWord = (newWord) => {
    setInputWord(newWord);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wordle Game</h1>
      </header>
      <div>
        <ApiWord onFetchData={handleData} />
        <ValidatedWord apiWordData={valueData} newWord={inputWord} />
        <WordInput onSubmit={handleInputWord} />
      </div>
    </div>
  );
}

export default App;
