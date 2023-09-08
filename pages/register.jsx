import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useAuth } from "../context/auth/AuthContext";
import useCheckbox from "../hooks/inputs/useCheckbox";
import { createUser } from "../utils/api/users";
import ProtectedRoute from "../components/ProtectedRoute";
import { useTeams } from "../context/TeamsContext";

const positions = [
  {
    id: 1,
    value: "seniorFrontEndWebDeveloper",
    name: "Senior Front End Web Developer",
  },
  {
    id: 2,
    value: "juniorFrontEndWebDeveloper",
    name: "Junior Front End Web Developer",
  },
  {
    id: 3,
    value: "seniorBackEndWebDeveloper",
    name: "Senior Back End Web Developer",
  },
  {
    id: 4,
    value: "juniorFrontEndWebDeveloper",
    name: "Junior Back End Web Developer",
  },
  {
    id: 5,
    value: "seniorFullStackWebDeveloper",
    name: "Senior Full Stack Web Developer",
  },
  {
    id: 6,
    value: "juniorFullStackWebDeveloper",
    name: "Junior Full Stack Web Developer",
  },
  { id: 7, value: "createPosition", name: "Create Position" },
];

const register = () => {
  const router = useRouter();
  const {clearTeamsState} = useTeams();
  const {
    passwordHidden,
    confirmPasswordHidden,
    handlePasswordCheckbox,
    handleConfirmPasswordCheckbox,
  } = useCheckbox();
  const { register, authUser } = useAuth();

  const [form, setForm] = useState({
    displayname: "",
    username: "",
    email: "",
    position: "",
    customposition: "",
    password: "",
    confirmpassword: "",
  });

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.currentTarget.name.toLowerCase()]: e.currentTarget.value,
    });
  };

  const passwordMatch = () =>
    form.password === form.confirmpassword ? true : false;

  const validateForm = () => {
    if (passwordMatch()) {
      return true;
    } else {
      return false;
    }
  };

  const signup = async () => {
    if (validateForm()) {
      await register(form);
      router.push("/teams");
    }
  };

  useEffect(() => {
// clearTeamsState();
  }, [])

  return (
   
      <div className="bg-gray-800 w-screen h-screen flex flex-col justify-center items-center pt-10 md:pt-0">
        <div className="w-full sm:w-1/2 xl:w-1/3">
          {/* <div className="text-gray-300 mb-6 text-center font-bold text-3xl">Sign Up</div> */}
          <form className="bg-gray-900 p-6  w-[90%] rounded mx-auto mb-6">
            <div className="text-white text-xl font-semibold mb-4">Sign Up</div>
            <div className="mb-4">
              <label className="block text-gray-500 text-sm font-bold mb-2">
                Display Name
              </label>
              <input
                name="displayname"
                value={form.displayname}
                onChange={handleInputChange}
                className="shadow appearance-none bg-gray-800 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Display Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-500 text-sm font-bold mb-2">
                Username
              </label>
              <input
                name="username"
                value={form.username}
                onChange={handleInputChange}
                className="shadow appearance-none bg-gray-800 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-500 text-sm font-bold mb-2">
                Email
              </label>
              <input
                name="email"
                value={form.email}
                onChange={handleInputChange}
                className="shadow appearance-none bg-gray-800 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-500 text-sm font-bold mb-2">
                Position
              </label>
              <select
                onChange={handleInputChange}
                value={form.position}
                className=" bg-gray-800 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline "
                name="Position"
                id=""
              >
                {positions.map((position) => (
                  <option name="position" value={position.name}>
                    {position.name}
                  </option>
                ))}
              </select>
              {form.position === "Create Position" && (
                <div className="mt-4 mb-4">
                  <input
                    name="customposition"
                    value={form.customposition}
                    onChange={handleInputChange}
                    className="shadow appearance-none bg-gray-800 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="What role would you like?"
                  />
                </div>
              )}
            </div>
            <div className="mb-6">
              <label className="block text-gray-500 text-sm font-bold mb-2">
                Password
              </label>
              <input
                name="password"
                value={form.password}
                onChange={handleInputChange}
                className="shadow appearance-none bg-gray-800 border-red-500 rounded w-full py-2 px-3 text-gray-300 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type={passwordHidden ? "password" : "text"}
                placeholder="******************"
              />
              <p className="text-red-500 text-xs italic">
                Please choose a password.
              </p>
              <div className="flex items-center mt-2 space-x-2 text-sm">
                <input
                  className="cursor-pointer"
                  onChange={handlePasswordCheckbox}
                  type="checkbox"
                />
                <span className="text-gray-500">Show Password</span>
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-500 text-sm font-bold mb-2">
                Confirm Password
              </label>
              <input
                name="confirmpassword"
                value={form.confirmpassword}
                onChange={handleInputChange}
                className="shadow appearance-none bg-gray-800 border-red-500 rounded w-full py-2 px-3 text-gray-300 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type={confirmPasswordHidden ? "password" : "text"}
                placeholder="******************"
              />
              <p className="text-red-500 text-xs italic">
                Please choose a password.
              </p>
              <div className="flex items-center mt-2 space-x-2 text-sm">
                <input
                  className="cursor-pointer"
                  onChange={handleConfirmPasswordCheckbox}
                  type="checkbox"
                />
                <span className="text-gray-500">Show Password</span>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <button
                onClick={signup}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Register
              </button>
              <div>
                <span className="text-gray-300">Already have an account?</span>{" "}
                <span
                  onClick={() => router.push(`/login`)}
                  className="text-green-500 font-bold cursor-pointer"
                >
                  Sign In
                </span>
              </div>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2020 Acme Corp. All rights reserved.
          </p>
        </div>
      </div>
  );
};

export default register;
