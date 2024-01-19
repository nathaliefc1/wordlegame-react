import "../styles/Result.scss";

const Result = ({ gameState }) => {
  return (
    <>
      <div className="container">
        {gameState === "completed" && (
          <p className="completed">Congratulations!</p>
        )}
        {gameState === "failed" && <p className="failed">Game Over</p>}
      </div>
    </>
  );
};

export default Result;
