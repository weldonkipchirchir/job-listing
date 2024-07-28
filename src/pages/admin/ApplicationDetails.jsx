import { motion } from "framer-motion";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { updateApplication } from "../../hooks/api";

const ApplicationDetailsPage = () => {
  const location = useLocation();
  const application = location.state?.application || "";
  const navigate = useNavigate();
  const [download, setDownloading] = useState(false);
  const [status, setStatus] = useState({
    status: application.status || "Pending",
  });

  if (!application) {
    return (
      <div className="text-center text-2xl dark:text-white">
        Application not found
      </div>
    );
  }

  const handleStatusChange = (e) => {
    setStatus({ status: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateApplication(application._id, status);
    navigate("/applications", { replace: true });
  };

  const onButtonClick = () => {
    setDownloading(true);
    const byteCharacters = atob(application.resume.data);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], {
      type: application.resume.contentType,
    });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = application.resume.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1.3 }}
      className="max-w-[80%] mx-auto min-h-[80vh] "
    >
      <div className="bg-white my-auto flex items-center justify-center min-h-screen py-6 dark:bg-gray-900">
        <div className="max-w-4xl h-full flex items-center justify-center mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-900 dark:shadow-slate-500">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              Application Details - {application.jobName}
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
                      value={status.status}
                      onChange={handleStatusChange}
                      className="border border-gray-300 text-black rounded-md p-1 focus:outline-none focus:ring-primary focus:border-primary"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Accepted">Accepted</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 dark:text-white">
                    Attachments
                  </h3>
                  <p className="text-gray-600 mb-2 dark:text-gray-100">
                    <strong>Resume:</strong>{" "}
                    <button
                      onClick={onButtonClick}
                      className="text-white p-1 rounded-md bg-primary hover:shadow-md hover:shadow-black"
                      disabled={download == true}
                    >
                      {download == true ? "Downloading" : "Download"}
                    </button>
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
