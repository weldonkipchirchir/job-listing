import { useState } from "react";
import { motion } from "framer-motion";
import ButtonGroup from "../../components/ButtonGroup";
import { jobTypes } from "../../utils/links";
import { FaChevronDown } from "react-icons/fa";
import { getSearch } from "../../hooks/api";
import { buildQueryString } from "../../hooks/buildQuery";
import ListItem from "../../components/user/ListItem";

function FindJob() {
  const [formData, setFormData] = useState({
    type: "Remote",
    company: "",
    location: "",
    jobName: "",
  });
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [search, setSearch] = useState([]);
  const [hasSearched, setHasSearched] = useState(false); // New state variable


  const handleSubmit = async (event) => {
    event.preventDefault();
    const queryString = buildQueryString(formData);
    console.log("Form Data:", formData);
    console.log("Query String:", queryString);

    try {
      const response = await getSearch(queryString);
      setSearch(response);
      setHasSearched(true); // Set hasSearched to true when a search is performed
      console.log("Search Results:", response);
      setFormData({
        type: "Remote",
        company: "",
        location: "",
        jobName: "",
      });
    } catch (error) {
      console.error("Error performing search:", error);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1.3 }}
      className="max-w-[90%] mx-auto min-h-[80vh]"
    >
      <main className="padding min-h-[100vh]">
        {search.length > 0 ? ( 
          <div>
              <button
                className="dark:text-white bg-primary px-2 rounded-sm text-xl font-semibold align-middle"
                onClick={() => {
                  setSearch([]);
                  setHasSearched(false); // Reset hasSearched when clearing search
                }}
              >
                Clear Search
              </button>
          <ListItem currentPosts={search}/>
          </div>
        ) : (
          <>
            <h2 className="font-bold my-5 text-4xl dark:text-white">
              Find the perfect Job
            </h2>
            <h2 className="font-bold text-xl mt-4 dark:text-white">
              Advanced job search
            </h2>
            <div>
              <form onSubmit={handleSubmit} className="p-4">
                <h1 className="text-2xl mb-4 dark:text-white">Select an Option</h1>
                <ButtonGroup
                  options={jobTypes}
                  type={formData.type}
                  onChange={(option) => handleInputChange("type", option)}
                />
                <input type="hidden" name="type" value={formData.type} />

                <div className="mt-4 relative">
                  <label className="block text-xl my-2 font-medium text-gray-700 dark:text-white">
                    Additional Filters
                  </label>
                  <div className="flex items-center">
                    <input
                      type="text"
                      placeholder="Select a filter"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm dark:bg-gray-800"
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
                    <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10 p-4 dark:bg-gray-800">
                      <label className="block mb-2 dark:text-white">
                        Company:
                        <input
                          type="text"
                          className="w-full p-2 border rounded mt-1 dark:bg-gray-800 dark:text-white"
                          placeholder="Enter company"
                          value={formData.company}
                          onChange={(e) =>
                            handleInputChange("company", e.target.value)
                          }
                        />
                      </label>
                      <label className="block mb-2 dark:text-white">
                        Location:
                        <input
                          type="text"
                          className="w-full p-2 border rounded mt-1 dark:bg-gray-800 dark:text-white"
                          placeholder="Enter location"
                          value={formData.location}
                          onChange={(e) =>
                            handleInputChange("location", e.target.value)
                          }
                        />
                      </label>
                      <label className="block mb-2 dark:text-white">
                        Job Title
                        <input
                          type="text"
                          className="w-full p-2 border rounded mt-1 dark:bg-gray-800 dark:text-white"
                          placeholder="Enter Job title"
                          value={formData.jobName}
                          onChange={(e) =>
                            handleInputChange("jobName", e.target.value)
                          }
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
              {hasSearched && search.length === 0 && (
                <p className="mt-4 text-xl text-gray-700 dark:text-white">
                  No results found
                </p>
              )}
            </div>
          </>
        )}
      </main>
    </motion.div>
  );
}

export default FindJob;
