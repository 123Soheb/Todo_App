import { useState } from "react";
import Displayitem from "./Component/Displayitem";
import TodoHeading from "./Component/TodoHeading";
import Todoitem from "./Component/Todoitem";
import { ItemProviderAPI } from "./store/TodoContext";

function App() {
  return (
    <>
      <ItemProviderAPI>
        <TodoHeading />
        <Todoitem />
        <Displayitem />
      </ItemProviderAPI>
    </>
  );
}

export default App;
