import xIcon from "./assets/images/x-icon.png";
import oIcon from "./assets/images/0-icon.png";

const Square = ({ handleClick, index, squares, winner, isSquareWinner }) => {
   return (
      <button
         className={`${
            winner && isSquareWinner ? "winner" : ""
         } h-16 w-16 md:h-48 md:w-48 shadow-s bg-[#39167f] p-5 rounded-md text-2xl square`}
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
