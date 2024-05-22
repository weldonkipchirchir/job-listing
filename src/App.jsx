import { lazy, Suspense } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const Layout = lazy(() => import("./components/user/Layout"));
const Error = lazy(() => import("./components/Error"));
const NotFound = lazy(() => import("./components/NotFound"));
const Home = lazy(() => import("./pages/user/Home"));
import SignUp from "./pages/user/SignUp";
import SignIn from "./pages/user/SIgnIn";
import JobListing from "./pages/user/JobListing";
import JobDetails from "./pages/user/JobDetails";
import JobApply from "./pages/user/JobApply";
import FindJob from "./pages/user/FindJob";
import SavedJob from "./pages/user/SavedJobs";
import AboutUs from "./pages/user/AboutUs";
import Dashboard from "./pages/admin/Dashboard";
import JobListingAdmin from "./pages/admin/JobListing";
import AddJob from "./pages/admin/AddJob";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/job-listing" element={<JobListing />} />
      <Route path="/job-details" element={<JobDetails />} />
      <Route path="/job-apply" element={<JobApply />} />
      <Route path="/find-job" element={<FindJob />} />
      <Route path="/saved-jobs" element={<SavedJob />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/jobs-listing" element={<JobListingAdmin />} />
      <Route path="/add-job" element={<AddJob />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex items-center justify-center">
            <l-pinwheel
              size="35"
              stroke="3.5"
              speed="0.9"
              color="black"
            ></l-pinwheel>
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

export default App;
