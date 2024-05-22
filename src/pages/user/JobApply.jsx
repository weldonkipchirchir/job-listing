import { motion } from "framer-motion";
import { jobApply } from "../../utils/links";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoIosLink } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";

function JobApply() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1.3 }}
      className="max-w-[90%] mx-auto" // Added max-w-[80%] and mx-auto
    >
      <main className="padding h">
        <h2 className="font-bold my-5 text-4xl">{jobApply.jobName}</h2>
        <div className="flex mb-4 mt-3">
          <p className="text-gray-400 pr-1">location: {jobApply.location} |</p>
          <p className="text-gray-400">Type: {jobApply.type}</p>
        </div>
        <div className="my-5 border-2 p-4 rounded-xl border-gray-600 shadow-md shadow-gray-100 gap-4 flex justify-between items-center">
          <div>
            <h2 className="font-bold text-2xl py-3">Share this job</h2>
            <p className="text-gray-400 text-xl">
              Help us spread the word about this job listing. It only takes a
              few seconds.
            </p>
          </div>
          <button className="p-2 text-white rounded-md bg-primary">Share</button>
        </div>
        <div className="my-4 border-2 rounded-xl p-5 border-gray-600 shadow-md shadow-gray-100 gap-4 flex justify-between items-center">
          <div>
            <h2 className="font-bold text-2xl py-3">
              Connect with the hiring team
            </h2>
            <p className="text-gray-400 text-xl">
              Join our community to receive updates on jobs, including company
              news, job posting, and more.
            </p>
          </div>
          <button className="p-2 rounded-md text-white bg-primary">Connect</button>
        </div>
        <div className="my-10">
          <div className="my-6 flex items-center gap-3">
            <IoShareSocialOutline className="w-[52px] h-[52px] text-primary bg-neutral-200 p-2 rounded" />{" "}
            <p className="text-gray-600 text-xl">Share on social media</p>
          </div>
          <div className="my-6 flex items-center gap-3">
            <IoIosLink className="w-[52px] h-[52px] text-primary bg-neutral-200 p-2 rounded" />{" "}
            <p className="text-gray-600 text-xl">Copy link</p>
          </div>
        </div>
        <div>
          <h2 className="font-bold my-5 text-2xl">How to apply</h2>
          <div className="flex gap-3 items-center">
            <TfiEmail className="w-[52px] h-[52px] text-primary bg-neutral-200 p-2 rounded" />{" "}
            <p className="text-gray-600 cursor-pointer text-xl">
              Email your resume to careers@acmeic.com
            </p>
          </div>
        </div>
      </main>
    </motion.div>
  );
}

export default JobApply;
