import { motion } from "framer-motion";
import { useState } from "react";

const ApplicationDetailsPage = () => {
  const [status, setStatus] = useState("In review");

  const application = {
    name: "Jane Johnson",
    email: "jane@acme.com",
    status: status,
    rating: 70,
    resume: "path/to/resume.pdf",
    coverLetter: "path/to/cover-letter.pdf",
    portfolio: "https://example.com/portfolio",
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated application status:", status);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1.3 }}
      className="max-w-[80%] mx-auto"
    >
      <div className="bg-white my-auto flex items-center justify-center min-h-screen py-6 dark:bg-gray-900">
        <div className="max-w-4xl h-full flex items-center justify-center mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-900 dark:shadow-slate-500">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              Application Details - Product Designer
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 dark:text-white">
                    Personal Information
                  </h3>
                  <p className="text-gray-600 mb-2 dark:text-gray-100">
                    <strong className="dark:text-white">Name:</strong>{" "}
                    {application.name}
                  </p>
                  <p className="text-gray-600 mb-2 dark:text-gray-100">
                    <strong className="dark:text-white">Email:</strong>{" "}
                    {application.email}
                  </p>
                  <div className="mb-2 dark:text-gray-100">
                    <strong className="dark:text-white">
                      Application Status:
                    </strong>{" "}
                    <select
                      value={status}
                      onChange={handleStatusChange}
                      className="border border-gray-300 text-black rounded-md p-1 focus:outline-none focus:ring-primary focus:border-primary"
                    >
                      <option value="In review">In review</option>
                      <option value="Accepted">Accepted</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </div>
                  <p className="text-gray-600 mb-2 dark:text-gray-100">
                    <strong className="dark:text-white">Rating:</strong>{" "}
                    {application.rating}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 dark:text-white">
                    Attachments
                  </h3>
                  <p className="text-gray-600 mb-2 dark:text-gray-100">
                    <strong>Resume:</strong>{" "}
                    <a
                      href={application.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary"
                    >
                      View Resume
                    </a>
                  </p>
                  <p className="text-gray-600 mb-2 dark:text-gray-100">
                    <strong>Cover Letter:</strong>{" "}
                    <a
                      href={application.coverLetter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary"
                    >
                      View Cover Letter
                    </a>
                  </p>
                  <p className="text-gray-600 mb-2 dark:text-gray-100">
                    <strong>Portfolio:</strong>{" "}
                    <a
                      href={application.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary"
                    >
                      View Portfolio
                    </a>
                  </p>
                </div>
              </div>
              <button
                type="submit"
                className="bg-primary text-white py-2 px-4 rounded-md mt-4 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-opacity-50"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ApplicationDetailsPage;
