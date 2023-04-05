import {createContext, useContext} from "react";
import {useAddress, useContract, useContractWrite, useMetamask} from "@thirdweb-dev/react";
import {useAuthContext} from "./Auth";

const InsureContext = createContext(undefined);

export const InsureContextProvider = ({ children }) => {
    const { userDetails } = useAuthContext();
    const address = useAddress();
    const connect = useMetamask();

    // HealthInsure.sol
    const { contract } = useContract("0x0b69bf6E9CdE35a5524bdee7e40F5008F69a0Eb2");
    const { mutateAsync: setUser } = useContractWrite(contract, "setUser")

    const insureUser = async (form) => {
        try {
            const data = await setUser([
                address,
                userDetails['name'],
                form.amountInsured
            ]);
            console.info("contract call successs", data);
        } catch (err) {
            console.error("contract call failure", err);
        }
    }

    return(<InsureContext.Provider value={{
        address,
        contract,
        insureUser
    }}
    >
        {children}
    </InsureContext.Provider>);
};

export const useInsureContext = () => useContext(InsureContext);