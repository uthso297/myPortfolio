import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="bg-[#111723] text-white min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <motion.h1
        className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f4278d] to-[#8260b4]"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        404
      </motion.h1>

      <motion.p
        className="text-xl mt-4 mb-8 text-gray-400"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Oops! The page you’re looking for doesn’t exist.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f4278d] to-[#8260b4] text-white px-6 py-3 rounded-full text-lg hover:opacity-90 transition-opacity duration-300"
        >
          <FaArrowLeft /> Go Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
