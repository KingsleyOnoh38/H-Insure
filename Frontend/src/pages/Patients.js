import React from "react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";

export default function Patients() {
  const { contract } = useContract(
    "0x2Fa55514cc1ff38ede2D4a929133856724A824f7"
  );
  const { mutateAsync: authorize, isLoading } = useContractWrite(
    contract,
    "authorize"
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Dashboard</h2>
        <div className="mt-6 border-t border-gray-200 pt-6">
          <h3>Create Doctors</h3>
          <p className="text-lg text-gray-500">
            Our H-hInsure smart contract is designed to provide users with a
            secure and reliable way to manage their healthcare insurance. By
            storing user data on the blockchain, our smart contract ensures that
            user information is tamper-proof and transparent. This helps prevent
            fraud and abuse, while also providing users with greater control
            over their healthcare coverage.
          </p>
          <br />
          <p className="text-lg text-gray-500">
            With H-Insure, users can generate a unique ID that serves as their
            insurance identifier, and set the amount of insurance they want to
            purchase. Doctors can then use this insurance to provide medical
            services to the user, and the smart contract will automatically
            deduct the amount from the user's insurance balance.
          </p>
          <br />
          <h2>Doctors</h2>
          <p className="text-lg text-gray-500"></p>
        </div>
      </div>
    </div>
  );
}
