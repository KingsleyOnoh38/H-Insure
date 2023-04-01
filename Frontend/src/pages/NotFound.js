import React from "react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";

export default function NotFound() {
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
        <h2 className="text-3xl font-extrabold text-gray-900">Error 404</h2>
        <div className="mt-6 border-t border-gray-200 pt-6">
          <h3>Page not Found</h3>
        </div>
      </div>
    </div>
  );
}
