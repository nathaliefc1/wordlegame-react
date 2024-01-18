

const Result = ({ gameState }) => {
  return (
    <>
      <div className="container">
        {gameState === 'completed' && <p>Congratulations!</p>}
        {gameState === 'failed' && <p>Game Over</p>}
      </div>
    </>
  );
};

export default Result;
