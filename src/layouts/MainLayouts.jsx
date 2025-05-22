import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../partials/Navbar';
import { AnimatePresence, motion } from 'framer-motion';

const MainLayouts = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <div className="min-h-screen">
        <Navbar />
        <motion.div
          className="container max-w-5xl p-10 space-y-10"
          key={location.pathname}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <Outlet />
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default MainLayouts;
