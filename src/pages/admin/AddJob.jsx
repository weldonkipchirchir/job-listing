import { useState } from "react";
import { motion } from "framer-motion";

const AddJob = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    location: "",
    jobType: "",
    salaryHigh: "",
    salaryLow: "",
    company: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Perform any further actions with the form data (e.g., send to server)
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="max-w-4xl mx-auto px-4 py-8"
    >
      <main className="min-h-[100vh]">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Add Job
        </h1>
        <div className="flex items-center justify-center ">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-lg w-full max-w-[600px]"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="jobTitle"
            >
              Job Title
            </label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary"
              placeholder="Enter job title"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="location"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary"
              placeholder="Enter location"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="jobType"
            >
              Job Type
            </label>
            <input
              type="text"
              id="jobType"
              name="jobType"
              value={formData.jobType}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary"
              placeholder="Enter job type"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="salaryHigh"
            >
              Salary High
            </label>
            <input
              type="number"
              id="salaryHigh"
              name="salaryHigh"
              value={formData.salaryHigh}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary"
              placeholder="Enter high end of salary range"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="salaryLow"
            >
              Salary Low
            </label>
            <input
              type="number"
              id="salaryLow"
              name="salaryLow"
              value={formData.salaryLow}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary"
              placeholder="Enter low end of salary range"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="company"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary"
              placeholder="Enter company name"
            />
          </div>
          <button
            type="submit"
            className="bg-primary hover:bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:border-primary"
          >
            Add Job
          </button>
        </form>
        </div>
      </main>
    </motion.div>
  );
};

export default AddJob;
