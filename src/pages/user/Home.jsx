/* eslint-disable react/no-unescaped-entities */
import home from "../../assets/cover2.jpeg";
import { useId } from "react";
import { CiSearch } from "react-icons/ci";
import PopularSearch from "../../components/user/PopularSearch";
import { motion } from "framer-motion";

function Home() {
  const id = useId();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1.3 }}
      className="max-w-[90%] mx-auto min-h-[80vh]" // Added max-w-[80%] and mx-auto
    >
      <main className="padding min-md:h">
        <div className="relative flex justify-center">
          <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px]">
            <img
              src={home}
              alt="joblist"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute left-0 flex flex-col items-center justify-center w-full h-full top-10 sm:top-20">
              <p className="px-2 mb-2 text-lg font-bold text-white text-center sm:text-xl md:text-xl lg:text-4xl sm:mb-3 md:mb-4 sm:px-3 md:px-4">
                Find the job that's right for {" "}
                <span className="transition-colors duration-300 transform text-primary hover:scale-110">
               for you
                </span>
              </p>
              <label
                htmlFor={id}
                className="relative w-full text-gray-200 max-w-xs px-2 mb-4 font-bold text-center sm:px-3 md:px-4 sm:max-w-sm md:max-w-md lg:max-w-lg text-2xl"
              >
                Search Jobs
                <div className="relative w-full">
                  <CiSearch className="absolute w-6 h-6 text-black transform -translate-y-1/2 left-2 top-1/2" />
                  <input
                    type="search"
                    placeholder="Search for jobs"
                    id={id}
                    className="w-full py-2 pl-10 pr-4 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
        <PopularSearch />
      </main>
    </motion.div>
  );
}

export default Home;
