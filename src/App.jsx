import { useState } from "react";
import Board from "./Board";
import History from "./History";

const Game = () => {
   const [squares, setSquares] = useState(Array(9).fill(null));
   const [isXNext, setIsXNext] = useState(true);
   return (
      <div className="h-screen flex justify-center items-center">
         <div className=" bg-black/35 backdrop-blur-md p-20  flex  gap-5 border border-purple-900 border-4 rounded-lg text-white">
            <div className="flex flex-col gap-4">
               <Board
                  squares={squares}
                  setSquares={setSquares}
                  isXNext={isXNext}
                  setIsXNext={setIsXNext}
               />
            </div>
            <div>
               <History />
            </div>
         </div>
      </div>
   );
};

export default Game;
