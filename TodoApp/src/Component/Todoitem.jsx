import { useContext, useRef } from "react";
import style from "./Todoitem.module.css";
import { todoItemContext } from "../store/TodoContext";

function Todoitem() {
  const { HandleItemAdd } = useContext(todoItemContext);
  const todoText = useRef();
  const todoData = useRef();

  const handleData = () => {
    const id = todoText.current.value;
    const todotext = todoText.current.value;
    const tododata = todoData.current.value;
    HandleItemAdd(id, todotext, tododata);
    todoText.current.value = "";
    todoData.current.value = "";
  };
  return (
    <div className={style.container}>
      <div className="grid grid-cols-3 ">
        <div>
          <input
            type="text"
            placeholder="Ente the Task "
            required
            className={`p-0.5 rounded-md ${style.bodesign}`}
            ref={todoText}
          />
        </div>
        <div>
          <input
            className={`p-0.5 rounded-md ${style.bodesign}`}
            type="date"
            ref={todoData}
          />
        </div>
        <button
          className="p-2  w-32 bg-green-600 text-white rounded-md border-blue-700"
          onClick={handleData}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Todoitem;
