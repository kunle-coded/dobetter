import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AddTodo from './AddTodo';
import { useDispatch, useSelector } from 'react-redux';

function AppLayout() {
  const dispatch = useDispatch();
  const { showForm } = useSelector((store) => store.forms);

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <div className="no-scrollbar overflow-scroll">
        <main className="mx-auto max-w-full px-8 py-8">
          <Outlet />
          {showForm && <AddTodo type="task" />}
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default AppLayout;
