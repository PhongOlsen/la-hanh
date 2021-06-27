import {
    getProperties,
    getPropertiesByAddress,
    getPropertiesByUser,
    getPropertyByUserWithAddress
} from "../action/property";
import {createContext, useContext, useState} from "react";
import {UserContext} from "./UserContext";

export const PropertiesContext = createContext<any>({});
export const PropertiesContextProvider = ({children}: any) => {
    const {setIsLoading} = useContext(UserContext);
    const [properties, setProperties] = useState<any>([]);
    const [property, setProperty] = useState<any>();

    const doGetProperties = async (callback: any) => {
        setIsLoading(true);
        try {
            const properties: any = []
            const response = await getProperties();
            response.forEach(doc => {
                properties.push({
                    id: doc.id,
                    ...doc.data(),
                });
            });
            console.log(properties);
            setProperties(properties);
            if (callback) callback(properties);
        } catch (e) {
            console.log(e)
        }
        setIsLoading(false);
    }

    const doGetPropertyByUserWithAddress = async (userId: any, addressId: any, callback: any) => {
        setIsLoading(true);
        try {
            const properties: any = [];
            const response = await getPropertyByUserWithAddress(userId, addressId);
            response.forEach(doc => {
                properties.push({
                    id: doc.id,
                    ...doc.data(),
                });
            });
            setProperties(properties);
            if (callback) callback(properties);
        } catch (e) {
            console.error(e)
        }
        setIsLoading(false);
    }

    const doGetPropertiesByUser = async (userId: any, callback: any) => {
        console.log(userId);
        setIsLoading(true);
        try {
            const properties: any = [];
            const response = await getPropertiesByUser(userId);
            console.log(response);
            response.forEach(doc => {
                properties.push({
                    id: doc.id,
                    ...doc.data(),
                });
            });
            console.log(properties);
            setProperties(properties);
            if (callback) callback(properties);
        } catch (e) {
            console.error(e)
        }
        setIsLoading(false);
    }

    const doGetPropertiesByAddress = async (addressId: any, callback: any) => {
        setIsLoading(true);
        try {
            const properties: any = [];
            const response = await getPropertiesByAddress(addressId);
            response.forEach(doc => {
                properties.push({
                    id: doc.id,
                    ...doc.data(),
                });
            });
            setProperties(properties);
            if (callback) callback(properties);
        } catch (e) {
            console.error(e)
        }
        setIsLoading(false);
    }

    return (
        <PropertiesContext.Provider value={{
            properties,
            setProperties,
            property,
            setProperty,
            doGetProperties,
            doGetPropertyByUserWithAddress,
            doGetPropertiesByUser,
            doGetPropertiesByAddress
        }}>
            {children}
        </PropertiesContext.Provider>
    )
}
