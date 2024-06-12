/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom"

function ApplicationTable({applications}) {
  return (
    <div>     <div className="overflow-x-auto">
    <table className="w-full table-auto">
      <thead>
        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal dark:bg-gray-500">
          <th className="py-3 px-6 text-left dark:text-white">
            Name
          </th>
          <th className="py-3 px-6 text-left dark:text-white">
            Email
          </th>
          <th className="py-3 px-6 text-left dark:text-white">
            Application Status
          </th>
          <th className="py-3 px-6 text-left dark:text-white">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="text-gray-600 text-sm font-light">
        {applications.map((application, index) => (
          <tr
            key={index}
            className="border-b border-gray-200 hover:bg-gray-100 dark:hover:bg-black"
          >
            <td className="py-3 px-6 text-left text-lg whitespace-nowrap dark:text-white">
              {application.name}
            </td>
            <td className="py-3 px-6 text-left text-lg whitespace-nowrap dark:text-white">
              {application.email}
            </td>
            <td className="py-3 px-6 text-left text-lg whitespace-nowrap dark:text-white">
              {application.status}
            </td>
            <td className="py-3 px-6 text-left whitespace-nowrap">
              <NavLink
                to={`application-details/${application._id}`}
                state={{ application }}
                className="bg-primary text-lg text-white px-4 py-2 rounded-md hover:bg-primary"
              >
                Review
              </NavLink>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div></div>
  )
}

export default ApplicationTable