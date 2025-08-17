export default function GameOver({ winner, onRestarButton }) {
  return (
    <div id='game-over'>
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It's a draw</p>}
      <p>
        <button onClick={onRestarButton}>Rematch</button>
      </p>
    </div>
  );
}
