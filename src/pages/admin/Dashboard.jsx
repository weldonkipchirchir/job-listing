import { motion } from "framer-motion";
import { activity } from "../../utils/links";
import { LuActivity } from "react-icons/lu";

function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1.3 }}
      className="max-w-[90%] mx-auto"
    >
      <main className="padding min-h-[100vh]">
        <h2 className="text-4xl font-bold my-4">Welcome to your dashboard</h2>
        <p className="text-lg text-gray-400 mb-2">
          Here is a summary of your account activity
        </p>
        <div className="flex flex-wrap my-3 gap-4">
          <div className="flex-col items-center bg-[#F3F3F3] p-3 rounded-md flex-1">
            <h3 className="font-bold p-2">Active jobs</h3>
            <p className="font-bold p-2">3</p>
          </div>
          <div className="flex-col items-center bg-[#F3F3F3] p-3 rounded-md flex-1">
            <h3 className="font-bold p-2">New applications</h3>
            <p className="font-bold p-2">1</p>
          </div>
          <div className="flex-col items-center bg-[#F3F3F3] p-3 rounded-md flex-1">
            <h3 className="font-bold p-2">Total applications</h3>
            <p className="font-bold p-2">10</p>
          </div>
          <div className="flex-col items-center bg-[#F3F3F3] p-3 rounded-md flex-1">
            <h3 className="font-bold p-2">Total users</h3>
            <p className="font-bold p-2">10</p>
          </div>
        </div>

        <h2 className="font-bold text-xl my-2">Quick access</h2>
        <div className="my-5 bsorder-2 p-4 rounded-xl border-gray-600 shadow-md shadow-gray-100 gap-4 flex justify-between items-center">
          <div>
            <h2 className="font-bold text-2xl py-3">Create new job</h2>
            <p className="text-gray-400 text-xl">
              Post a job in minutes and start receiving applications.
            </p>
          </div>
          <button className="p-2 text-white rounded-md bg-primary">
            Create job
          </button>
        </div>
        <div className="my-5 bsorder-2 p-4 rounded-xl border-gray-600 shadow-md shadow-gray-100 gap-4 flex justify-between items-center">
          <div>
            <h2 className="font-bold text-2xl py-3">Invite your team</h2>
            <p className="text-gray-400 text-xl">
              Invite your team to collaborate on hiring and start using Jobly
              together.
            </p>
          </div>
          <button className="p-2 text-white rounded-md bg-primary">
            Invite team
          </button>
        </div>
        <h2 className="font-bold text-xl my-8">Recent Activity</h2>
        {activity.map((job, index) => (
          <div key={index} className="my-2 flex gap-3">
            <LuActivity className="w-9 h-9 text-primary" />
            <div>
              <h2 className="font-bold my-1">{job.job}</h2>
              <p className="text-gray-400 my-1">
                {job.time == 1 ? `${job.time} day ago` : `${job.time} days ago`}
              </p>
            </div>
          </div>
        ))}
      </main>
    </motion.div>
  );
}

export default Dashboard;
