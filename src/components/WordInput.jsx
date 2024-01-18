import '../styles/WordInput.scss'
import { useState } from "react";

function WordInput({ onSubmit }) {
  const [newWord, setNewWord] = useState("");

  const handleInputChange = (value) => {
    setNewWord(value.target.value);
  };

  const handleSubmit = () => {
    onSubmit(newWord);
    setNewWord("");
  };

  return (
    <>
      <div className="containerInput">
        <input
          type="text"
          className="wordInput"
          value={newWord}
          onChange={handleInputChange}
          placeholder="Enter a word"
          required
          maxLength="5"
        />
        <button onClick={handleSubmit}>Submit</button>
        </div>
        <div className='alerInput'>
        {newWord.length < 5 && newWord.length > 0 && (
            <p>Text should be 5 letters</p>
        )}
        </div>
    </>
  );
}

export default WordInput;
