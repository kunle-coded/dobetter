const initialState = {
  name: '',
  todo: {
    id: 0,
    title: '',
    body: '',
    createdAt: new Date().toISOString(),
    status: 'in progress',
  },
  showForm: false,
  id: 0,
};

export default function formReducer(state = initialState, action) {
  switch (action.type) {
    case 'form/addName':
      return { ...state, name: action.payload };
    case 'form/showForm':
      return { ...state, showForm: true, id: (state.id += 1) };
    case 'form/hideForm':
      return { ...state, showForm: false };
    case 'form/addTitle':
      return {
        ...state,
        todo: {
          ...state.todo,
          title: action.payload,
        },
      };
    case 'form/addBody':
      return {
        ...state,
        todo: {
          ...state.todo,
          body: action.payload,
        },
      };
    default:
      return state;
  }
}

export function addName(name) {
  return { type: 'form/addName', payload: name };
}
export function openForm() {
  return { type: 'form/showForm' };
}
export function closeForm() {
  return { type: 'form/hideForm' };
}
export function addTitle(title) {
  return { type: 'form/addTitle', payload: title };
}
export function addBody(body) {
  return { type: 'form/addBody', payload: body };
}
export function clearInputs() {
  return { type: 'form/clearInputs' };
}
export function addTodo() {
  const date = new Date().toISOString();
  return { type: 'form/addTodo', payload: date };
}
