/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { LuShoppingBag } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { deleteBookmark, getBookmarks } from "../../hooks/api";

function SavedJob() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [info, setInfo] = useState("");

  useEffect(() => {
    async function fetchJobs() {
      try {
        setLoading(true);
        setInfo("");
        setError(null);
        const fetchedJobs = await getBookmarks();
        setJobs(fetchedJobs);
      } catch (error) {
        setError("Error fetching jobs. Please try again.");
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  async function handleDelete(id) {
    try {
      const res = await deleteBookmark(id);
      setInfo(res.message || "Bookmark deleted successfully");
      const updatedJobs = await getBookmarks();
      setJobs(updatedJobs);
    } catch (error) {
      setError("Error deleting bookmark. Please try again.");
      console.log(error);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1.3 }}
      className="max-w-[80%] mx-auto min-h-[80vh]"
    >
      {!jobs || jobs.length === 0 ? (
        <h1 className="text-2xl text-center dark:text-white mt-8">No bookmarks</h1>
      ) : (
        <main className="padding h">
          <div className="mx-auto flex justify-center w-full max-sm:w-full">
            <div className="w-full">
              <div className="mt-6">
                {loading ? (
                  <h1 className='dark:text-white text-center mt-8 text-2xl'>Loading...</h1>
                ) : error ? (
                  <h1 className="text-2xl text-center text-red-500">{error}</h1>
                ) : jobs ? (
                  <>
                    {" "}
                    <h2 className="font-bold text-4xl my-7 max-sm:text-3xl max-xs:text-2xl dark:text-white">
                      Bookmarks
                    </h2>
                    <ul>
                      {jobs.map((job, index) => (
                        <li
                          key={index}
                          className="flex justify-between my-8 max-sm:items-start max-sm:flex-col"
                        >
                          <NavLink to="/job-details">
                            <div className="flex items-center gap-4">
                              <LuShoppingBag className="w-[52px] h-[52px] text-primary bg-neutral-200 p-2 rounded dark:bg-gray-800" />{" "}
                              <div className="flex-col my-3">
                                <p className="font-bold text-xl dark:text-white">
                                  {job.jobName}
                                </p>
                                <div className="flex gap-2 mt-2">
                                  <p className="text-gray-500 dark:text-gray-100">
                                    {job.type},
                                  </p>
                                  <p className="text-gray-500 dark:text-gray-100">
                                    {job.location}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </NavLink>
                          <div className="flex items-center">
                            <button
                              onClick={() => handleDelete(job._id)}
                              className="bg-gray-100 p-2 font-bold hover:bg-primary hover:text-white rounded-md active:border-2 active:border-primary"
                            >
                              Remove
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <h1 className="text-2xl text-center dark:text-white">
                    No bookmarks
                  </h1>
                )}
                {info && (
                  <div className="text-center mt-4 text-green-500">{info}</div>
                )}
                {error && (
                  <div className="text-center mt-4 text-red-500">{error}</div>
                )}
              </div>
            </div>
          </div>
        </main>
      )}
    </motion.div>
  );
}

export default SavedJob;
