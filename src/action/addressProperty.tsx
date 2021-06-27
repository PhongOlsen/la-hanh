import {firestore} from "../services/firebase/firebase";
import {FIRESTORE_PROPERTY_ADDRESS} from "./constants";

export const getAddressProperty = () => {
    return firestore.collection(FIRESTORE_PROPERTY_ADDRESS).get()
}
