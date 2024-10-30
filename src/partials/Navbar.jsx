import { NavLink } from 'react-router-dom';
import Thememode from './thememode';

const Navbar = () => {
  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          <span>
            <img src="foto.jpg" alt="" srcset="" className="w-5 rounded-full" />
          </span>
          kuwatsubhi
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to={'/'} className="rounded-full">
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to={'/projects'} className="rounded-full">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to={'/contacts'} className="rounded-full">
              Contacts
            </NavLink>
          </li>
        </ul>
      </div>
      <Thememode />
    </div>
  );
};

export default Navbar;
