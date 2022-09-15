import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";

export default function Login() {
  const [loggingIn, setLogginIn] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full items-center flex flex-col py-12 px-4 lg:px-8">
      <div className="w-full flex justify-center my-14">
        <Logo className="scale-150" />
      </div>

      <div className="mt-8 w-full sm:max-w-sm text-white">
        <div className="bg-primary-blue-medium py-8 px-4 shadow rounded-lg sm:rounded-2xl sm:px-10">
          <h2 className="text-4xl font-light text-white mb-10">
            {loggingIn ? "Login" : "Sign Up"}
          </h2>

          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email Address"
                  className="appearance-none focus:border-white placeholder:text-gray-500 caret-primary-red bg-transparent font-light block w-full px-3 py-2 border-b border-primary-blue-light shadow-sm placeholder-gray-400 focus:outline-none  sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Password"
                  className="appearance-none focus:border-white placeholder:text-gray-500 caret-primary-red bg-transparent font-light block w-full px-3 py-2 border-b border-primary-blue-light shadow-sm placeholder-gray-400 focus:outline-none  sm:text-sm"
                />
              </div>
            </div>
            {loggingIn ? (
              <> </>
            ) : (
              <div>
                <label htmlFor="confirm_password" className="sr-only">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="confirm_password"
                    name="confirm_password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Repeat Password"
                    className="appearance-none focus:border-white placeholder:text-gray-500 caret-primary-red bg-transparent font-light block w-full px-3 py-2 border-b border-primary-blue-light shadow-sm placeholder-gray-400 focus:outline-none  sm:text-sm"
                  />
                </div>
              </div>
            )}

            <div>
              <button
                aria-label={"Submit"}
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-light text-white bg-primary-red hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-red"
              >
                {loggingIn ? "Log into you account" : "Create an account"}
              </button>
            </div>

            <div className="text-white font-light flex w-full justify-center">
              <p>
                {loggingIn
                  ? "Don't have an account?"
                  : "Already have an account?"}
              </p>
              <button
                aria-label={loggingIn ? "Sign Up" : "Login"}
                type="button"
                onClick={() => {
                  setLogginIn(!loggingIn);
                }}
                className="text-primary-red ml-2"
              >
                {loggingIn ? "Sign Up" : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
