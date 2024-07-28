import { useState, useEffect } from "react";
import home from "../../assets/homepage.jpeg";
import { CiBag1 } from "react-icons/ci";
import { NavLink, useLoaderData } from "react-router-dom";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { deleteBookmark, getBookmarkById, getJobDetails, postBookmark } from "../../hooks/api";
import { motion } from "framer-motion";

export function loader({ params }) {
  return getJobDetails(params.id);
}

const JobDetails = () => {
  const [bookmark, setBookmark] = useState(false);
  const job = useLoaderData();

  const currentPageURL = window.location.href;

  const fetchBookmarkStatus = async () => {
    try {
      const fetchedJobs = await getBookmarkById(job._id);
      setBookmark(fetchedJobs.length > 0);
    } catch (error) {
      console.error('Error fetching info:', error);
    }
  };

  useEffect(() => {
    fetchBookmarkStatus();
  }, [job._id, bookmark]);

  const handleBookmark = async () => {
    try {
      setBookmark(!bookmark); // Optimistic update

      if (bookmark) {
        const res = await deleteBookmark(job._id);
        if (!res.success) {
          setBookmark(bookmark); // Revert on failure
        }
      } else {
        const response = await postBookmark({ jobId: job._id });
        if (!response.success) {
          setBookmark(bookmark); // Revert on failure
        }
      }
    } catch (error) {
      console.error('Error updating bookmark:', error);
      setBookmark(bookmark); // Revert on error
    }
  };

  let currency;
  switch (job.currency) {
    case "USD":
      currency = "$";
      break;
    case "GBP":
      currency = "£";
      break;
    case "AUD":
      currency = "A$";
      break;
    case "JPY":
      currency = "¥";
      break;
    case "EUR":
      currency = "€";
      break;
    default:
      currency = "$";
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="max-w-6xl mx-auto px-4 py-8 min-h-[80vh]"
    >
      <div className="bg-white flex justify-center dark:bg-gray-900">
        <div className="hidden max-w-[400px] relative md:flex">
          <div className="relative">
            <img
              src={home}
              alt="joblist"
              className="object-cover w-full h-[70%] rounded-lg"
            />
            <div className="hidden absolute inset-0 lg:flex items-center justify-center">
            </div>
            <div>
              <h2 className="font-bold text-2xl pl-2 mt-5 dark:text-white">
                Job Listings
              </h2>
              <div>
                <ul className="mt-4">
                  <li className="flex items-center gap-4">
                    <CiBag1 className="w-10 h-10 text-primary" />
                    <div className="flex-col my-3">
                      <p className="font-bold text-base dark:text-white">
                        {job.jobName}
                      </p>
                      <div className="flex gap-1 mt-2">
                        <p className="text-gray-500 dark:text-gray-100">
                          {job.type},
                        </p>
                        <p className="text-gray-500 dark:text-gray-100">
                          {job.location}
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-5xl dark:bg-gray-900">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold dark:text-white">
                {job.jobName}
              </h1>
              <p className="text-gray-600 dark:text-gray-100">{job.company}.</p>
              <p className="text-gray-600 dark:text-gray-100">{job.location}</p>
            </div>
            <NavLink
              to="/job-apply"
              state={{ job, currentPageURL }}
              className="bg-primary hover:bg-primary text-white font-bold py-2 px-2 max-sm:px-1 max-sm:py-1 rounded hover:shadow-md hover:shadow-black-100"
            >
              Apply Now
            </NavLink>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-2 dark:text-white">
              Job Details
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600 dark:text-gray-100">
                  Employment type
                </p>
                <p className="font-bold dark:text-white">{job.type}</p>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-100">Salary</p>
                <p className="font-bold dark:text-white">
                  {currency}
                  {job.salaryHigh} - {currency}
                  {job.salaryLow}
                </p>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-100">Industries</p>
                <p className="font-bold dark:text-white">{job.industry}</p>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-2 dark:text-white">
              Job Description
            </h2>
            <p className="text-gray-600 dark:text-gray-100">
              {job.jobDescription}
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-2 dark:text-white">
              Requirements
            </h2>
            <ul className="list-disc list-inside">
              {job.mandatoryRequirements.map((requirement, index) => (
                <li className="flex items-center mb-2" key={`mandatory-${index}`}>
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="dark:text-white">{requirement}</span>
                </li>
              ))}
              {job.optionalRequirements.map((requirement, index) => (
                <li className="flex items-center mb-2" key={`optional-${index}`}>
                  <svg
                    className="w-5 h-5 text-gray-400 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 111.414 1.414L11.414 10l4.293 4.293a1 1 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 01-1.414-1.414L8.586 10 4.293 5.707a1 1 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-100">
                    {requirement}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2 dark:text-white">
              Bookmark this Job
            </h2>
            <div className="flex items-center justify-between">
              <p className="text-gray-600 dark:text-gray-100">
                Bookmark this job to view later
              </p>
              <div onClick={handleBookmark} className="cursor-pointer">
                {bookmark ? (
                  <FaBookmark className="w-7 h-7 text-primary hover:shadow-sm hover:shadow-primary dark:hover:shadow-slate-100 dark:active:shadow-gray-400" />
                ) : (
                  <FaRegBookmark className="w-7 h-7 text-primary hover:shadow-sm hover:shadow-primary dark:hover:shadow-slate-100 dark:active:shadow-gray-400" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default JobDetails;
