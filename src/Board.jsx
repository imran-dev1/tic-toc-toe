import useSound from "use-sound";
import Square from "./Square";
import noteHigh from "./assets/sound/note-high.mp3";
import noteLow from "./assets/sound/note-low.mp3";
import gameOver from "./assets/sound/game-over.mp3";
import gameTie from "./assets/sound/game-over-tie.mp3";
import cheeringSound from "./assets/sound/crowd-cheering.mp3";

const Board = ({
   squares,
   setSquares,
   isXNext,
   setIsXNext,
   winner,
   status,
   winningLines,
}) => {
   const [playNoteHigh] = useSound(noteHigh);
   const [playNoteLow] = useSound(noteLow);
   const [playGameOver] = useSound(gameOver);
   const [playGameTie] = useSound(gameTie);
   const [playCheeringSound] = useSound(cheeringSound);

   //Handle Square Click
   const handleClick = (index) => {
      if (squares[index] || winner) {
         return;
      }
      const copySquares = squares.slice();
      if (isXNext) {
         copySquares[index] = "X";
         playNoteHigh();
      } else {
         copySquares[index] = "O";
         playNoteLow();
      }

      setIsXNext(!isXNext);
      setSquares(copySquares);
   };

   const isSquareWinner = (index) => {
      return winningLines && winningLines.includes(index);
   };

   if (winner) {
      playGameOver()
      playCheeringSound();
   }
   if (squares.every((square) => square !== null) && !winningLines) {
      playGameTie()
   }

   return (
      <>
         <h3 className="te                m   e     x ''';;[m,,m   v vc        t-3xl mb-5">{status}</h3>
         <div className="flex gap-4 flex-col">
            <div className="grid  grid-rows-3 grid-cols-3 gap-4">
               {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                  <Square
                     key={index}
                     handleClick={handleClick}
                     index={index.toString()}
                     squares={squares}
                     winner={winner}
                     isSquareWinner={isSquareWinner(index)}
                  />
               ))}
            </div>
         </div>
      </>
   );
};

export default Board;
