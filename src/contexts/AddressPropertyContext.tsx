import {createContext, useContext, useState} from "react";
import {getAddressProperty} from "../action/addressProperty";
import {UserContext} from "./UserContext";

export const AddressPropertyContext = createContext<any>({});
export const AddressPropertyContextProvider = ({children}: any) => {
    const {setIsLoading} = useContext(UserContext);
    const [address, setAddress] = useState([]);

    const doGetAddress = async (callback: any) => {
        setIsLoading(true);
        try {
            const address: any = [];
            const response = await getAddressProperty();
            response.forEach(doc => {
                address.push({
                    id: doc.id,
                    ...doc.data(),
                });
            });
            setAddress(address);
            if (callback) callback(address)
        } catch (e) {
            console.error(e);
        }
        setIsLoading(false);
    }


    return (
        <AddressPropertyContext.Provider value={{
            address,
            setAddress,
            doGetAddress
        }}
        >
            {children}
        </AddressPropertyContext.Provider>
    )
}
