import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getJobApplications } from "../../hooks/api";
const ApplicationDetails = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const fetchedJobs = await getJobApplications();
        setJobs(fetchedJobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    }

    fetchJobs();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="max-w-5xl mx-auto px-4 py-8 min-h-[80vh] "
    >
      {jobs ? (
        <>
          <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md min-h-[80vh] dark:bg-gray-900">
            <h1 className="text-2xl font-bold mb-4 dark:text-white">
              Application Details
            </h1>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 rounded-md dark:bg-gray-800">
                <thead>
                  <tr>
                    <th className="px-4 text-left py-2 border-b border-2 dark:text-white">
                      Job Title
                    </th>
                    <th className="px-4 text-left py-2 border-b border-2 dark:text-white">
                      Company
                    </th>
                    <th className="px-4 text-left py-2 border-b dark:text-white">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((application) => (
                    <tr key={application.id}>
                      <td className="px-4 py-2 border-b border-2 dark:text-white">
                        {application.jobName}
                      </td>
                      <td className="px-4 py-2 border-b border-2 dark:text-white">
                        {application.company}
                      </td>
                      <td className="px-4 py-2 border-b dark:text-white">
                        <span
                          className={`px-2 py-1 rounded ${
                            application.status === "Pending"
                              ? "bg-yellow-200 text-yellow-800"
                              : application.status === "Accepted"
                              ? "bg-green-200 text-green-800"
                              : "bg-red-200 text-red-800"
                          }`}
                        >
                          {application.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-center text-2xl mt-7 dark:text-white">No Applications</h1>
        </>
      )}
    </motion.div>
  );
};

export default ApplicationDetails;
