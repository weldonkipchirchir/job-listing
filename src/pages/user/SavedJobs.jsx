/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { jobs } from "../../utils/links";
import { LuShoppingBag } from "react-icons/lu";
import { NavLink } from "react-router-dom";

function SavedJob() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1.3 }}
      className="max-w-[80%] mx-auto" // Added max-w-[80%] and mx-auto
    >
      <main className="padding h">
        <div className="mx-auto flex justify-center w-full max-sm:w-full">
          <div className="w-full">
            <h2 className="font-bold text-4xl my-7 max-sm:text-3xl max-xs:text-2xl">
              Saved Jobs
            </h2>
            <div className="mt-6">
              <ul className="">
                {jobs.map((job, index) => (
                  <li
                    key={index}
                    className="flex justify-between my-8 max-sm:items-start max-sm:flex-col"
                  >
                    <NavLink to="/job-details">
                      <div className="flex items-center gap-4">
                        <LuShoppingBag className="w-[52px] h-[52px] text-primary bg-neutral-200 p-2 rounded" />{" "}
                        <div className=" flex-col my-3">
                          <p className="font-bold text-xl">{job.jobName}</p>
                          <div className="flex gap-2 mt-2">
                            <p className="text-gray-500">{job.type},</p>
                            <p className="text-gray-500">{job.location}</p>
                          </div>
                        </div>
                      </div>
                    </NavLink>
                    <div className="flex items-center">
                     <button className="bg-gray-100 p-2 font-bold hover:bg-primary hover:text-white rounded-md active:border-2 active:border-primary">Remove</button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
}

export default SavedJob;
