const initialState = {
  user: {
    id: 0,
    name: "",
    todos: 0,
  },
  isLoading: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "user/create":
      return {
        ...state,
        user: { name: action.payload, id: (state.user.id += 1) },
      };
    case "user/creatingUser":
      return { ...state, isLoading: true };
    default:
      return state;
  }
}

export function createUser(name) {
  return { type: "user/create", payload: name };
}

export function setLoading() {
  return { type: "user/creatingUser" };
}
