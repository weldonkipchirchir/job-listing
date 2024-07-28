/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { defer, Await, useLoaderData } from "react-router-dom";
import SearchInput from "../../components/SearchInput";
import { deleteJob, getAdminJobs, getSearchAdminJobs } from "../../hooks/api";
import { Suspense, useState, useEffect } from "react";
import ListItem from "../../components/admin/ListItem";
import Pagination from "../../utils/Pagination";

export function loader() {
  return defer({ jobs: getAdminJobs() });
}

function JobListingAdmin() {
  const { jobs: jobsPromise } = useLoaderData();
  const [jobs, setJobs] = useState([]);
  const [searchJobs, setSearchJobs] = useState([]);
  const [hasSearched, setHasSearched] = useState(false); // New state variable
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const handleSearch = async (searchTerm) => {
    console.log(`Searching for: ${searchTerm}`);
    const data = await getSearchAdminJobs(searchTerm);
    setHasSearched(true); // Set hasSearched to true when a search is performed
    setSearchJobs(data);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = jobs.slice(indexOfFirstPost, indexOfLastPost);

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    jobsPromise.then((fetchedJobs) => {
      setJobs(fetchedJobs);
    });
  }, [jobsPromise]);

  const handleDelete = async (id) => {
    await deleteJob(id);
    const resData = await getAdminJobs();
    setJobs(resData);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1.3 }}
      className="max-w-[80%] mx-auto min-h-[80vh] relative"
    >
      <Suspense
        fallback={
          <h1 className="dark:text-white text-center mt-8 text-2xl">
            Loading...
          </h1>
        }
      >
        <Await resolve={jobsPromise}>
          {(resolvedJobs) => {
            setJobs(resolvedJobs);
            return (
              <main className="padding h">
                {searchJobs.length > 0 ? (
                  <>
                    <button
                      className="dark:text-white bg-primary px-2 rounded-sm text-xl font-semibold align-middle"
                      onClick={() => {
                        setSearchJobs([]);
                        setHasSearched(false); // Reset hasSearched when clearing search
                      }}
                    >
                      Clear Search
                    </button>
                    <ListItem jobs={searchJobs} handleDelete={handleDelete} />
                  </>
                ) : (
                  <div className="mx-auto flex justify-center w-full max-sm:w-full">
                    <div className="w-full">
                      <h2 className="font-bold text-4xl my-7 max-sm:text-3xl max-xs:text-2xl dark:text-white">
                        Your Job Listing
                      </h2>
                      <SearchInput
                        placeholder="Search for jobs..."
                        onSearch={handleSearch}
                        setHasSearched={setHasSearched}
                      />
                      <div className="mt-6">
                        {!jobs || jobs.length === 0 ? (
                          <p className="text-center text-gray-500 dark:text-gray-100">
                            No jobs available.
                          </p>
                        ) : (
                          <ListItem jobs={currentPosts} handleDelete={handleDelete} />
                        )}
                      </div>
                    </div>
                  </div>
                )}
                {hasSearched && searchJobs.length === 0 && (
                  <p className="mt-4 text-xl text-gray-700 dark:text-white">
                    No results found
                  </p>
                )}
                <Pagination
                  postsPerPage={postsPerPage}
                  totalPosts={jobs.length}
                  paginate={handlePagination}
                  currentPage={currentPage}
                />
              </main>
            );
          }}
        </Await>
      </Suspense>
    </motion.div>
  );
}

export default JobListingAdmin;
