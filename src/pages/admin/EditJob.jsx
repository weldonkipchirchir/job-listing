// EditJobPage.js

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
function EditJobPage() {
  const navigate = useNavigate();

  // Initialize state for job details
  const [jobDetails, setJobDetails] = useState({
    jobName: "Senior Product Designer",
    type: "Full-Time",
    location: "Remote",
    salaryHigh: "$120k",
    salaryLow: "$120k",
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit job details to backend or perform other actions
    console.log("Job details updated:", jobDetails);
    // Redirect user to the job listing page
    navigate("/job-listing");
  };
// Function to handle input changes
const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({
      ...jobDetails,
      [name]: value,
    });
  };

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 1 }}
    transition={{ duration: 1.3 }}
    className="max-w-[80%] mx-auto" // Added max-w-[80%] and mx-auto
  >
    <div className="max-w-[80%] mx-auto h flex flex-col items-center">
      <h2 className="font-bold text-4xl my-7 dark:text-white">Edit Job</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-[600px] dark:shadow-slate-400 dark:bg-gray-900">
        <div className="mb-4">
          <label htmlFor="jobName" className="block text-xl font-medium text-gray-700 dark:text-white">
            Job Name
          </label>
          <input
            type="text"
            id="jobName"
            name="jobName"
            value={jobDetails.jobName}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm dark:bg-gray-800 dark:text-white"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="block text-xl font-medium text-gray-700 dark:text-white">
            Type
          </label>
          <input
            type="text"
            id="type"
            name="type"
            value={jobDetails.type}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm dark:bg-gray-800 dark:text-white"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-xl font-medium text-gray-700 dark:text-white">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={jobDetails.location}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm dark:bg-gray-800 dark:text-white"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="salaryLow" className="block text-xl font-medium text-gray-700 dark:text-white">
            Salary Low
          </label>
          <input
            type="text"
            id="salaryLow"
            name="salaryLow"
            value={jobDetails.salaryLow}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm dark:bg-gray-800 dark:text-white"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="salaryHigh" className="block text-xl font-medium text-gray-700 dark:text-white">
            Salary High
          </label>
          <input
            type="text"
            id="salaryHigh"
            name="salaryHigh"
            value={jobDetails.salaryHigh}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm dark:bg-gray-800 dark:text-white"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-opacity-50"
        >
          Save Changes
        </button>
      </form>
    </div>
    </motion.div>
  );
}

export default EditJobPage;