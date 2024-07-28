import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1.3 }}
      className="max-w-[90%] mx-auto" // Added max-w-[80%] and mx-auto
    >
      <main className="padding h">
       <div className="flex-col mx-auto">
        <h2 className="font-bold text-2xl my-4 dark:text-white">404 Error</h2>
        <div>
          <h1 className="font-bold text-3xl text-center dark:text-white"> Page not found</h1>
          <p className="text-gray-400 my-5 dark:text-white">The page you are looking for does not exist. You may have mistyped the address or the page may have been moved</p>
        </div>
        <NavLink to='/' className="bg-primary p-1 hover:shadow-md hover:shadow-black text-xl rounded text-white">Back to Home</NavLink>
       </div>
      </main>
    </motion.div>
  );
}

export default NotFound 