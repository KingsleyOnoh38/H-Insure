import React from "react";
import { useState } from "react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";

export default function DoctorList(props) {
  const [authorizedDoctors, setAuthorizedDoctors] = useState([]);

  // // function to authorize a doctor
  // async function authorizeDoctor(doctorAddress) {
  //   await HealthInsure.methods
  //     .authorize(doctorAddress)
  //     .send({ from: props.currentUser });
  //   setAuthorizedDoctors([...authorizedDoctors, doctorAddress]);
  // }

  // // function to revoke authorization for a doctor
  // async function revokeAuthorization(doctorAddress) {
  //   await HealthInsure.methods
  //     .revokeAuthorization(doctorAddress)
  //     .send({ from: props.currentUser });
  //   const updatedAuthorizedDoctors = authorizedDoctors.filter(
  //     (address) => address !== doctorAddress
  //   );
  //   setAuthorizedDoctors(updatedAuthorizedDoctors);
  // }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">All Doctors</h2>
        <div className="mt-6 border-t border-gray-200 pt-6">
          <p className="text-lg text-gray-500">
            Our H-hInsure smart contract is designed to provide users with a
            secure and reliable way to manage their healthcare insurance. By
            storing user data on the blockchain, our smart contract ensures that
            user information is tamper-proof and transparent. This helps prevent
            fraud and abuse, while also providing users with greater control
            over their healthcare coverage.
          </p>
          {/* <ul>
            {props.doctors.map((doctorAddress) => (
              <li key={doctorAddress}>
                {doctorAddress}
                {authorizedDoctors.includes(doctorAddress) ? (
                  <button onClick={() => revokeAuthorization(doctorAddress)}>
                    Revoke Authorization
                  </button>
                ) : (
                  <button onClick={() => authorizeDoctor(doctorAddress)}>
                    Authorize
                  </button>
                )}
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  );
}
