import { useState } from 'react';

function UseInsuranceForm(props) {
  const [uniqueId, setUniqueId] = useState('');
  const [amountUsed, setAmountUsed] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onUseInsurance(uniqueId, amountUsed);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="uniqueId">
          User Unique ID
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="uniqueId"
          type="text"
          placeholder="User Unique ID"
          value={uniqueId}
          onChange={(event) => setUniqueId(event.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="amountUsed">
          Amount Used
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="amountUsed"
          type="text"
          placeholder="Amount Used"
          value={amountUsed}
          onChange={(event) => setAmountUsed(event.target.value)}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Use Insurance
        </button>
      </div>
    </form>
  );
}

export default UseInsuranceForm;
