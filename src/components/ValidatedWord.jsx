import "../styles/ValidatedWord.scss";

const ValidatedWord = ({ validatedWords }) => {
  return (
    <div className="container">
      {validatedWords.map((word, index) => (
        <div key={index} className="line-box">
          {word.map((letter, insideIndex) => (
            <p
              key={insideIndex}
              className={`box-letters ${
                letter.isInSamePosition && letter.isInWord
                  ? "box-letters--is-position"
                  : ""
              } ${
                letter.isInWord && !letter.isInSamePosition
                  ? "box-letters--is-in-word"
                  : ""
              }`}
            >
              {letter.letter}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ValidatedWord;
