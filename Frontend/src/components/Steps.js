const Step = () => {
    return (
      <div className="bg-slate-50 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="text-cyan-400 relative inline-block">
              <svg
                viewBox=""
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="b902cd03-49cc-4166-a0ae-4ca1c31cedba"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#b902cd03-49cc-4166-a0ae-4ca1c31cedba)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">How it Works</span>
            </span>{' '}
            
          </h2>
          <p className="text-justify text-gray-700 md:text-lg">
          H-Insure uses the Ethereum blockchain and the Solidity programming language to 
          provide a decentralized health insurance platform. The smart contract code is publicly 
          available and can be audited by anyone,ensuring that it is secure and free from vulnerabilities.

          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-4 sm:grid-cols-2">
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-cyan-400 text-2xl font-bold">Step 1</p>
              <svg
                className="w-6 text-gray-700 transform rotate-90 sm:rotate-0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  strokeMiterlimit="10"
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="15,5 22,12 15,19 "
                />
              </svg>
            </div>
            <p className="text-gray-600">
            To use H-Insure, simply create a new user account by providing your name and the amount of insurance 
            coverage you need.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-cyan-400 text-2xl font-bold">Step 2</p>
              <svg
                className="w-6 text-gray-700 transform rotate-90 sm:rotate-0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  strokeMiterlimit="10"
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="15,5 22,12 15,19 "
                />
              </svg>
            </div>
            <p className="text-gray-600">
            Your account will be assigned a unique ID that is derived from your name using a secure 
            hashing algorithm.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-cyan-400 text-2xl font-bold">Step 3</p>
              <svg
                className="w-6 text-gray-700 transform rotate-90 sm:rotate-0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  strokeMiterlimit="10"
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="15,5 22,12 15,19 "
                />
              </svg>
            </div>
            <p className="text-gray-600">
            Once your account is created, authorized doctors can use your insurance coverage to pay for your 
            medical expenses.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-cyan-400 text-2xl font-bold">Success</p>
              <svg
                className="w-8 text-gray-600"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <polyline
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  points="6,12 10,16 18,8"
                />
              </svg>
            </div>
            <p className="text-gray-600">
            You can monitor your insurance balance and track your healthcare expenses through 
            our easy-to-use web interface.
            </p>
          </div>
        </div>
      </div>
    );
  };

  export default Step;