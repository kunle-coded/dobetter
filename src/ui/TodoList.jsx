function TodoList() {
  return (
    <div className="relative flex max-w-full flex-col items-center justify-center bg-yellow-200">
      <h1>This is the Todo list</h1>

      <div className=""></div>

      <div>
        <div className="">Total tasks: 234+</div>
        <div className="">Completed: 24</div>
        <div className="">In progress: 13</div>
      </div>

      <div className="absolute bottom-0 right-0 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-indigo-500 text-3xl font-semibold text-stone-50">
        +
      </div>
    </div>
  );
}

export default TodoList;
