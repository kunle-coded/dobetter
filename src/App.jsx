import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './ui/Home';
import TodoItem from './ui/TodoItem';
import TodoList from './ui/TodoList';
import AppLayout from './ui/AppLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<TodoList />} />
          <Route path="todo/:id" element={<TodoItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
