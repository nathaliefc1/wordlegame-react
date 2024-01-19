import "../styles/WordInput.scss";
import { useEffect, useState } from "react";

function WordInput({
  inputDisabled,
  onValidateWord,
  onIsComplete,
  hiddenWord,
  validatedWords,
}) {
  const [newWord, setNewWord] = useState("");
  const [remainingAttempts, setRemainingAttempts] = useState(6);

  const handleInputChange = (value) => {
    setNewWord(value.target.value);
  };

  const handleSubmit = () => {
    let checkArray = [];
    let letter = undefined;
    let isInWord = undefined;
    let isInSamePosition = undefined;
    for (let i = 0; i < newWord.length; i++) {
      letter = newWord[i];
      isInWord = hiddenWord.includes(newWord[i]);
      isInSamePosition = newWord[i] === hiddenWord[i];
      checkArray.push({ letter, isInWord, isInSamePosition });
    }
    onValidateWord(checkArray);

    if (newWord === hiddenWord) {
      onIsComplete("completed");
      setRemainingAttempts(6);
    } else if (
      newWord !== hiddenWord &&
      [...validatedWords, checkArray].length === 6
    ) {
      onIsComplete("failed");
      setRemainingAttempts(6);
    }
    setNewWord("");
    setRemainingAttempts((prevAttempts) => prevAttempts - 1);
  };

  useEffect(() => {
    setRemainingAttempts(6);
  }, [hiddenWord]);


  return (
    <>
      <div className="remaining-attempts">
        {!inputDisabled && remainingAttempts > 0 && remainingAttempts < 6 && (
          <p>
            You have {remainingAttempts} more{" "}
            {remainingAttempts === 1 ? "try" : "tries"}
          </p>
        )}
      </div>
      <div className="containerInput">
        <input
          type="text"
          className="wordInput"
          value={newWord}
          onChange={handleInputChange}
          placeholder="Enter a word"
          required
          maxLength="5"
          disabled={inputDisabled}
        />
        <button onClick={handleSubmit} disabled={newWord.length < 5}>
          Submit
        </button>
      </div>
      <div className="alerInput">
        {newWord.length < 5 && newWord.length > 0 && (
          <p>Text should be 5 letters</p>
        )}
      </div>
    </>
  );
}

export default WordInput;
