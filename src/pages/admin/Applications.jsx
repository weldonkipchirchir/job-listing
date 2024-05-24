import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
const ApplicationsPage = () => {
  const applications = [
    {
      name: "Sarah Smith",
      email: "sarah@acme.com",
      status: "In review",
      rating: 40,
    },
    {
      name: "John Doe",
      email: "john@acme.com",
      status: "In review",
      rating: 60,
    },
    {
      name: "Jane Johnson",
      email: "jane@acme.com",
      status: "In review",
      rating: 70,
    },
    {
      name: "Molly Miller",
      email: "molly@acme.com",
      status: "In review",
      rating: 50,
    },
    {
      name: "Bob Brown",
      email: "bob@acme.com",
      status: "In review",
      rating: 30,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1.3 }}
      className="max-w-[80%] mx-auto" // Added max-w-[80%] and mx-auto
    >
      <div className="bg-white min-h-screen py-6 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-md rounded-lg p-6 dark:shadow-gray-700 dark:bg-gray-900">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold dark:text-white">
                Product Designer
              </h2>
              <p className="text-gray-600 dark:text-gray-100">12 applicants</p>
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search by name or email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div className="overflow-x-auto">
              <table className="w-full table-auto ">
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
                      Rating
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
                      <td className="py-3 px-6 text-left text-lg whitespace-nowrap dark:text-white">
                        {application.rating}
                      </td>
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <NavLink
                          to="application-details"
                          className="bg-primary text-lg text-white px-4 py-2 rounded-md hover:bg-primary"
                        >
                          Review
                        </NavLink>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6">
              <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary">
                Post a job
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ApplicationsPage;
