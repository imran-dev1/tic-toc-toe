const Square = ({ handleClick,index,squares }) => {
   return (
      <div>
         <button
            className="h-20 w-20 shadow-sm border border-[#64489c] p-5 rounded-md text-2xl"
            onClick={()=>handleClick(index)}
         >{ squares[index]}</button>
      </div>
   );
};

export default Square;
