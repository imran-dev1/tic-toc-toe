import { useState } from "react";
import Board from "./Board";
import ReactConfetti from "react-confetti";
import logo from "./assets/images/tic-tac-toe-logo.svg"

const Game = () => {
   const [squares, setSquares] = useState(Array(9).fill(null));
   const [isXNext, setIsXNext] = useState(true);

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
   const winner = calculateWinner(squares)?.winner;
   const winningLines = calculateWinner(squares)?.line;
   let status;
   if (winner) {
      status = `Winner: ${winner}`;
   } else if(squares.every((square) => square !== null)){
      status = "Match Draw! Please try again."
   }else {
      status = `Next Player: ${isXNext ? "X" : "O"}`;
   }

   //Reset Game handler
   const resetGame = () => {
      setSquares(Array(9).fill(null));
   };
   return (
      <div className="h-screen flex justify-start items-center flex-col pt-20 md:p-40">
         <img className=" w-3/4 md:w-96" src={logo} alt="logo"/>
         <div className="p-6 md:p-20 flex gap-5 rounded-lg text-white">
            <div className="flex items-center flex-col gap-4">
               <Board
                  squares={squares}
                  setSquares={setSquares}
                  isXNext={isXNext}
                  setIsXNext={setIsXNext}
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
               {squares.every((square) => square !== null) && !winningLines ? (
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
         </div>

         {winner && <ReactConfetti />}
      </div>
   );
};

export default Game;
