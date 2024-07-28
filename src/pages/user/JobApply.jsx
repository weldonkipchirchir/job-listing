import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { EmailShareButton, FacebookShareButton, LinkedinShareButton, TwitterShareButton } from "react-share";
import { EmailIcon, FacebookIcon, LinkedinIcon, TwitterIcon } from "react-share";
import { IoIosLink } from "react-icons/io";
import { postApplication } from "../../hooks/api";

function JobApply() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null,
  });
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const job = location.state?.job || " ";
  if (!job) {
    return <div>Job not found</div>;
  }

  const url = location.state?.currentPageURL || " ";
    const handleChange = (e) => {
    const { name, value } = e.target;
    setError(null);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setError(null);
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const reader = new FileReader();
    reader.readAsDataURL(formData.resume);
    reader.onloadend = () => {
        const resumeData = reader.result.split(",")[1]; 
        const payload = {
            jobId: job._id,
            jobName: job.jobName,
            name: formData.name,
            email: formData.email,
            status: "pending",
            resume: {
                filename: formData.resume.name,
                contentType: formData.resume.type,
                data: resumeData, 
            },
            company: job.company,
        };

        console.log(payload.resume.data);
        submitApplication(payload);
    };
};

  const submitApplication = async (payload) => {
    try {
      const res = await postApplication(payload);
      console.log(res);
      navigate("/job-listing", { replace: true });
    } catch (error) {
      console.error(error);
      setError(error.message); // Accessing the message property
    }
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1.3 }}
      className="max-w-[90%] mx-auto min-h-[80vh] "
    >
      <main className="padding h">
        <h2 className="font-bold my-5 text-4xl dark:text-white">{job.jobName}</h2>
        <div className="flex mb-4 mt-3">
          <p className="text-gray-400 pr-1 dark:text-gray-100">Location: {job.location} |</p>
          <p className="text-gray-400 dark:text-gray-100">Type: {job.type}</p>
        </div>
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md dark:bg-gray-900 dark:shadow-slate-400 my-4">
          <h1 className="text-2xl font-bold mb-4 dark:text-white">Apply for Job</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block font-semibold mb-1 dark:text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary dark:bg-gray-800 dark:text-white"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold mb-1 dark:text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary dark:bg-gray-800 dark:text-white"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="resume" className="block font-semibold mb-1 dark:text-white">
                Resume
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleFileChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary dark:bg-gray-800 dark:text-white"
                required
              />
            </div>
            <button type="submit" className="mt-4 px-4 py-2 bg-primary text-white rounded">
              Submit
            </button>
          </form>
          {error && <p className="text-red-600 text-xl mt-3">{error}</p>}
        </div>
        <div className="my-5 border-2 p-4 rounded-xl border-gray-600 shadow-md shadow-gray-100 gap-4 flex justify-between items-center">
          <div>
            <h2 className="font-bold text-2xl py-3 dark:text-white">Share this job</h2>
            <p className="text-gray-400 text-xl dark:text-gray-100">
              Help us spread the word about this job listing. It only takes a few seconds.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 space-x-1 gap-2 pr-4">
            <FacebookShareButton url={url} about={`${job.jobName}`}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton url={url} about={`${job.jobName}`} >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <LinkedinShareButton url={url}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <EmailShareButton url={url}>
              <EmailIcon size={32} round />
            </EmailShareButton>
          </div>
        </div>
        <div className="my-4 border-2 rounded-xl p-5 border-gray-600 shadow-md shadow-gray-100 gap-4 flex justify-between items-center">
          <div>
            <h2 className="font-bold text-2xl py-3 dark:text-white">Connect with the hiring team</h2>
            <p className="text-gray-400 text-xl dark:text-gray-100">
              Join our community to receive updates on jobs, including company news, job posting, and more.
            </p>
          </div>
          <button className="p-2 rounded-md text-white bg-primary">Connect</button>
        </div>
        <div className="my-10">
          <div className="my-6 flex items-center gap-3">
            <IoIosLink className="w-[52px] h-[52px] text-primary bg-neutral-200 p-2 rounded dark:bg-gray-800" />
            <CopyToClipboard text={url} onCopy={handleCopy}>
              <button className="flex items-center gap-3">
                <p className="text-gray-600 text-xl dark:text-gray-100">Copy link</p>
              </button>
            </CopyToClipboard>
            {copied ? <span className="text-primary">Copied to clipboard.</span> : null}
          </div>
        </div>
      </main>
    </motion.div>
  );
}

export default JobApply;
