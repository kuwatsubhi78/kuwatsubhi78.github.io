import { Outlet } from 'react-router-dom';
import Navbar from '../partials/Navbar';

const MainLayouts = () => {
  return (
    <div>
      <Navbar />
      <div className="container max-w-5xl p-10 space-y-10">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayouts;
