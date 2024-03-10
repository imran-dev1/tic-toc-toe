import Board from "./Board";
import History from "./History";

const Game = () => {
   return (
      <div className="h-screen flex justify-center items-center">
         <h2></h2>
         <div className=" p-20 shadow-lg flex  gap-5">
            <div className="flex flex-col gap-4">
               <Board />
            </div>
            <div>
               <History />
            </div>
         </div>
      </div>
   );
};

export default Game;
