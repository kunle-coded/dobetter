function Button({ children, type = 'medium', disabled, onClick }) {
  const width = type === 'large' ? 'w-96' : type === 'medium' ? 'w-52' : 'w-20';
  return (
    <button
      disabled={disabled}
      className={`sm:h-12  sm:${width} h-10 bg-indigo-500 px-3 text-stone-50 hover:bg-indigo-400 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-indigo-400`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
