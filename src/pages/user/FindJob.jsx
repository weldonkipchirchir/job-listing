import { useState } from 'react';
import { motion } from "framer-motion";
import SearchInput from "../../components/SearchInput";
import ButtonGroup from "../../components/ButtonGroup";
import { jobTypes } from "../../utils/links";
import { FaChevronDown } from 'react-icons/fa';

function FindJob() {
  const [formData, setFormData] = useState({
    selectedOption: "Remote",
    company: "",
    location: "",
    salaryRange: ""
  });
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleSearch = (searchTerm) => {
    // Perform your search logic here
    console.log(`Searching for: ${searchTerm}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
    // Perform any further actions with the form data
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1.3 }}
      className="max-w-[90%] mx-auto"
    >
      <main className="padding min-h-[100vh]">
        <h2 className="font-bold my-5 text-4xl">Find the perfect Job</h2>
        <SearchInput
          placeholder="Search for job title, company, or location"
          onSearch={handleSearch}
        />
        <h2 className="font-bold text-xl mt-4">Advanced job search</h2>
        <div>
          <form onSubmit={handleSubmit} className="p-4">
            <h1 className="text-2xl mb-4">Select an Option</h1>
            <ButtonGroup
              options={jobTypes}
              selectedOption={formData.selectedOption}
              onChange={(option) => handleInputChange('selectedOption', option)}
            />
            <input type="hidden" name="selectedOption" value={formData.selectedOption} />

            <div className="mt-4 relative">
              <label className="block text-xl my-2 font-medium text-gray-700">
                Additional Filters
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Select a filter"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  readOnly
                />
                <button
                  type="button"
                  onClick={toggleDropdown}
                  className="ml-2 p-2 bg-gray-200 rounded-md"
                >
                  <FaChevronDown />
                </button>
              </div>
              {isDropdownVisible && (
                <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10 p-4">
                
                  <label className="block mb-2">
                    Company:
                    <input
                      type="text"
                      className="w-full p-2 border rounded mt-1"
                      placeholder="Enter company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                    />
                  </label>
                  <label className="block mb-2">
                    Location:
                    <input
                      type="text"
                      className="w-full p-2 border rounded mt-1"
                      placeholder="Enter location"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                    />
                  </label>
                  <label className="block mb-2">
                    Salary Range:
                    <input
                      type="text"
                      className="w-full p-2 border rounded mt-1"
                      placeholder="Enter salary range"
                      value={formData.salaryRange}
                      onChange={(e) => handleInputChange('salaryRange', e.target.value)}
                    />
                  </label>
                  <button
                    type="button"
                    className="w-full mt-2 px-4 py-2 bg-primary text-white rounded"
                    onClick={toggleDropdown}
                  >
                    Apply
                  </button>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-primary text-white rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </motion.div>
  );
}

export default FindJob;
