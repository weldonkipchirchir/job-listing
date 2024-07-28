import { motion } from "framer-motion";
import { NavLink, Await, defer, useLoaderData } from "react-router-dom";
import { adminApplication, getSearchAdminApplications } from "../../hooks/api";
import { Suspense } from "react";
import SearchInput from "../../components/SearchInput";
import { useState } from "react";
import ApplicationTable from "../../components/admin/ApplicationTable";
export function loader() {
  return defer({ applications: adminApplication() });
}

const ApplicationsPage = () => {
  const applicationPromise = useLoaderData();
  const [searchApplications, setSearchApplications] = useState([]);
  const [hasSearched, setHasSearched] = useState(false); // New state variable

  const handleSearch = async (searchTerm) => {
    console.log(`Searching for: ${searchTerm}`);
    const data = await getSearchAdminApplications(searchTerm);
    setHasSearched(true); // Set hasSearched to true when a search is performed
    setSearchApplications(data);
  };

  function renderElements(applications) {
    if (!applications || applications.length === 0) {
      return (
        <h1 className="text-center mt-7 text-2xl dark:text-white">
          No applications available
        </h1>
      );
    }
    let numberOfApplication = applications.length;
    return (
      <div className="bg-white min-h-screen py-6 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-md rounded-lg p-6 dark:shadow-gray-700 dark:bg-gray-900">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold dark:text-white">
                Applications
              </h2>
              <p className="text-gray-600 text-xl dark:text-gray-100">
                {numberOfApplication}
              </p>
            </div>
            <div className="mb-4">
              <SearchInput
                placeholder="Search for by email..."
                onSearch={handleSearch}
                setHasSearched={setHasSearched}
              />
            </div>
            {searchApplications.length > 0 ? (
              <>
                <button
                  className="dark:text-white mb-3 bg-primary px-2 rounded-sm text-xl font-semibold align-middle"
                  onClick={() => {
                    setSearchApplications([]);
                    setHasSearched(false);
                  }}
                >
                  Clear Search
                </button>
                <ApplicationTable applications={searchApplications} />
              </>
            ) : (
              <ApplicationTable applications={applications} />
            )}
            <div className="mt-6">
              <NavLink
                to="/add-job"
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary"
              >
                Post a job
              </NavLink>
            </div>
          </div>
          {hasSearched && searchApplications.length === 0 && (
            <p className="mt-4 text-xl text-gray-700 dark:text-white">
              No results found
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1.3 }}
      className="max-w-[80%] mx-auto min-h-[80vh] "
    >
      <Suspense
        fallback={
          <h1 className="dark:text-white text-center mt-8 text-2xl">
            Loading...
          </h1>
        }
      >
        <Await resolve={applicationPromise.applications}>
          {renderElements}
        </Await>
      </Suspense>
    </motion.div>
  );
};

export default ApplicationsPage;
