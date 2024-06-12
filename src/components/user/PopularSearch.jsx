import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSponsoredJobs } from "../../hooks/api";

function PopularSearch() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const fetchedJobs = await getSponsoredJobs();
        setJobs(fetchedJobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    }

    fetchJobs();
  }, []);

  return (
    <div className="padding lg:max-w-[90%] max-w-[100%]">
      {" "}
      {/* Added max-w-[80%] and mx-auto */}
      <div className="py-4 text-2xl font-bold">
        <h2 className="max-sm:text-xl dark:text-white">Popular Searches</h2>
        <div className="mt-5">
          {jobs.map((job, index) => (
            <button
              key={index}
              className="text-lg bg-[#F3F3F3] m-2 py-1 px-2 rounded-md max-sm:text-sm"
            >
              {job.jobName}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h2 className="py-4 text-2xl font-bold dark:text-white">
          Featured jobs
        </h2>
        <ul>
          {jobs.map((job, index) => {
            let currency;
            switch (job.currency) {
              case "USD":
                currency = "$";
                break;
              case "GBP":
                currency = "£";
                break;
              case "AUD":
                currency = "A$";
                break;
              case "JPY":
                currency = "¥";
                break;
              case "EUR":
                currency = "£";
                break;
              default:
                currency = "";
            }
            return (
              <div
                key={index}
                className="flex items-center justify-between max-sm:flex-col"
              >
                {console.log(job)}

                <li className="py-3 my-2 min-w-56">
                  <p className="py-2 text-gray-500 dark:text-gray-100">
                    Sponsored
                  </p>
                  <h3 className="py-2 font-bold text-wrap dark:text-white">
                    {job.jobName}
                  </h3>
                  <p className="py-2 mb-3 dark:text-gray-100 text-gray-500">
                    {job.company}
                  </p>
                  <NavLink
                    to={`/job-listing`}
                    className="p-2 font-bold bg-gray-100 dark:text-100 rounded-lg hover:shadow-black-100 hover:shadow-lg"
                  >
                    View
                  </NavLink>
                </li>
                <div className="flex items-center">
                  <p className="text-xl font-medium dark:text-white">
                    {currency}
                    {job.salaryLow}
                  </p>
                  <span className="mx-1 font-medium dark:text-white">-</span>
                  <p className="text-xl font-medium dark:text-white">
                    {currency}
                    {job.salaryHigh}
                  </p>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default PopularSearch;
