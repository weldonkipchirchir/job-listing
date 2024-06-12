/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { LuShoppingBag } from "react-icons/lu";
function ListItem({ jobs, handleDelete }) {
  return (
    <div>
      <ul className="">
        {jobs.map((job) => {
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
              currency = "€";
              break;
            default:
              currency = "";
          }
          return (
            <NavLink key={job._id}>
              <li className="flex justify-between my-8 max-sm:items-center max-sm:flex-col">
                <div className="flex items-center gap-4">
                  <LuShoppingBag className="w-[52px] h-[52px] text-primary bg-neutral-200 p-2 rounded" />
                  <div className="flex-col my-3">
                    <p className="font-bold text-xl dark:text-white">
                      {job.jobName}
                    </p>
                    <div className="flex gap-2 mt-2">
                      <p className="text-gray-500 dark:text-gray-100">
                        {job.type},
                      </p>
                      <p className="text-gray-500 dark:text-gray-100">
                        {job.location}
                      </p>
                    </div>
                    <div className="flex items-center my-2">
                      <p className="text-md font-medium dark:text-white">
                        {currency}
                        {job.salaryLow}
                      </p>
                      <span className="mx-1 font-medium">-</span>
                      <p className="text-md font-medium dark:text-white">
                        {currency}
                        {job.salaryHigh}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-around">
                  <div className="flex items-center gap-2 justify-between">
                    <button
                      onClick={() => handleDelete(job._id)}
                      className="w-24 bg-gray-100 p-2 font-bold hover:bg-primary hover:text-white rounded-md active:border-2 active:border-primary"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="flex items-center">
                    <NavLink
                      to={`/edit-job/${job._id}`}
                      className="w-24 text-center bg-gray-100 p-2 font-bold hover:bg-primary hover:text-white rounded-md active:border-2 active:border-primary"
                    >
                      Edit
                    </NavLink>
                  </div>
                </div>
              </li>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
}

export default ListItem;
