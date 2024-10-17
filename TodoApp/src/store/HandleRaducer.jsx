const HandleRaducer = (currentitem, action) => {
  if (action.type == "ADD") {
    const todoText = action.paylod.todoText;
    const todoData = action.paylod.todoData;
    const id = action.paylod.id;
    return [...currentitem, { id, todoText, todoData }];
  } else if (action.type == "DELETE") {
    const id = action.paylod.id;
    return currentitem.filter((item) => item.id !== id);
  } else {
    return currentitem;
  }
};

export default HandleRaducer;
