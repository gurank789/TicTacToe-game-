import React, { useState } from "react";
import styles from "./TicTacToe.module.css";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPlayerOne, setIsPlayerOne] = useState(true);
  const [winner, setWinner] = useState(null);

  const checkWinner = (squares) => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null;
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isPlayerOne ? "X" : "O";
    setBoard(newBoard);

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    } else {
      setIsPlayerOne(!isPlayerOne);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerOne(true);
    setWinner(null);
  };

  const renderSquare = (index) => {
    return (
      <button className={styles.square} onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };

  return (
    <div>
      {winner && <div>Winner: {winner}</div>}
      <div className={styles.board}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <button className={styles.reset} onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default TicTacToe;