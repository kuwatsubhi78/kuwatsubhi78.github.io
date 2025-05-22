import { NavLink, useLocation } from 'react-router-dom';
// import Thememode from './thememode';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Profile', to: '/' },
  { name: 'Projects', to: '/projects' },
  { name: 'Contacts', to: '/contacts' },
];
const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div className="navbar bg-base-300 sticky top-0 z-10">
      <div className="flex-1">
        <div className="btn btn-ghost text-xl text-white hover:text-transparent hover:bg-gradient-to-r from-red-500 via-blue-500 to-green-500 bg-clip-text transition-all duration-700 bg-[length:300%_150%] hover:animate-gradient">
          kuwatsubhi
        </div>
      </div>
      {/* <div className="flex-none">
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
      </div> */}
      <div className="flex space-x-8 relative">
        {navItems.map(({ name, to }) => (
          <div key={to} className="relative">
            <NavLink
              to={to}
              className="px-3 py-1 text-white hover:text-blue-600"
            >
              {name}
            </NavLink>
            {pathname === to && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 right-0 h-1 rounded-full
             bg-gradient-to-r from-red-500 via-blue-500 to-green-500
             animate-gradient [background-size:300%_150%]"
              />
            )}
          </div>
        ))}
      </div>
      {/* <Thememode /> */}
    </div>
  );
};

export default Navbar;
