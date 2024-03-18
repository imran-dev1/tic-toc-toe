import { useState } from "react";
import Board from "./Board";
import History from "./History";
import ReactConfetti from "react-confetti";
import logo from "./assets/images/tic-tac-toe-logo.svg";
import useSound from "use-sound";
import noteLow from "./assets/sound/note-low.mp3";

const Game = () => {
   const [history, setHistory] = useState([Array(9).fill(null)]);
   const [isXNext, setIsXNext] = useState(true);
   const [currentMove, setCurrentMove] = useState(0);
   const [playNoteLow] = useSound(noteLow, { volume: 0.25 });

   const currentSquares = history[currentMove];

   const handlePlay = (nextSquares) => {
      setIsXNext(!isXNext);
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
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
      setCurrentMove(0);
      setIsXNext(true);
   };

   //History handler
   const moveTo = (move) => {
      setCurrentMove(move);
      setIsXNext(move % 2 === 0);
      playNoteLow();
   };

   return (
      <>
         <div className="flex justify-between h-screen items-center flex-col pt-10 md:p-20 pb-10">
            <img className=" w-3/4 md:w-96" src={logo} alt="logo" />
            <div className="p-6 md:p-20 flex flex-col md:flex-row gap-16 rounded-lg text-white">
               <div className="flex items-center flex-col gap-4">
                  <Board
                     squares={currentSquares}
                     isXNext={isXNext}
                     onPlay={handlePlay}
                     winner={winner}
                     status={status}
                     winningLines={winningLines}
                  />
               </div>
               {history.length > 1 && (
                  <div>
                     <h3 className="text-2xl md:text-3xl mb-9 text-center">
                        History
                     </h3>
                     <div className="max-h-52 md:max-h-full overflow-y-auto">
                        <History history={history} moveTo={moveTo} />
                     </div>
                  </div>
               )}
            </div>
            <p className=" text-slate-400 tracking-widest mt-6">
               Designed by Imran
            </p>
            {winner && <ReactConfetti />}
         </div>
         {winner && (
            <div className="absolute top-0 h-full bottom-0 left-0 right-0 w-full backdrop-blur-md bg-black/50 flex justify-center items-center">
               <div className="p-10 md:p-20 text-white text-center">
                  <h1 className="text-4xl mb-5">
                     Congratulation{" "}
                     <span className="text-5xl text-yellow-400 font-bold">
                        {winner}
                     </span>
                  </h1>
                  <h2 className="text-2xl">You win the game 🏆</h2>
                  <button
                     className="p-3 px-5 text-lg uppercase tracking-widest rounded-md mt-16 bg-pink-700 shadow-2xl"
                     onClick={resetGame}
                  >
                     Play Again
                  </button>
               </div>
            </div>
         )}
         {currentSquares.every((square) => square !== null) && !winningLines ? (
            <div className="absolute top-0 h-full bottom-0 left-0 right-0 w-full backdrop-blur-md bg-black/50 flex justify-center items-center">
               <div className="p-10 md:p-20 text-white text-center">
                  <h1 className="text-4xl mb-5">Match Draw!</h1>
                  <h2 className="text-2xl">
                     Take a hot coffee ☕ and try again !
                  </h2>
                  <button
                     className="p-3 px-5 text-lg uppercase tracking-widest rounded-md mt-16 bg-pink-700 shadow-2xl"
                     onClick={resetGame}
                  >
                     Play Again
                  </button>
               </div>
            </div>
         ) : (
            ""
         )}
      </>
   );
};

export default Game;
