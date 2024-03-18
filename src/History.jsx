import React from "react";

const History = ({ history, moveTo }) => {
   const moves = history.map((squares, move) => {
      if (move > 0) {
         return (
            <li
               className="py-1 text-center px-10 text-lg mb-2 bg-[#be185d] hover:bg-[#92385d] rounded cursor-pointer"
               key={move}
               onClick={() => moveTo(move)}
            >
               Back To Move #{move}
            </li>
         );
      }
   });
   return (
      <div>
         <ol>{moves}</ol>
      </div>
   );
};

export default History;
