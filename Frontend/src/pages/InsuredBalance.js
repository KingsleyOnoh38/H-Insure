function InsuredBalance({ uniqueId, balance }) {
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Unique ID: {uniqueId}
        </h2>
        <p className="text-lg text-gray-500 mt-2">
          Current Insured Balance: {balance}
        </p>
      </div>
    </div>
  );
}

export default InsuredBalance;
