import {createContext, useContext} from "react";
import {useAddress, useContract, useContractWrite, useMetamask,} from "@thirdweb-dev/react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const { contract } = useContract(
    "0x83C0511Ca308909b494A72a5879b5cc9790F7D1f"
  );
  // User.sol smart contract
  const { mutateAsync: createUser } = useContractWrite(contract, "createUser");

  const address = useAddress();
  const connect = useMetamask();

  const registerUser = async (form) => {
    try {
      const data = await createUser([
        address, // owner or creator
        form.role, // Role of the user
        form.name, // The name of the user
      ]);

      // contract successful..
      console.info("contract call successs", data);
    } catch (err) {
      console.log("contract failed", err);
    }
  };

  const checkUser = async (address) => {
    try {
        return await contract.call("userExists", address);
    } catch (e) {
        console.log("contract failed", e);
    }
  };

  const getRole = async (address) => {
    return await contract.call("getRole", address);
  };

  // const isRegistered = async () => {
  //   const userIsRegistered = await checkUser();
  //   if (address === userIsRegistered) return true;
  // };

  return (
    <AuthContext.Provider
      value={{
        address,
        contract,
        connect,
        createUser: registerUser,
        checkUser,
        // isRegistered,
        getRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
