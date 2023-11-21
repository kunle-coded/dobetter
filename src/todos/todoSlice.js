const initialState = {
  todos: [],
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "todo/add":
      return { ...state, todos: action.payload };
    default:
      return state;
  }
}
