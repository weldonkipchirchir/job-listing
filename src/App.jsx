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
import JobListing, {
  loader as JobListingLoader,
} from "./pages/user/JobListing";
import JobDetails, {
  loader as JobDetailsLoader,
} from "./pages/user/JobDetails";
import JobApply from "./pages/user/JobApply";
import FindJob from "./pages/user/FindJob";
import SavedJob from "./pages/user/SavedJobs";
import AboutUs from "./pages/user/AboutUs";
import Dashboard from "./pages/admin/Dashboard";
import JobListingAdmin, {loader as AdminListingLoader} from "./pages/admin/JobListing";
import AddJob from "./pages/admin/AddJob";
import Settings from "./pages/admin/Settings";
import ApplicationsPage, {loader as adminApplicationsLoader} from "./pages/admin/Applications";
import ApplicationDetailsPage from "./pages/admin/ApplicationDetails";
import ApplicationDetails from "./pages/user/JobApplicationsDetails";
import UserSettings from "./pages/user/UserSettings";
import LandingPage from "./pages/user/LandingPage";
import EditJob, {loader as EditLoader} from "./pages/admin/EditJob";
import { ProtectedRoute } from "./components/Protected";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route element={<ProtectedRoute />}>
        <Route
          path="/job-listing"
          element={<JobListing />}
          loader={JobListingLoader}
        />
        <Route path="/job-details">
          <Route
            path=":id"
            element={<JobDetails />}
            loader={JobDetailsLoader}
          />
        </Route>
        <Route path="job-apply" element={<JobApply />} />
        <Route path="/find-job" element={<FindJob />} />
        <Route path="/bookmarks" element={<SavedJob />} />
        <Route path="/user-settings" element={<UserSettings />} />
        <Route path="applications-info" element={<ApplicationDetails />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/jobs-listing" element={<JobListingAdmin />} loader={AdminListingLoader} />
        <Route path="/add-job" element={<AddJob />} />
        <Route path="/edit-job/:id" element={<EditJob />} loader={EditLoader}/>
        <Route path="/settings" element={<Settings />} />
        <Route path="/applications">
          <Route index element={<ApplicationsPage />} loader={adminApplicationsLoader}/>
          <Route
            path="application-details/:id"
            element={<ApplicationDetailsPage />}
          />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <div className="dark:bg-gray-900">
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
