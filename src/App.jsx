import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './ui/Home';
import TodoItem from './ui/TodoItem';
import AppLayout from './ui/AppLayout';
import TodoOverview from './ui/TodoOverview';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<TodoOverview />} />
          <Route path="todo/:id" element={<TodoItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
