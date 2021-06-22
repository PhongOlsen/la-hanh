import {getProperties} from "../../action/property";
export const PropertiesContext = ({children}: any) => {
    const doGetProperties = (currentPage: any, itemsPerPage: any) => {
        try {
            const response = getProperties(currentPage, itemsPerPage);
            console.log(response);
        } catch (e) {
            console.log(e)
        }
    }
}
