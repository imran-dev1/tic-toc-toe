import Square from "./Square";

const Board = ({ squares, setSquares, isXNext, setIsXNext }) => {

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

   //Handle Square Click
   const handleClick = (index) => {
      if (squares[index] || winner) {
         return;
      }
      const copySquares = squares.slice();
      if (isXNext) {
         copySquares[index] = "X";
      } else {
         copySquares[index] = "O";
      }
      setIsXNext(!isXNext);
      setSquares(copySquares);
   };

   return (
      <>
         <h3 className="text-3xl">{status}</h3>
         <div className="flex gap-4">
            <Square handleClick={handleClick} index="0" squares={squares} />
            <Square handleClick={handleClick} index="1" squares={squares} />
            <Square handleClick={handleClick} index="2" squares={squares} />
         </div>
         <div className="flex gap-4">
            <Square handleClick={handleClick} index="3" squares={squares} />
            <Square handleClick={handleClick} index="4" squares={squares} />
            <Square handleClick={handleClick} index="5" squares={squares} />
         </div>
         <div className="flex gap-4">
            <Square handleClick={handleClick} index="6" squares={squares} />
            <Square handleClick={handleClick} index="7" squares={squares} />
            <Square handleClick={handleClick} index="8" squares={squares} />
         </div>
      </>
   );
};

export default Board;
