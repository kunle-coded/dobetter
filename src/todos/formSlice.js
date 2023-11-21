const initialState = {
  name: "",
  todo: {
    title: "",
    body: "",
  },
};

export default function formReducer(state = initialState, action) {
  switch (action.type) {
    case "form/addName":
      return { ...state, name: action.payload };
    case "form/deleteName":
      return { ...state, name: "" };
    default:
      return state;
  }
}

export function addName(name) {
  return { type: "form/addName", payload: name };
}
export function deleteName(name) {
  return { type: "form/deleteName" };
}
