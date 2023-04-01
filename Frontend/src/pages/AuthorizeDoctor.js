import React from "react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";

export default function CreateDoctor() {
  const { contract } = useContract(
    "0x2Fa55514cc1ff38ede2D4a929133856724A824f7"
  );
  const { mutateAsync: authorize, isLoading } = useContractWrite(
    contract,
    "authorize"
  );

  return (
    <div classname="bg-gray-50 min-h-screen">
      <div classname="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 classname="text-3xl font-extrabold text-gray-900">Dashboard</h2>
        <div classname="mt-6 border-t border-gray-200 pt-6">
          <h3>Create Doctors</h3>
          <p classname="text-lg text-gray-500"></p>
          <form className="w-full max-w-sm">
            <div className="flex items-center border-b border-teal-500 py-2">
              <input
                className="appearance-none bg-transparent 
          border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight
           focus:outline-none"
                type="text"
                placeholder="Jane Doe"
                aria-label="Full name"
              />
              <button
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="button"
              >
                Sign Up
              </button>
              <button
                className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
                type="button"
              >
                Cancel
              </button>
            </div>
          </form>
          <p />
          <br />
        </div>
      </div>
    </div>
  );
}
