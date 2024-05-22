/* eslint-disable react/no-unescaped-entities */
import home from "../../assets/home.jpeg";
import SearchInput from "../../components/SearchInput";
import { CiBag1 } from "react-icons/ci";
import { jobListing } from "../../utils/links";
import { NavLink } from "react-router-dom";

const JobDetails = () => {
  const handleSearch = (searchTerm) => {
    // Perform your search logic here
    console.log(`Searching for: ${searchTerm}`);
  };
  return (
    <div className="bg-white min-h-screen flex justify-center">
      <div className="hidden max-w-[400px] relative md:flex">
        <div className="relative">
          <img
            src={home}
            alt="joblist"
            className="object-cover w-full h-[70%] rounded-lg"
          />
          <div className="hidden absolute inset-0 lg:flex items-center justify-center">
            <h1>hello</h1>
            <SearchInput
              placeholder="Search for products..."
              onSearch={handleSearch}
              className=" w-3/4 max-w-[320px]" // Adjust the width as needed
            />
          </div>
          <div>
            <h2 className="font-bold text-2xl pl-2 mt-5">Job Listings</h2>
            <div>
              <ul className="mt-4">
                {jobListing.map((job, index) => (
                  <li key={index} className=" flex items-center gap-4">
                    <CiBag1 className="w-10 h-10 text-primary" />
                    <div className=" flex-col my-3">
                      <p className="font-bold text-base">{job.jobName}</p>
                      <div className="flex gap-1 mt-2">
                        <p className="text-gray-500">{job.type},</p>
                        <p className="text-gray-500">{job.location}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Product Designer</h1>
            <p className="text-gray-600">Acme Inc.</p>
            <p className="text-gray-600">San Francisco, CA</p>
          </div>
          <NavLink to='/job-apply' className="bg-primary hover:bg-primary text-white font-bold py-2 px-4 max-sm:px-1 max-sm:py-1 rounded hover:shadow-md hover:shadow-black-100">
            Apply Now
          </NavLink>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Job Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">Employment type</p>
              <p className="font-bold">Full time</p>
            </div>
            <div>
              <p className="text-gray-600">Job function</p>
              <p className="font-bold">Design</p>
            </div>
            <div>
              <p className="text-gray-600">Industries</p>
              <p className="font-bold">Internet</p>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Job Description</h2>
          <p className="text-gray-600">
            We are looking for a Product Designer to join our team! As a Product
            Designer at Acme Inc., you will be responsible for creating and
            improving user interfaces for our products. You will work closely
            with our product and engineering teams to design features that are
            both beautiful and functional.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Requirements</h2>
          <ul className="list-disc list-inside">
            <li className="flex items-center mb-2">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>2+ years of experience as a Product Designer</span>
            </li>
            <li className="flex items-center mb-2">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Proficiency in design tools such as Figma or Sketch</span>
            </li>
            <li className="flex items-center mb-2">
              <svg
                className="w-5 h-5 text-gray-400 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-600">
                Strong understanding of user experience design principles
              </span>
            </li>
            <li className="flex items-center mb-2">
              <svg
                className="w-5 h-5 text-gray-400 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-600">
                Excellent written and verbal communication skills
              </span>
            </li>
            <li className="flex items-center mb-2">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Bachelor's degree in design or related field</span>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">How to Apply</h2>
          <p className="text-gray-600">
            To apply for this position, please send your resume and portfolio to
            careers@acme.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
