import {firestore} from "../services/firebase/firebase";
import {FIRESTORE_EMAILS} from "./constants";

export const sendEmail = (content: any) => {
    return firestore.collection(FIRESTORE_EMAILS).add(content);
}
