import React, { useReducer, useEffect, useMemo, useState } from "react";
import "./App.css";

const LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const initialState = {
  board: Array(9).fill(null),
  turn: "X",
  winner: null,
  history: [],
};

function checkWinner(board) {
  for (const [a, b, c] of LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  if (board.every(Boolean)) return "draw";
  return null;
}

function reducer(state, action) {
  switch (action.type) {
    case "MAKE_MOVE": {
      const idx = action.index;
      if (state.winner || state.board[idx]) return state;

      const newBoard = [...state.board];
      newBoard[idx] = state.turn;

      return {
        board: newBoard,
        turn: state.turn === "X" ? "O" : "X",
        winner: checkWinner(newBoard),
        history: [...state.history, state.board],
      };
    }
    case "UNDO_MOVE": {
      if (!state.history.length) return state;
      const prevBoard = state.history[state.history.length - 1];
      return {
        board: prevBoard,
        turn:
          prevBoard.filter((x) => x === "X").length ===
          prevBoard.filter((o) => o === "O").length
            ? "X"
            : "O",
        winner: checkWinner(prevBoard),
        history: state.history.slice(0, -1),
      };
    }
    case "RESET_GAME":
      return initialState;
    default:
      return state;
  }
}

export default function TicTacToe() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { board, turn, winner, history } = state;

  const [players, setPlayers] = useState({ X: "", O: "" });
  const [namesSet, setNamesSet] = useState(false);

  // Winner line
  const winningLine = useMemo(() => {
    if (!winner || winner === "draw") return null;
    for (const line of LINES) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return line;
      }
    }
    return null;
  }, [board, winner]);

  useEffect(() => {
    if (winner) {
      document.title =
        winner === "draw"
          ? "Draw!"
          : `${players[winner]} wins! 🎉`;
    } else {
      document.title = `${players[turn] || turn}'s turn`;
    }
  }, [winner, turn, players]);

  // Ask for names before game
  const [tempX, setTempX] = useState("");
  const [tempO, setTempO] = useState("");

  const handleStart = () => {
    if (tempX.trim() && tempO.trim()) {
      setPlayers({ X: tempX, O: tempO });
      setNamesSet(true);
    }
  };

  return (
    <div className="container py-5 text-center">
      {!namesSet ? (
        <div className="card p-4 shadow-lg mx-auto" style={{ maxWidth: 400 }}>
          <h2 className="mb-3">Enter Player Names</h2>
          <input
            type="text"
            placeholder="Player X Name"
            className="form-control mb-3"
            value={tempX}
            onChange={(e) => setTempX(e.target.value)}
          />
          <input
            type="text"
            placeholder="Player O Name"
            className="form-control mb-3"
            value={tempO}
            onChange={(e) => setTempO(e.target.value)}
          />
          <button
            className="btn btn-primary w-100"
            onClick={handleStart}
            disabled={!tempX.trim() || !tempO.trim()}
          >
            Start Game 🎮
          </button>
        </div>
      ) : (
        <>
          <h1 className="fw-bold">🎮 Tic-Tac-Toe</h1>
          <p className="text-muted">
            {winner
              ? winner === "draw"
                ? "It's a Draw!"
                : `${players[winner]} Wins 🎉`
              : `${players[turn]}'s Turn`}
          </p>

          <div className="d-flex justify-content-center">
            <div className="game-box shadow-lg p-4 rounded bg-light">
              {/* Board */}
              <div className="board-box">
                {board.map((cell, i) => {
                  const isWinningCell = winningLine?.includes(i);
                  return (
                    <button
                      key={i}
                      onClick={() =>
                        dispatch({ type: "MAKE_MOVE", index: i })
                      }
                      className={`cell-box ${isWinningCell ? "winner" : ""}`}
                      disabled={Boolean(cell) || Boolean(winner)}
                    >
                      {cell && (
                        <span className="animate-in fw-bold">{cell}</span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Controls */}
              <div id="undo" className="mt-4 d-flex justify-content-center gap-2">
                <button
                  className="btn btn-warning"
                  onClick={() => dispatch({ type: "UNDO_MOVE" })}
                  disabled={!history.length || winner}
                >
                  ⏪ Undo
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch({ type: "RESET_GAME" })}
                >
                  🔄 Reset
                </button>
              </div>

              {/* Winner celebration */}
              {winner && winner !== "draw" && (
                <div className="celebration mt-4">
                  🎉 {players[winner]} Wins the Game! 🎉
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
