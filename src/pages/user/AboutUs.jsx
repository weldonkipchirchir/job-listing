/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { GoPeople } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";

const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="max-w-4xl mx-auto px-4 py-8 min-h-[80vh]"
    >
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 dark:text-white">About Us</h1>
        <p className="text-lg text-gray-600 dark:text-gray-100">
          Welcome to our job listing platform. Here's a little bit about who we
          are and what we do.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div className="bg-white rounded-lg shadow-lg p-6 dark:text-white dark:bg-gray-800">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 dark:text-white">Our Mission</h2>
          <p className="text-lg text-gray-600 dark:dark:text-gray-100">
            Our mission is to connect job seekers with their dream opportunities
            and help companies find the best talents.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-800">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 dark:text-white">Our Vision</h2>
          <p className="text-lg text-gray-600 dark:text-gray-100">
            We envision a world where finding a job is easy and fulfilling for
            everyone, regardless of their background or circumstances.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex gap-4">
          <GoPeople className="w-7 h-7 text-primary" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4 dark:text-white">Our Team</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-800">
            <p><IoPersonOutline className="w-6 h-6 text-primary"/></p>
            <h3 className="text-xl font-bold text-gray-800 mt-2 dark:text-white">John Doe</h3>
            <p className="text-gray-600 dark:text-gray-100">Co-founder & CEO</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-800">
          <p><IoPersonOutline className="w-6 h-6 text-primary"/></p>
            <h3 className="text-xl font-bold text-gray-800 mt-2 dark:text-white">Jane Smith</h3>
            <p className="text-gray-600 dark:text-gray-100">Head of Operations</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-800">
          <p><IoPersonOutline className="w-6 h-6 text-primary"/></p>
            <h3 className="text-xl font-bold text-gray-800 mt-2 dark:text-white">David Lee</h3>
            <p className="text-gray-600 dark:text-gray-100">Lead Developer</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
