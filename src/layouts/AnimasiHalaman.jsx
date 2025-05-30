/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

export default function AnimatedPage({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ minHeight: '100vh' }}
    >
      {children}
    </motion.div>
  );
}
