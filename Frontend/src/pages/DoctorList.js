import React from "react";
import { useState } from "react";

export default function DoctorList(props) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">All Doctors</h2>
        <div className="mt-6 border-t border-gray-200 pt-6">
          <p className="text-lg text-gray-500">
            Our H-hInsure smart contract is designed to provide users with a
          </p>
          <ul>
            {/*
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
            */}
            <li> Dr. Chris
              <button>Authorize</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
