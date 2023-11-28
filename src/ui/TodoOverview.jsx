import { useDispatch, useSelector } from 'react-redux';
import AddTodo from './AddTodo';
import { openForm } from '../todos/formSlice';
import TodoItem from './TodoItem';
import { useEffect, useState } from 'react';

function TodoOverview() {
  const [completedTask, setCompletedTask] = useState(0);
  const [todoTasks, setTodoTasks] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const dispatch = useDispatch();
  const { todos, completed } = useSelector((store) => store.todos);
  const { user } = useSelector((store) => store.user);

  const reversedTodos = [...todos].reverse();

  useEffect(() => {
    const countComplete = [];
    const countInComplete = [];
    todos.forEach((item) => {
      if (item.status === 'completed') {
        countComplete.push(item);
      } else {
        countInComplete.push(item);
      }
    });
    setCompletedTask(countComplete.length);
    setTodoTasks(countInComplete.length);
  }, [completedTask, todos]);

  useEffect(() => {
    const percent = Math.floor((completedTask / todos.length) * 100);

    if (todos.length >= 1) {
      setPercentage(percent);
    }
  }, [completedTask, todos.length]);

  const progressStyle = {
    width: percentage > 1 ? `${percentage}%` : '0',
  };

  console.log(todos);

  return (
    <div className=" flex max-w-full flex-row items-center">
      <div className="flex w-full ">
        <div className="flex w-1/3 flex-col items-center gap-5 pr-10">
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-stone-200 text-5xl font-bold uppercase text-indigo-500">
            {user.name.charAt(0)}
          </div>
          <p>{user.name}</p>

          <div className="mt-5 flex w-full flex-col items-end gap-0">
            <p className="text-sm text-stone-500">{`${completedTask}/${todos.length}`}</p>
            <div className="h-3 w-full rounded-full bg-stone-200">
              <div
                className="h-full rounded-full bg-indigo-500"
                style={progressStyle}
              ></div>
            </div>
          </div>

          <div className="mt-2  flex w-full justify-between">
            <div className="flex flex-col items-center">
              <h1 className="mb-2 text-lg font-bold">{completedTask}</h1>

              <div className="flex flex-col items-center text-stone-500">
                <h1 className="text-sm font-semibold">Completed</h1>
                <h1 className="text-xs">tasks</h1>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="mb-2 text-lg font-bold">{todoTasks}</h1>

              <div className="flex flex-col items-center text-stone-500">
                <h1 className="text-sm font-semibold">To do</h1>
                <h1 className="text-xs">tasks</h1>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="mb-2 text-lg font-bold">{completed}</h1>

              <div className="flex flex-col items-center text-stone-500">
                <h1 className="text-sm font-semibold">All</h1>
                <h1 className="text-xs">completed</h1>
              </div>
            </div>
          </div>
        </div>

        <ul className="ml-5 flex w-full flex-col items-center justify-center divide-y divide-stone-200 border-b border-t">
          {reversedTodos.map((todo, index) => (
            <TodoItem todo={todo} key={todo.id} />
          ))}

          {!todos.length && (
            <div className="text-3xl">Nothing to do yet. Add a task!</div>
          )}
        </ul>
      </div>

      <div
        className="absolute bottom-16 right-8 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-indigo-500 text-3xl font-semibold text-stone-50"
        onClick={() => dispatch(openForm())}
      >
        +
      </div>
    </div>
  );
}

export default TodoOverview;
