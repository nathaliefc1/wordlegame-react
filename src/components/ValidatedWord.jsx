import { useState, useEffect } from "react";
import "../styles/ValidatedWord.scss";

const ValidatedWord = ({ newWord, apiWordData }) => {
  const [validatedWords, setValidatedWords] = useState([]);

  useEffect(() => {
    if (newWord) {
      let checkArray = [];
      let letter = undefined;
      let isInWord = undefined;
      let isInSamePosition = undefined;
      for (let i = 0; i < newWord.length; i++) {
        letter = newWord[i];
        isInWord = apiWordData.includes(newWord[i]);
        isInSamePosition = newWord[i] === apiWordData[i];
        checkArray.push({ letter, isInWord, isInSamePosition });
      }
      console.log(checkArray);
      const arrayWords = [...validatedWords, checkArray];
      console.log("componente arrayWords", arrayWords);
      setValidatedWords(arrayWords);
    }
  }, [newWord]);

  return (
    <div className="container">
      {validatedWords.map((Arrays, index) => (
        <div key={index} className="line-box">
          {Arrays.map((wordArray, insideIndex) => (
            <p
              key={insideIndex}
              className={`box-letters ${wordArray.isInSamePosition && wordArray.isInWord ? "box-letters--is-position" : ""} ${
                wordArray.isInWord && !wordArray.isInSamePosition ? "box-letters--is-in-word" : ""
              }`}
            >
              {wordArray.letter}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ValidatedWord;
