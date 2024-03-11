import { useState } from "react";
import Board from "./Board";
import History from "./History";
import ReactConfetti from "react-confetti";

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
            return squares[a];
         }
      }
      return null;
   };
   const winner = calculateWinner(squares);
   let status;
   if (winner) {
      status = `Winner: ${winner}`;
   } else {
      status = `Next Player: ${isXNext ? "X" : "O"}`;
   }
   return (
      <div className="h-screen flex justify-center items-center">
         <div className=" bg-black/35 backdrop-blur-md p-20 flex gap-5 border border-purple-900 border-4 rounded-lg text-white">
            <div className="flex flex-col gap-4">
               <Board
                  squares={squares}
                  setSquares={setSquares}
                  isXNext={isXNext}
                  setIsXNext={setIsXNext}
                  winner={winner}
                  status={status}
               />
                {winner && <button className="">Play Again</button>}
            </div>
           
            <div>
               <History />
            </div>
         </div>
         {winner && <ReactConfetti />}
      </div>
   );
};

export default Game;
