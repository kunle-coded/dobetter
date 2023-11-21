function Input({ placeholder, value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="h-10 bg-indigo-100 px-2 focus:outline-none focus:ring focus:ring-indigo-100 focus:ring-offset-2 sm:w-96"
    />
  );
}

export default Input;
