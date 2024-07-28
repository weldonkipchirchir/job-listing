/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { Await, defer, useLoaderData } from "react-router-dom";
import SearchInput from "../../components/SearchInput";
import { getJobs, getSearchAll } from "../../hooks/api";
import { Suspense, useState } from "react";
import Pagination from "../../utils/Pagination";
import ListItem from "../../components/user/ListItem";

export function loader() {
  return defer({ jobs: getJobs() });
}

function JobListing() {
  const jobsPromise = useLoaderData();
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const [searchJobs, setSearchJobs] = useState([]);
  const [hasSearched, setHasSearched] = useState(false); // New state variable

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handleSearch = async (searchTerm) => {
    console.log(`Searching for: ${searchTerm}`);
    const data = await getSearchAll(searchTerm);
    setHasSearched(true); // Set hasSearched to true when a search is performed
    setSearchJobs(data);
  };

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function renderJobElements(jobs) {
    setPosts(jobs);
    if (!jobs || jobs.length === 0) {
      return (
        <h1 className="text-center text-2xl mt-7">No applications available</h1>
      );
    }
    return (
      <main className="padding">
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
            <ListItem currentPosts={searchJobs} />
          </>
        ) : (
          <>
            <div className="mx-auto flex justify-center w-full max-sm:w-full">
              <div className="w-full">
                <h2 className="font-bold text-4xl my-7 max-sm:text-3xl max-xs:text-2xl dark:text-white">
                  Available Jobs
                </h2>
                <SearchInput
                  placeholder="Search for products..."
                  onSearch={handleSearch}
                  setHasSearched={setHasSearched}
                />
                <div className="mt-6">
                  <ListItem currentPosts={currentPosts} />
                </div>
                {hasSearched && searchJobs.length === 0 && (
                  <p className="mt-4 text-xl text-gray-700 dark:text-white">
                    No results found
                  </p>
                )}
              </div>
            </div>
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={handlePagination}
              currentPage={currentPage}
            />
          </>
        )}
      </main>
    );
  }

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
        <Await resolve={jobsPromise.jobs}>{renderJobElements}</Await>
      </Suspense>
    </motion.div>
  );
}

export default JobListing;
