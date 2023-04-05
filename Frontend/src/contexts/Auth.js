import {createContext, useContext, useEffect, useState} from "react";
import {useAddress, useContract, useContractWrite, useMetamask} from "@thirdweb-dev/react";

const AuthContext = createContext(undefined);

export const AuthContextProvider = ({ children }) => {
    const address = useAddress();
    const connect = useMetamask();

    // User.sol smart contract
    const { contract } = useContract(
        // "0x5cE82044550a64F77859C7b522A139C2617d6bEf"
        "0x9353C6a49470aa9cC585F2e5F84bA8dd7e16704D"
    );
    const { mutateAsync: createUser } = useContractWrite(contract, "createUser");
    const [userDetails, setUserDetails] = useState([]);

    useEffect( () =>{
        (async () => {
            try {
                const userDetails = await contract.call("users", address);
                setUserDetails(userDetails);
            } catch (e) {
                console.log("contract failed", e);
            }
        })();
    }, [contract, address])

  const checkUser = async (address) => {
    try {
        return await contract.call("userExists", address);
    } catch (e) {
        console.log("contract failed", e);
    }
  };
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
    const getUserDetails = async (address) => {
        try {
            return await contract.call("users", address);
        } catch (e) {
            console.log("contract failed", e);
        }
    };

  return (
    <AuthContext.Provider
      value={{
        address,
        contract,
        connect,
          userDetails,
        createUser: registerUser,
        checkUser,
        // getUserDetails
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
