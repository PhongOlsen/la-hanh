import {createContext, useContext} from "react";
import {UserContext} from "./UserContext";
import {sendEmail} from "../action/contact";

export const ContactContext = createContext<any>({});
export const ContactContextProvider = ({children}: any) => {
    const {setIsLoading} = useContext(UserContext);
    const doGetSendEmail = async (content: any) => {
        setIsLoading(true);
        content.createdAt = new Date().toISOString();
        try {
            const response = await sendEmail(content);
            console.log(response);
        } catch (e) {
            console.error(e);
        }
        setIsLoading(false);
    }

    return (
        <ContactContext.Provider value={{
            doGetSendEmail
        }}>
            {children}
        </ContactContext.Provider>
    )
}
