import { useState } from "react";

function WordInput({ onSubmit }) {
  const [newWord, setNewWord] = useState("");

  const handleInputChange = (value) => {
    setNewWord(value.target.value);
  };


  return (
    <>
      <div>
        <input
          type="text"
          value={newWord}
          onChange={handleInputChange}
          placeholder="Enter a word"
          required
          maxLength="5"
        />
        {newWord.length < 5 && newWord.length > 0 && <p>Text should be 5 letters</p>}
      </div>
      <button onClick={() => onSubmit(newWord)}>Submit</button>
    </>
  );
}

export default WordInput;
