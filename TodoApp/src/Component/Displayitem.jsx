import React, { useContext, useEffect } from "react";
import Itemdisplay from "./Itemdisplay";
import { todoItemContext } from "../store/TodoContext";

function Displayitem() {
  const { currentitem, deleteTodoItem } = useContext(todoItemContext);
  const { HandleItemAdd } = useContext(todoItemContext);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((items) => {
        items.map((item) => {
          HandleItemAdd(item.id, item.task, item.date);
        });
      })
      .finally(() => {
        console.log("hello");
      });
  }, []);

  if (currentitem == 0) {
    return <div className="text-center font-extrabold"> This is Empty</div>;
  }
  return (
    <div>
      {currentitem.map((item) => (
        <Itemdisplay
          key={item.id}
          id={item.id}
          item={item.todoText}
          item1={item.todoData}
          deleteTodoItem={deleteTodoItem}
        />
      ))}
    </div>
  );
}

export default Displayitem;
