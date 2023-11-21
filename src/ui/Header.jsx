import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="flex h-16 items-center justify-between bg-indigo-500 px-8 text-stone-50">
      <Link to="/">
        <h1 className="text-xl font-bold sm:text-3xl">DoBetter</h1>
      </Link>

      <p>Welcome, {user.name}</p>
    </div>
  );
}

export default Header;
