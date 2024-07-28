import { useState, useEffect } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import { getJobDetails, updateJob } from "../../hooks/api";

export function loader({ params }) {
  return getJobDetails(params.id);
}

function EditJobPage() {
  const navigate = useNavigate();
  const job = useLoaderData();
  console.log(job)
  const [jobDetails, setJobDetails] = useState({
    jobName: "",
    type: "",
    location: "",
    salaryHigh: "",
    salaryLow: "",
    company: "",
    imageLink: "",
    sponsored: false,
    currency: "USD",
    mandatoryRequirements: "",
    optionalRequirements: "",
    jobDescription: "",
    industry: "",
  });

  useEffect(() => {
    if (job) {
      setJobDetails({
        jobName: job.jobName || "",
        type: job.type || "",
        location: job.location || "",
        salaryHigh: job.salaryHigh || "",
        salaryLow: job.salaryLow || "",
        company: job.company || "",
        sponsored: job.sponsored || false,
        currency: job.currency || "USD",
        mandatoryRequirements: job.mandatoryRequirements
          ? job.mandatoryRequirements.join(". ")
          : "",
        optionalRequirements: job.optionalRequirements
          ? job.optionalRequirements.join(". ")
          : "",
        jobDescription: job.jobDescription || "",
        industry: job.industry || "",
      });
    }
  }, [job]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    const preparedData = {
      ...jobDetails,
      mandatoryRequirements: jobDetails.mandatoryRequirements.split(".").map(item => item.trim()).filter(item => item),
      optionalRequirements: jobDetails.optionalRequirements.split(".").map(item => item.trim()).filter(item => item),
    };
    console.log(preparedData);
    await updateJob(job._id, preparedData);
    navigate("/jobs-listing", { replace: true });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
  
    setJobDetails((prevDetails) => ({
      ...prevDetails,
      [name]: newValue,
    }));
  };
  

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1.3 }}
      className="max-w-[80%] mx-auto min-h-[80vh] "
    >
      <div className="max-w-[80%] mx-auto h flex flex-col m-4 items-center">
        <h2 className="font-bold text-4xl my-7 dark:text-white">Edit Job</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-lg w-full max-w-[600px] dark:shadow-slate-400 dark:bg-gray-900"
        >
          <div className="mb-4">
            <label
              htmlFor="jobName"
              className="block text-xl font-medium text-gray-700 dark:text-white"
            >
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
            <label
              htmlFor="type"
              className="block text-xl font-medium text-gray-700 dark:text-white"
            >
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
            <label
              htmlFor="location"
              className="block text-xl font-medium text-gray-700 dark:text-white"
            >
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
            <label
              htmlFor="salaryLow"
              className="block text-xl font-medium text-gray-700 dark:text-white"
            >
              Salary Low
            </label>
            <input
              type="text"
              id="salaryLow"
              name="salaryLow"
              value={jobDetails.salaryLow}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md focus
block w-full shadow-sm
dark"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="salaryHigh"
              className="block text-xl font-medium text-gray-700 dark:text-white"
            >
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
          <div className="mb-4">
            <label
              htmlFor="company"
              className="block text-xl font-medium text-gray-700 dark:text-white"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={jobDetails.company}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm dark:bg-gray-800 dark:text-white"
            />
          </div>
          <div className="mb-4 flex justify-start">
            <label
              htmlFor="sponsored"
              className="block text-xl font-medium text-gray-700 dark:text-white"
            >
              Sponsored
            </label>
            <input
              type="checkbox"
              id="sponsored"
              name="sponsored"
              checked={jobDetails.sponsored}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm dark:bg-gray-800 dark:text-white"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="currency"
              className="block text-xl font-medium text-gray-700 dark:text-white"
            >
              Currency
            </label>
            <select
              id="currency"
              name="currency"
              value={jobDetails.currency}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm dark:bg-gray-800 dark:text-white"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="AUD">AUD</option>
              <option value="JPY">JPY</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="mandatoryRequirements"
              className="block text-xl font-medium text-gray-700 dark:text-white"
            >
              Mandatory Requirements
            </label>
            <textarea
              id="mandatoryRequirements"
              name="mandatoryRequirements"
              value={jobDetails.mandatoryRequirements}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm dark:bg-gray-800 dark:text-white"
              placeholder="Enter mandatory requirements, separated by commas"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="optionalRequirements"
              className="block text-xl font-medium text-gray-700 dark:text-white"
            >
              Optional Requirements
            </label>
            <textarea
              id="optionalRequirements"
              name="optionalRequirements"
              value={jobDetails.optionalRequirements}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm dark:bg-gray-800 dark:text-white"
              placeholder="Enter optional requirements, separated by commas"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="jobDescription"
              className="block text-xl font-medium text-gray-700 dark:text-white"
            >
              Job Description
            </label>
            <textarea
              id="jobDescription"
              name="jobDescription"
              value={jobDetails.jobDescription}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md focus block w-full shadow-sm sm dark"
              placeholder="Enter job description"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="industry"
              className="block text-xl font-medium text-gray-700 dark:text-white"
            >
              Industry
            </label>
            <input
              type="text"
              id="industry"
              name="industry"
              value={jobDetails.industry}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm dark:bg-gray-800 dark:text-white"
              placeholder="Enter industry"
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
