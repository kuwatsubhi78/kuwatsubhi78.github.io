// import Thememode from './thememode';
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Profile', to: '/' },
  { name: 'Projects', to: '/projects' },
  { name: 'Contacts', to: '/contacts' },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar utama */}
      <div className="navbar bg-base-300 sticky top-0 z-10 p-4 flex items-center justify-between">
        <div className="flex-1">
          <div
            className="btn btn-ghost text-xl text-white hover:text-transparent
             hover:bg-gradient-to-r from-red-500 via-blue-500 to-green-500
             bg-clip-text transition-all duration-700 bg-[length:300%_150%] hover:animate-gradient"
          >
            kuwatsubhi
          </div>
        </div>

        {/* Hamburger button mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-white p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Desktop nav */}
        <div className="hidden sm:flex flex-row space-x-8 relative">
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
                  style={{ bottom: '-4px' }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Menu mobile di luar navbar utama */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="sm:hidden bg-base-300 p-4 space-y-4"
          >
            {navItems.map(({ name, to }) => (
              <div key={to} className="relative">
                <div className="text-sm text-gray-300 mb-1"></div>
                <NavLink
                  to={to}
                  className="block px-3 py-1 text-white hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </NavLink>

                {pathname === to && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-full
                      bg-gradient-to-r from-red-500 via-blue-500 to-green-500
                      animate-gradient [background-size:300%_150%]"
                    style={{ bottom: '-4px' }}
                  />
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

{
  /* <Thememode /> */
}
{
  /* <div className="flex-none">
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
      </div> */
}
