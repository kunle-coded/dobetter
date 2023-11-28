import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/Button';
import Input from '../components/Input';
import { closeForm } from '../todos/formSlice';
import { createTodo } from '../todos/todoSlice';
import { useState } from 'react';

function AddTodo() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useDispatch();
  const { id } = useSelector((store) => store.forms);
  // const { user } = useSelector((store) => store.user)

  function handleAddTodo(e) {
    e.preventDefault();
    if (!(title && body)) return;

    const todoAdd = {
      id,
      title,
      body,
      createdAt: new Date().toISOString(),
      status: 'in progress',
    };

    dispatch(createTodo(todoAdd));
    setTitle('');
    setBody('');
    dispatch(closeForm());
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <form className="relative flex w-1/2 flex-col items-center gap-5 bg-stone-50 px-6 py-12">
        <div
          className="absolute right-6 top-3 cursor-pointer text-5xl"
          onClick={() => dispatch(closeForm())}
        >
          &times;
        </div>
        <div className="mt-20 flex w-full flex-row items-center gap-2">
          <p className="w-[20%]">Title</p>
          <Input value={title} placeholder="Title..." onChange={setTitle} />
        </div>
        <div className="mb-10 flex w-full flex-row  gap-2">
          <p className="w-[20%]">Description</p>

          <textarea
            value={body}
            name="desc"
            rows="5"
            placeholder="Description..."
            className="grow bg-indigo-100 px-2 focus:outline-none focus:ring focus:ring-indigo-100 focus:ring-offset-2 sm:w-96"
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <Button type="medium" onClick={handleAddTodo}>
          Add task
        </Button>
      </form>
    </div>
  );
}

export default AddTodo;
