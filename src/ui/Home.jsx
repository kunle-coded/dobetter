import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/Button';
import Input from '../components/Input';
import { createUser } from '../todos/userSlice';
import { addName } from '../todos/formSlice';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { name } = useSelector((store) => store.forms);
  const { user } = useSelector((store) => store.user);

  function handleInput(e) {
    dispatch(addName(e));
  }

  function handleClick(e) {
    e.preventDefault();

    if ((!name || name.length < 2) && !user.name) return;

    // if (user.name) {
    //   navigate('/app');
    //   return;
    // }
    dispatch(createUser(name));
    navigate('/app');
  }

  return (
    <div className="m-auto flex h-screen max-w-2xl flex-col items-center justify-center sm:max-w-6xl">
      <div className="mb-10 w-full px-3 text-center sm:mb-20">
        <h1 className="mb-5 text-4xl font-bold sm:text-7xl">DoBetter.</h1>
        <h3 className="text-2xl font-semibold text-indigo-500 sm:text-4xl">
          Organize your task in a better way!
        </h3>
      </div>

      <form className="flex flex-col items-center space-y-5 sm:space-y-7">
        <h3 className="text-xl font-medium sm:text-2xl">
          Welcome, {user.name === '' ? 'human' : user.name}!
        </h3>
        {!user.name && (
          <Input
            value={name}
            placeholder="Enter your name..."
            onChange={handleInput}
          />
        )}
        <Button type="large" onClick={handleClick}>
          Start adding tasks
        </Button>
      </form>
    </div>
  );
}

export default Home;
