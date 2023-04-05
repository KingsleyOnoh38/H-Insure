import React from "react";
import { Link } from "react-router-dom";

import Steps from "../components/Steps";

export default function Home(props) {
  return (
    <div>
      <div className="relative px-4 pt-16 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
        <div className="max-w-xl mx-auto lg:max-w-screen-xl">
          <div className="mb-16 lg:max-w-lg lg:mb-0">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Welcome to H-Insure
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                H-Insure is decentralized health insurance platform powered by
                blockchain technology. With H-Insure, you can securely and
                transparently manage your health insurance coverage and ensure
                that your healthcare needs are met.
              </p>
            </div>
            <div className="flex items-center">
              <Link
                to="/signup"
                className="bg-cyan-500 hover:bg-cyan-600 inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
          <img
            src="https://media.istockphoto.com/id/1005014108/photo/individual-health-insurance-policy-and-stethoscope.jpg?s=1024x1024&w=is&k=20&c=9Q52AkV6_eVi9_VSTXdrM-CN2CDqJdmQ5ad4yVrpuKI="
            className="object-cover object-top w-full h-64 max-w-xl -mb-16 rounded shadow-2xl lg:ml-64 xl:ml-8 lg:-mb-24 xl:-mb-28 lg:h-auto lg:max-w-screen-md"
            alt=""
          />
        </div>
      </div>
      <Steps />
    </div>
  );
}
