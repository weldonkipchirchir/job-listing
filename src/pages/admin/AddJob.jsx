import { useState } from "react";
import { motion } from "framer-motion";
import { postJob } from "../../hooks/api";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
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

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const preparedData = {
      ...formData,
      mandatoryRequirements: formData.mandatoryRequirements.split(".").map(item => item.trim()).filter(item => item),
      optionalRequirements: formData.optionalRequirements.split(".").map(item => item.trim()).filter(item => item),
    };
    console.log("Form Data:", preparedData);
    try {
      await postJob(preparedData);  // Use preparedData instead of formData
      navigate('/jobs-listing', { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="max-w-4xl mx-auto px-4 py-8 min-h-[80vh] "
    >
      <main className="min-h-[100vh]">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center dark:text-white">
          Add Job
        </h1>
        <div className="flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-[600px] dark:shadow-slate-400 dark:bg-gray-900"
          >
            {/* Input fields */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-100" htmlFor="jobName">
                Job Title
              </label>
              <input
                type="text"
                id="jobName"
                name="jobName"
                value={formData.jobName}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary dark:bg-gray-800 dark:text-white"
                placeholder="Enter job title"
              />
            </div>

            {/* Similar input elements for other fields */}
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-100" htmlFor="type">
                Job Type
              </label>
              <input
                type="text"
                id="type"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary dark:bg-gray-800 dark:text-white"
                placeholder="Enter job type"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-100" htmlFor="location">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary dark:bg-gray-800 dark:text-white"
                placeholder="Enter location"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-100" htmlFor="salaryHigh">
                Salary High
              </label>
              <input
                type="number"
                id="salaryHigh"
                name="salaryHigh"
                value={formData.salaryHigh}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary dark:bg-gray-800 dark:text-white"
                placeholder="Enter high end of salary range"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-100" htmlFor="salaryLow">
                Salary Low
              </label>
              <input
                type="number"
                id="salaryLow"
                name="salaryLow"
                value={formData.salaryLow}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary dark:bg-gray-800 dark:text-white"
                placeholder="Enter low end of salary range"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-100" htmlFor="company">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary dark:bg-gray-800 dark:text-white"
                placeholder="Enter company name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-100" htmlFor="imageLink">
                Image Link
              </label>
              <input
                type="text"
                id="imageLink"
                name="imageLink"
                value={formData.imageLink}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary dark:bg-gray-800 dark:text-white"
                placeholder="Enter image link"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-100" htmlFor="sponsored">
                Sponsored
              </label>
              <input
                type="checkbox"
                id="sponsored"
                name="sponsored"
                checked={formData.sponsored}
                onChange={handleInputChange}
                className="mr-2 leading-tight"
              />
              <span className="text-gray-700 dark:text-gray-100">Is Sponsored</span>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-100" htmlFor="currency">
                Currency
              </label>
              <select
                id="currency"
                name="currency"
                value={formData.currency}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary dark:bg-gray-800 dark:text-white"
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="AUD">AUD</option>
                <option value="JPY">JPY</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-100" htmlFor="mandatoryRequirements">
                Mandatory Requirements
              </label>
              <textarea
                id="mandatoryRequirements"
                name="mandatoryRequirements"
                value={formData.mandatoryRequirements}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary dark:bg-gray-800 dark:text-white"
                placeholder="Enter mandatory requirements, separated by fullstop"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-100" htmlFor="optionalRequirements">
                Optional Requirements
              </label>
              <textarea
                id="optionalRequirements"
                name="optionalRequirements"
                value={formData.optionalRequirements}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary dark:bg-gray-800 dark:text-white"
                placeholder="Enter optional requirements, separated by fullstop"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-100" htmlFor="jobDescription">
                Job Description
              </label>
              <textarea
                id="jobDescription"
                name="jobDescription"
                value={formData.jobDescription}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary dark:bg-gray-800 dark:text-white"
                placeholder="Enter job description"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-100" htmlFor="industry">
                Industry
              </label>
              <input
                type="text"
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-primary dark:bg-gray-800 dark:text-white"
                placeholder="Enter industry"
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
