import "../styles/ValidatedWord.scss";

const ValidatedWord = ({ validatedWords }) => {
  return (
    <div className="container">
      {validatedWords.map((Arrays, index) => (
        <div key={index} className="line-box">
          {Arrays.map((wordArray, insideIndex) => (
            <p
              key={insideIndex}
              className={`box-letters ${
                wordArray.isInSamePosition && wordArray.isInWord
                  ? "box-letters--is-position"
                  : ""
              } ${
                wordArray.isInWord && !wordArray.isInSamePosition
                  ? "box-letters--is-in-word"
                  : ""
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
