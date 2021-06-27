import {firestore} from "../services/firebase/firebase";
import {FIRESTORE_USER} from "./constants";

export const getUsers = () => {
    return firestore.collection(FIRESTORE_USER).get();
}

export const getUser = (token: any) => {
    return firestore.collection(FIRESTORE_USER).doc(token).get();
}
