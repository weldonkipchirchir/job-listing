/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
"use client";
import { useState } from "react";
import { cn } from "../../../utils/cn";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { NavLink } from "react-router-dom";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { useNavigate , useLocation} from "react-router-dom";
import { createUser } from "../../hooks/api";

export function Signup() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
  });

  const location = useLocation(); 
  const role = location.state?.role || "user";
  const [passwordError, setPasswordError] = useState(null);
  const [signUpError, setSignUpError] = useState(null);
  const [status, setStatus] = useState("idle");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    try {
      const userData = {
        name: `${formData.firstname} ${formData.lastname}`,
        address: formData.address,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        role: role,
      };
      setPasswordError("");
      console.log("Form submitted", userData);
      await createUser(userData);
      setStatus("idle");
      navigate("/sign-in", { replace: true });
    } catch (err) {
      setSignUpError(err.message);
      setStatus("idle");
      console.log(err);
    }
  };

  return (
    <div className="w-full max-w-md p-4 mx-auto bg-white rounded-none shadow-lg md:rounded-2xl md:p-8 dark:bg-gray-800 shadow-slate-500">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Welcome to Jobly
      </h2>
      <p className="max-w-sm mt-2 text-sm font-bold text-neutral-600 dark:text-neutral-300">
        Sign Up
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col mb-4 space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              placeholder="Tyler"
              type="text"
              value={formData.firstname}
              onChange={handleChange}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              placeholder="Durden"
              type="text"
              value={formData.lastname}
              onChange={handleChange}
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Phone Number</Label>
          <Input
            id="phone"
            placeholder="+195 737 355 533"
            type="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Address</Label>
          <Input
            id="address"
            placeholder="314 Street"
            type="address"
            value={formData.address}
            onChange={handleChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="confirmPassword">Confirm password</Label>
          <Input
            id="confirmPassword"
            placeholder="••••••••"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </LabelInputContainer>
        {passwordError && (
          <p className="text-red-500 text-sm mb-4">{passwordError}</p>
        )}
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Signing up..." : "Sign up"} &rarr;
          <BottomGradient />
        </button>

        {signUpError && (
          <p className="error m-3 text-red-600 text-center">{signUpError}</p>
        )}

        <p className="text-center mt-4 dark:text-white">or sign up with</p>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-5 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <button
            className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="button"
          >
            <IconBrandGithub className="w-4 h-4 text-primary dark:text-neutral-300" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              GitHub
            </span>
            <BottomGradient />
          </button>
          <button
            className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="button"
          >
            <IconBrandGoogle className="w-4 h-4 text-primary dark:text-neutral-300" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              Google
            </span>
            <BottomGradient />
          </button>
        </div>
        <div className="pb-0 mt-6">
          <p className="text-lg dark:text-white">
            Have an account?
            <NavLink to="/sign-in" className="underline text-primary">
              {" "}
              Sign In
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 block w-full h-px transition duration-500 opacity-0 group-hover/btn:opacity-100 -bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="absolute block w-1/2 h-px mx-auto transition duration-500 opacity-0 group-hover/btn:opacity-100 blur-sm -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
