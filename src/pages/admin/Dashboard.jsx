import { motion } from "framer-motion";
import { LuActivity } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAdminInfo, getAdminLatestJobs } from "../../hooks/api";

function Dashboard() {
  const [info, setInfo] = useState("");
  const [latestJobs, setLatestJobs] = useState([]);

  useEffect(() => {
    async function fetchInfo() {
      try {
        const fetchedJobs = await getAdminInfo();
        const latestJobs = await getAdminLatestJobs();
        setInfo(fetchedJobs);
        setLatestJobs(latestJobs);
      } catch (error) {
        console.error('Error fetching info:', error);
      }
    }

    fetchInfo();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1.3 }}
      className="max-w-[90%] mx-auto min-h-[80vh] "
    >
      <main className="padding min-h-[100vh]">
        <h2 className="text-4xl font-bold my-4 dark:text-white">
          Welcome to your dashboard
        </h2>
        <p className="text-lg text-gray-400 mb-2 dark:text-gray-100">
          Here is a summary of your account activity
        </p>
        <div className="flex flex-wrap my-3 gap-4">
          <div className="flex-col items-center bg-[#F3F3F3] p-3 rounded-md flex-1 dark:bg-gray-800">
            <h3 className="font-bold p-2 dark:text-white">Active jobs</h3>
            <p className="font-bold p-2 dark:text-white">{info.activeJobs}</p>
          </div>
          <div className="flex-col items-center bg-[#F3F3F3] p-3 rounded-md flex-1 dark:bg-gray-800">
            <h3 className="font-bold p-2 dark:text-white">
              Total applications
            </h3>
            <p className="font-bold p-2 dark:text-white">{info.totalApplications}</p>
          </div>
          <div className="flex-col items-center bg-[#F3F3F3] p-3 rounded-md flex-1 dark:bg-gray-800">
            <h3 className="font-bold p-2 dark:text-white">
              New applications
            </h3>
            <p className="font-bold p-2 dark:text-white">{info.newApplication}</p>
          </div>
          <div className="flex-col items-center bg-[#F3F3F3] p-3 rounded-md flex-1 dark:bg-gray-800">
            <h3 className="font-bold p-2 dark:text-white">Total users</h3>
            <p className="font-bold p-2 dark:text-white">{info.totalUsers}</p>
          </div>
        </div>

        <h2 className="font-bold text-xl my-2 dark:text-white">Quick access</h2>
        <div className="my-5 bsorder-2 p-4 rounded-xl border-gray-600 shadow-md shadow-gray-100 gap-4 flex justify-between items-center">
          <div>
            <h2 className="font-bold text-2xl py-3 dark:text-white">
              Create new job
            </h2>
            <p className="text-gray-400 text-xl dark:text-gray-100 ">
              Post a job in minutes and start receiving applications.
            </p>
          </div>
          <NavLink to='/add-job' className="p-2 text-white rounded-md bg-primary">
            Create job
          </NavLink>
        </div>
        <div className="my-5 bsorder-2 p-4 rounded-xl border-gray-600 shadow-md shadow-gray-100 gap-4 flex justify-between items-center">
          <div>
            <h2 className="font-bold text-2xl py-3 dark:text-white">
              Invite your team
            </h2>
            <p className="text-gray-400 text-xl dark:text-gray-100">
              Invite your team to collaborate on hiring and start using Jobly
              together.
            </p>
          </div>
          <button className="p-2 text-white rounded-md bg-primary">
            Invite team
          </button>
        </div>
        <h2 className="font-bold text-xl my-8 dark:text-white">
          Recent Activity
        </h2>
        {latestJobs.map((job, index) => (
          <div key={index} className="my-2 flex gap-3">
            <LuActivity className="w-9 h-9 text-primary" />
            <div>
              <h2 className="font-bold my-1 dark:text-white">{job.jobName}</h2>
              <p className="text-gray-400 my-1 dark:text-gray-100">
                {job.time == 1 ? `${job.daysAgo} day ago` : `${job.daysAgo} days ago`}
              </p>
            </div>
          </div>
        ))}
      </main>
    </motion.div>
  );
}

export default Dashboard;
