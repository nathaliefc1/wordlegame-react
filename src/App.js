import { useState } from "react";
import "./App.css";
import ApiWord from "./components/ApiWord";
import Result from "./components/Result";
import WordInput from "./components/WordInput";

function App() {
  const [newInputWord, setNewInputWord] = useState("");
  const [valueData, setValueData] = useState("");
  const [finalResult, setFinalResult] = useState(false);

  const handleData = (data) => {
    console.log("ApiWord ===", data);
    setValueData(data);
  };

  const handleSubmit = (newWord) => {
    console.log("MyNewWord ===", newWord);
    if (newWord === valueData) {
      setFinalResult(true);
    } else {
      setFinalResult(false);
    }
    setNewInputWord(newWord);
  };

  const validateWord = (newInputWord, valueData) => {
    let checkLetter = [];
    let letter = undefined;
    let isInWord = undefined;
    let isInSamePosition = undefined;
    for (let i = 0; i < newInputWord.length; i++) {
    letter = newInputWord[i];
    isInWord = valueData.includes(newInputWord[i]);
    isInSamePosition = newInputWord[i] === valueData[i];
    checkLetter.push({ letter, isInWord, isInSamePosition });
    }
    return checkLetter;
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Wordle Game</h1>
      </header>
      <div>
        <ApiWord onFetchData={handleData} />
        {validateWord < 6 && validateWord.map((letter) => <p>{letter.letter}</p>)}
        <p>{newInputWord}</p>
        {finalResult && <Result>Congratulations</Result>}
        <WordInput onSubmit={handleSubmit} onClick={validateWord}/>
      </div>
    </div>
  );
}

export default App;
