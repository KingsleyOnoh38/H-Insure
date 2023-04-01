import React from "react";

function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">About</h2>
        <div className="mt-6 border-t border-gray-200 pt-6">
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
          <p className="text-lg text-gray-500">
            Our team is dedicated to creating innovative blockchain solutions
            that empower users and make their lives easier. If you have any
            questions about our HealthInsure smart contract, please don't
            hesitate to contact us!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
