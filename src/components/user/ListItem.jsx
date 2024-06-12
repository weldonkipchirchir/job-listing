/* eslint-disable react/prop-types */
import { LuShoppingBag } from "react-icons/lu";
import { NavLink } from "react-router-dom";
function ListItem({currentPosts}) {
  return (
    <div>
         <ul className="">
                {currentPosts.map((job) => {
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
                    <NavLink key={job._id} to={`/job-details/${job._id}`}>
                      <li className="flex justify-between my-8 max-sm:items-center max-sm:flex-col">
                        <div className="flex items-center gap-4">
                          <LuShoppingBag className="w-[52px] h-[52px] text-primary bg-neutral-200 p-2 rounded dark:bg-gray-500" />{" "}
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
                          </div>
                        </div>
                        <div className="flex items-center">
                          <p className="text-xl font-medium dark:text-white">
                            {currency}
                            {job.salaryLow}
                          </p>
                          <span className="mx-1 font-medium dark:text-white">
                            -
                          </span>
                          <p className="text-xl font-medium dark:text-white">
                            {currency}
                            {job.salaryHigh}
                          </p>
                        </div>
                      </li>
                    </NavLink>
                  );
                })}
              </ul>
    </div>
  )
}

export default ListItem