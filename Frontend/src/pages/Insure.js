import React, { useState } from "react";
import { useAddress, useContract, useContractWrite } from "@thirdweb-dev/react";

export default function Insure() {
  const { contract } = useContract(
    "0x2Fa55514cc1ff38ede2D4a929133856724A824f7"
  );
  const { mutateAsync: authorize, isLoading } = useContractWrite(
    contract,
    "authorize"
  );
  const address = useAddress();

  const [form, setForm] = useState({});

  const handleFieldChange = async (field, e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!address) {
      alert("Wallet not connected");
      return;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Insure your health..
        </h2>
        <div className="mt-6 border-t border-gray-200 pt-6">
          <p className="text-lg text-gray-500">
            <form
              className="w-full grid-cols-12 shadow-md rounded p-10"
              onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Amount to Insure
                </label>
                <input
                  readOnly
                  value={address}
                  className="shadow appearance-none border-0 rounded w-full py-2 px-3
                   text-gray-700 leading-tight focus:shadow-outline"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="amount"
                >
                  Amount to Insure
                </label>
                <input
                  required
                  name="amount"
                  value={form.name}
                  placeholder="0.1"
                  onChange={(e) => handleFieldChange("amount", e)}
                  className="shadow appearance-none border rounded w-full py-2 px-3
                   text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                />
              </div>
              <div className="md:flex md:items-center">
                <div className="md:w-1/3" />
                <div className="md:w-2/3">
                  <button
                    disabled={isLoading}
                    onChange={handleFieldChange}
                    className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline 
                    focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="submit"
                  >
                    {isLoading ? "Loading ..." : "Insure"}
                  </button>
                </div>
              </div>
            </form>
          </p>
        </div>
      </div>
    </div>
  );
}
