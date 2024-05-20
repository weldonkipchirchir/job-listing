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
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
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
