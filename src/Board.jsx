import Square from "./Square";

const Board = () => {
   return (
      <>
         <h3>Winner: </h3>
         <div className="flex gap-4">
            <Square />
            <Square />
            <Square />
         </div>
         <div className="flex gap-4">
            <Square />
            <Square />
            <Square />
         </div>
         <div className="flex gap-4">
            <Square />
            <Square />
            <Square />
         </div>
      </>
   );
};

export default Board;
