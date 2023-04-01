import { useState } from 'react';

function HealthForm(props) {
  const [name, setName] = useState('');
  const [amountInsured, setAmountInsured] = useState(0);
  const [doctorAddress, setDoctorAddress] = useState('');

  async function setUser() {
    const uniqueId = await props.healthInsure.methods.setUser(name, amountInsured).call({ from: props.currentUser });
    console.log('User set with ID:', uniqueId);
  }

  async function setDoctor() {
    await props.healthInsure.methods.setDoctor(doctorAddress).send({ from: props.currentUser });
    console.log('Doctor set with address:', doctorAddress);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="flex flex-col items-center justify-center w-full md:w-3/4 lg:w-1/2 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-4">User Information</h2>
        <form className="flex flex-col items-start justify-center w-full" onSubmit={e => { e.preventDefault(); setUser(); }}>
          <label className="text-lg font-bold mb-2" htmlFor="name">Name:</label>
          <input className="border border-gray-400 p-2 rounded-lg mb-4" type="text" id="name" value={name} onChange={e => setName(e.target.value)} required />

          <label className="text-lg font-bold mb-2" htmlFor="amountInsured">Amount Insured:</label>
          <input className="border border-gray-400 p-2 rounded-lg mb-4" type="number" id="amountInsured" value={amountInsured} onChange={e => setAmountInsured(e.target.value)} required />

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
        </form>
      </div>

      <div className="flex flex-col items-center justify-center w-full mt-8 md:w-3/4 lg:w-1/2 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Doctor Information</h2>
        <form className="flex flex-col items-start justify-center w-full" onSubmit={e => { e.preventDefault(); setDoctor(); }}>
          <label className="text-lg font-bold mb-2" htmlFor="doctorAddress">Doctor Address:</label>
          <input className="border border-gray-400 p-2 rounded-lg mb-4" type="text" id="doctorAddress" value={doctorAddress} onChange={e => setDoctorAddress(e.target.value)} required />

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default HealthForm;