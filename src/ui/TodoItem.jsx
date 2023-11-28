import { useDispatch, useSelector } from 'react-redux';
import { completeTodo, deleteTodo, editTodo } from '../todos/todoSlice';
import { openForm } from '../todos/formSlice';
import AddTodo from './AddTodo';
import { useState } from 'react';
import EditTodo from './EditTodo';

function TodoItem({ todo }) {
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  const date = todo.createdAt.split('T')[0];

  function handleComplete() {
    if (todo.status === 'completed') return;
    dispatch(completeTodo(todo));
  }
  function handleEdit() {
    if (todo.status === 'completed') return;
    setIsEdit(true);
  }

  function handleDelete() {
    dispatch(deleteTodo(todo));
  }

  return (
    <li className="flex w-full items-center py-8">
      <div className="grid w-full grid-cols-[auto_1fr_auto] ">
        <div className="mr-8 pt-2">
          <div
            className={`flex h-6 w-6 items-center justify-center rounded-full border ${
              todo.status === 'completed'
                ? 'border-indigo-500 bg-indigo-500'
                : 'border-stone-500'
            }`}
          >
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3334 4.5L6.00002 11.8333L2.66669 8.5"
                stroke={todo.status === 'completed' ? '#fafaf9' : '#78716C'}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="mr-5">
          <div className="font-semibold capitalize">{todo.title}</div>
          <div className="">{todo.body}</div>
          {/* <div className="">
            <p>Added: {date}</p>
            <p>status: completed</p>
          </div> */}
        </div>

        <div className="flex gap-8">
          <div
            className={`${todo.status === 'completed' ? '' : 'cursor-pointer'}`}
            onClick={handleComplete}
          >
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 6.5L9 17.5L4 12.5"
                stroke="#78716C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div
            className={`${todo.status === 'completed' ? '' : 'cursor-pointer'}`}
            onClick={handleEdit}
          >
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 4.5H4C3.46957 4.5 2.96086 4.71071 2.58579 5.08579C2.21071 5.46086 2 5.96957 2 6.5V20.5C2 21.0304 2.21071 21.5391 2.58579 21.9142C2.96086 22.2893 3.46957 22.5 4 22.5H18C18.5304 22.5 19.0391 22.2893 19.4142 21.9142C19.7893 21.5391 20 21.0304 20 20.5V13.5"
                stroke="#78716C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.5 2.99998C18.8978 2.60216 19.4374 2.37866 20 2.37866C20.5626 2.37866 21.1022 2.60216 21.5 2.99998C21.8978 3.39781 22.1213 3.93737 22.1213 4.49998C22.1213 5.06259 21.8978 5.60216 21.5 5.99998L12 15.5L8 16.5L9 12.5L18.5 2.99998Z"
                stroke="#78716C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="cursor-pointer" onClick={handleDelete}>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 6.5H5H21"
                stroke="#78716C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 6.5V20.5C19 21.0304 18.7893 21.5391 18.4142 21.9142C18.0391 22.2893 17.5304 22.5 17 22.5H7C6.46957 22.5 5.96086 22.2893 5.58579 21.9142C5.21071 21.5391 5 21.0304 5 20.5V6.5M8 6.5V4.5C8 3.96957 8.21071 3.46086 8.58579 3.08579C8.96086 2.71071 9.46957 2.5 10 2.5H14C14.5304 2.5 15.0391 2.71071 15.4142 3.08579C15.7893 3.46086 16 3.96957 16 4.5V6.5"
                stroke="#78716C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 11.5V17.5"
                stroke="#78716C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 11.5V17.5"
                stroke="#78716C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      {isEdit && <EditTodo todo={todo} closeForm={setIsEdit} />}
    </li>
  );
}

export default TodoItem;
