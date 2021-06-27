import {createContext, useState} from "react";
import {getUser, getUsers} from "../action/user";

export const UserContext = createContext<any>({});
export const UserContextProperty = ({children}: any) => {
    const [isLoading, setIsLoading] = useState(false);
    const [users, setUsers] = useState<any>([]);
    const [user, setUser] = useState<any>();

    const doGetUsers = async (callback: any) => {
        setIsLoading(true);
        try {
            const users: any = [];
            const response = await getUsers();
            response.forEach(doc => {
                users.push({
                    id: doc.id,
                    ...doc.data(),
                });
            });
            setUsers(users);
            if (callback) callback(users);
        } catch (e) {
            console.error(e)
        }
        setIsLoading(false);
    }

    const doGetUser = async (token: any, callback: any) => {
        setIsLoading(true);
        try {
            const response = await getUser(token.toString());
            setUser(response.data());
            if (callback) callback(response.data());
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <UserContext.Provider value={{
            users,
            setUsers,
            doGetUsers,
            isLoading,
            setIsLoading,
            doGetUser,
            user,
            setUser
        }}>
            {children}
        </UserContext.Provider>
    )
}
