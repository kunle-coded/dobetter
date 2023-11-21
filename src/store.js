import { combineReducers, createStore } from 'redux';
import userReducer from './todos/userSlice';
import todoReducer from './todos/todoSlice';
import formReducer from './todos/formSlice';

const rootReducers = combineReducers({
  user: userReducer,
  todos: todoReducer,
  forms: formReducer,
});

const store = createStore(rootReducers);

export default store;
