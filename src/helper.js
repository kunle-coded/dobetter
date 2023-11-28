function updateTodo(todos, updatedTodo) {
  return todos.map((item) => {
    if (item.id === updatedTodo.id) {
      // If the IDs match, update the properties
      return {
        ...item,
        title: updatedTodo.title,
        body: updatedTodo.body,
      };
    }
    // If the IDs don't match, return the original item
    return item;
  });
}

function markComplete(todos, markedTodo) {
  return todos.map((item) => {
    if (item.id === markedTodo.id) {
      // If the IDs match, update the properties
      return {
        ...item,
        status: 'completed',
      };
    }
    // If the IDs don't match, return the original item
    return item;
  });
}

// function deleteItem(todos, markedTodo) {
//   return todos.filter((item) => {
//     if (item.id === markedTodo.id) {
//       // If the IDs match, update the properties
//       return {
//         ...item,
//         status: 'completed',
//       };
//     }
//     // If the IDs don't match, return the original item
//     return item;
//   });
// }

export { updateTodo, markComplete };
