import { NavLink } from "react-router-dom";
import { featuredJobs } from "../../utils/dumyData";
function PopularSearch() {
  return (
    <div className="padding">
      <div className="py-4 text-2xl font-bold">
        <h2>Popular Searches</h2>
      </div>
      <div>
        <h2 className="py-4 text-2xl font-bold">Featured jobs</h2>
        <ul>
          {featuredJobs.map((job, index) => (
            <div key={index} className="flex items-center justify-between max-sm:flex-col">
              <li className="py-3 my-2 min-w-56">
                <p className="py-2 text-gray-500">Sponsored</p>
                <h3 className="py-2 font-bold text-wrap">{job.jobName}</h3>
                <p className="py-2 mb-3 text-gray-500">{job.company}</p>
                <NavLink className="p-2 font-bold bg-gray-100 rounded-lg hover:shadow-black-100 hover:shadow-lg">
                  View
                </NavLink>
              </li>
              <div className="[600px]:pr-16">
                <img src={job.imageLink} className="w-[180px] h-[180px] rounded-md" alt="job" />
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PopularSearch;
