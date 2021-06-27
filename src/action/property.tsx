import {firestore} from "../services/firebase/firebase";
import {FIRESTORE_PROPERTIES} from "./constants";

export const getProperties = () => {
    return firestore.collection(FIRESTORE_PROPERTIES).get();
}

export const getPropertyByUserWithAddress = (userId: any, addressId: any) => {
    return firestore.collection(FIRESTORE_PROPERTIES).where('userId', '==', userId).where('addressId','==', addressId).get();
}

export const getPropertiesByUser = (userId: any) => {
    return firestore.collection(FIRESTORE_PROPERTIES).where('userId', '==', userId).get();
}

export const getPropertiesByAddress = (addressId: any) => {
    return firestore.collection(FIRESTORE_PROPERTIES).where('addressId', '==', addressId).get();
}

// export const getProperty = (propertyId: any) => {
//     return firestore.collection(FIRESTORE_PROPERTIES).doc(propertyId).get();
// }
