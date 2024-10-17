import React from "react";
import style from "./Todoitem.module.css";

function Itemdisplay({ id, item, item1, deleteTodoItem }) {
  const handledelete = () => {
    deleteTodoItem(id);
  };
  return (
    <div className={style.container}>
      <div className="grid grid-cols-3  ">
        <div className=" ">{item}</div>
        <div className="">{item1}</div>
        <button
          className="p-2  w-32 bg-red-600 text-white rounded-md border-blue-700"
          onClick={handledelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Itemdisplay;
