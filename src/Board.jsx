import Square from "./Square";

const Board = ({ squares, setSquares, isXNext, setIsXNext,winner,status }) => {

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
