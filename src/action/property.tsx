import {firestore} from "../services/firebase/firebase";
import {FIRESTORE_PROPERTIES} from "./constants";

export const getProperties = (currentPage: any, itemsPerPage: any) => {
    const startAt = currentPage * itemsPerPage - itemsPerPage;
    return firestore.collection(FIRESTORE_PROPERTIES).startAfter(startAt).limit(itemsPerPage);
}
