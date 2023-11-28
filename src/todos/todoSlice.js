import { markComplete, updateTodo } from '../helper';

const initialState = {
  todos: [],
  completed: 0,
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'todo/createTodo':
      return { ...state, todos: [...state.todos, action.payload] };

    case 'todo/editTodo':
      const updated = updateTodo(state.todos, action.payload);
      return { ...state, todos: updated };
    case 'todo/completeTodo':
      const completed = markComplete(state.todos, action.payload);
      return { ...state, todos: completed, completed: state.completed + 1 };
    case 'todo/deleteTodo':
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
}

export function createTodo(todo) {
  return { type: 'todo/createTodo', payload: todo };
}

export function editTodo(todo) {
  return { type: 'todo/editTodo', payload: todo };
}

export function completeTodo(todo) {
  return { type: 'todo/completeTodo', payload: todo };
}
export function deleteTodo(todo) {
  return { type: 'todo/deleteTodo', payload: todo };
}
