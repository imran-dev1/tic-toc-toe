import useSound from "use-sound";
import Square from "./Square";
import tapSound from "./assets/sound/tap-notification.mp3";
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
   const [playTapSound] = useSound(tapSound);
   const [playCheeringSound] = useSound(cheeringSound);

   //Handle Square Click
   const handleClick = (index) => {
      if (squares[index] || winner) {
         return;
      }
      const copySquares = squares.slice();
      if (isXNext) {
         copySquares[index] = "X";
         playTapSound();
      } else {
         copySquares[index] = "O";
         playTapSound();
      }

      setIsXNext(!isXNext);
      setSquares(copySquares);
   };

   const isSquareWinner = (index) => {
      return winningLines && winningLines.includes(index);
   };

   if (winner) {
      playCheeringSound();
   }

   return (
      <>
         <h3 className="text-3xl">{status}</h3>
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
