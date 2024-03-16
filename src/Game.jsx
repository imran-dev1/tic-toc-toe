import { useState } from "react";
import Board from "./Board";
import History from "./History";
import ReactConfetti from "react-confetti";
import logo from "./assets/images/tic-tac-toe-logo.svg";

const Game = () => {
   const [history, setHistory] = useState([Array(9).fill(null)]);
   const [isXNext, setIsXNext] = useState(true);

   const currentSquares = history[history.length - 1];
   console.log(currentSquares);

   const handlePlay = (nextSquares) => {
      setIsXNext(!isXNext);
      setHistory([...history, nextSquares]);
   };

   //Winner Calculation
   const calculateWinner = (squares) => {
      const winningLines = [
         [0, 1, 2],
         [3, 4, 5],
         [6, 7, 8],
         [0, 3, 6],
         [1, 4, 7],
         [2, 5, 8],
         [0, 4, 8],
         [2, 4, 6],
      ];

      for (let index = 0; index < winningLines.length; index++) {
         const [a, b, c] = winningLines[index];
         if (
            squares[a] &&
            squares[b] === squares[a] &&
            squares[c] === squares[a]
         ) {
            return { winner: squares[a], line: winningLines[index] };
         }
      }
      return null;
   };
   const winner = calculateWinner(currentSquares)?.winner;
   const winningLines = calculateWinner(currentSquares)?.line;
   let status;
   if (winner) {
      status = `Winner: ${winner}`;
   } else if (currentSquares.every((square) => square !== null)) {
      status = "Match Draw! Please try again.";
   } else {
      status = `Next Player: ${isXNext ? "X" : "O"}`;
   }

   //Reset Game handler
   const resetGame = () => {
      setHistory([Array(9).fill(null)]);
   };
   return (
      <div className="h-screen flex justify-start items-center flex-col pt-20 md:p-40">
         <img className=" w-3/4 md:w-96" src={logo} alt="logo" />
         <div className="p-6 md:p-20 flex gap-5 rounded-lg text-white">
            <div className="flex items-center flex-col gap-4">
               <Board
                  squares={currentSquares}
                  isXNext={isXNext}
                  onPlay={handlePlay}
                  winner={winner}
                  status={status}
                  winningLines={winningLines}
               />
               {winner && (
                  <button
                     className="p-5 text-xl uppercase tracking-widest rounded-md mt-5 bg-pink-700 shadow-2xl w-52"
                     onClick={resetGame}
                  >
                     Play Again
                  </button>
               )}
               {currentSquares.every((square) => square !== null) && !winningLines ? (
                  <button
                     className="p-5 text-xl uppercase tracking-widest rounded-md mt-5 bg-pink-700 shadow-2xl w-52"
                     onClick={resetGame}
                  >
                     Play Again
                  </button>
               ) : (
                  ""
               )}
            </div>
            <div>
               <History />
            </div>
         </div>
         <p className=" text-slate-400 tracking-widest">Designed by Imran</p>
         {winner && <ReactConfetti />}
      </div>
   );
};

export default Game;
