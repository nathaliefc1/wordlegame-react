import { useState } from "react";
import "./App.css";
import ApiWord from "./components/ApiWord";
import Result from "./components/Result";
import WordInput from "./components/WordInput";

function App() {
  const [newWordInput, setNewWordInput] = useState("");
  const [valueData, setValueData] = useState("");
  const [finalResult, setFinalResult] = useState(false);

  const handleData = (data) => {
    console.log("LaData ===", data);
    setValueData(data);
  };
  const handleSubmit = (newWord) => {
    console.log("here ===", newWord);
    setNewWordInput(newWord);
    newWordInput === valueData ?
      console.log("es igual - Congratulations") &&
      setFinalResult(true): setFinalResult(false)
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wordle Game</h1>
      </header>
      <div>
        <ApiWord onFetchData={handleData} />
        <p>{newWordInput}</p>
        {finalResult && <Result>Congratulations</Result>}
        <WordInput onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default App;
