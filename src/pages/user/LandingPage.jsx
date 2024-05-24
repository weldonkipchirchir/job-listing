import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] bg-white dark:bg-gray-900">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">
        Welcome to Our Platform
      </h1>
      <div className="flex justify-center gap-8">
        <Link
          to="/sign-up"
          className="bg-primary hover:bg-blue-600 text-white font-bold py-2 px-4 rounded dark:text-white"
        >
          Register as Admin
        </Link>
        <Link
          to="/sign-up"
          className="bg-primary hover:bg-green-600 text-white font-bold py-2 px-4 rounded dark:text-white"
        >
          Register as User
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
