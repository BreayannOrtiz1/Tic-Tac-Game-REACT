import { useState } from "react";

import GameBoard from "./components/GameBoard.jsx";
import Player from "./components/Player.jsx";
import Log from "./components/Log.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";
import GameOver from "./components/GameOver.jsx";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(turns) {
  let currentPlayer = "X";
  if (turns.length > 0 && turns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}
function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState({
    X: "Player 1",
    Y: "Player 2",
  });

  const activePlayerSymbol = deriveActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map((array) => [...array])];
  for (const turn of gameTurns) {
    //Solo entra si Turns no es un array vacio.
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      secondSquareSymbol === thirdquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

  let isDraw = gameTurns.length === 9 && !winner;

  function handleSelectedSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      let currentPlayer = deriveActivePlayer(prevTurns);
      const updateTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updateTurns;
    });
  }

  function handleRestarButton() {
    setGameTurns([]);
  }

  function handleChangeName(symbol, newName) {
    setPlayers((prevPlayers) => {
      let newPlayers = { ...prevPlayers, [symbol]: newName };
      return newPlayers;
    });
  }

  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <Player
            name='Jugador 1'
            symbol='X'
            isActivePlayer={activePlayerSymbol === "X"}
            onChangeName={handleChangeName}
          />
          <Player
            name='Jugador 2'
            symbol='O'
            isActivePlayer={activePlayerSymbol === "O"}
            onChangeName={handleChangeName}
          />
        </ol>

        {winner && (
          <p>
            Ganador {activePlayerSymbol} {winner}
          </p>
        )}
        {(winner || isDraw) && (
          <GameOver winner={winner} onRestarButton={handleRestarButton} />
        )}
        <GameBoard onSelectSquare={handleSelectedSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
