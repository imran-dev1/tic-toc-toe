import xIcon from "./assets/images/x-icon.png";
import oIcon from "./assets/images/0-icon.png";

const Square = ({ handleClick, index, squares, winner, isSquareWinner }) => {
   return (
      <button
         className={`${
            winner && isSquareWinner ? "winner" : ""
         } h-20 w-20 md:h-28 md:w-28 2xl:h-40 2xl:w-40 shadow-s bg-[#39167f] p-4 md:p-7 rounded-md text-2xl square`}
         onClick={() => handleClick(index)}
      >
         {squares[index] === "X" ? (
            <img src={xIcon}  alt="X" className="h-full w-full" />
         ) : squares[index] === "O" ? (
            <img src={oIcon}  alt="O" className="h-full w-full" />
         ) : null}
      </button>
   );
};

export default Square;
