import React, { useState } from "react";
import { useAddress } from "@thirdweb-dev/react";
import { useAuthContext } from "../contexts/Auth";
import { Link } from "react-router-dom";

export default function Signup() {
  const address = useAddress();
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [registered, setRegistered] = useState(false);
  const { createUser, checkUser } = useAuthContext();
  const [form, setForm] = useState({
    user: address ?? "",
    role: "",
    name: "",
  });

  const handleFieldChange = async (field, e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!address) {
      alert("Wallet not connected");
      return;
    }

    const userRegistered = await checkUser(address);
    // Check if user already signed contract..
    if (userRegistered === true) {
      setIsRegistered(true);
      return;
    }
    // Check if wallet is connected
    try {
      setIsLoading(true);
      const data = await createUser({ ...form });
      setIsLoading(false);
      setRegistered(true);
      console.info("contract call successs", data);
      // data.wait();
    } catch (err) {
      // setError(err.message);
      console.error("contract call failure", err);
    }
  };

  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Register</h2>
          <div className="flex flex-col items-center justify-center mt-6 border-t border-gray-200 pt-6">
            <h3 className="text-2xl">Signup here</h3>
            {isRegistered ? (
              <div className="text-red-700">
                You already have an account,{" "}
                <Link className="underline" to="/dashboard">
                  Goto Dashboard
                </Link>
              </div>
            ) : (
              ""
            )}
            {registered ? (
                <div className="text-green-700">
                  You are now register,{" "}
                  <Link className="underline" to="/dashboard">
                    Goto Dashboard
                  </Link>
                </div>
            ) : (
                ""
            )}
            <form
              className="w-full grid-cols-12 shadow-md rounded max-w-lg p-10"
              onSubmit={handleSubmit}
            >
              <div className="md:items-center mb-6">
                <label
                  className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
                  htmlFor="inline-password"
                >
                  Role
                </label>
                <select
                  id="role"
                  name="role"
                  required
                  value={form.role}
                  onChange={(e) => handleFieldChange("role", e)}
                  className="shadow appearance-none border rounded w-full py-2 px-3
                   text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select role</option>
                  <option value="patient">Patient</option>
                  <option value="doctor">Doctor</option>
                </select>
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
                  htmlFor="inline-full-name"
                >
                  Your Alias
                </label>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={(e) => handleFieldChange("name", e)}
                  className="shadow appearance-none border rounded w-full py-2 px-3
                   text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="inline-full-name"
                  type="text"
                  placeholder="Chris"
                />
              </div>
              <div className="">
                <button
                  disabled={isLoading}
                  onChange={handleFieldChange}
                  className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline 
                    focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  {isLoading ? "Loading ..." : "Sign Up"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
