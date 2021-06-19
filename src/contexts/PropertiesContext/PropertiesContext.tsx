import {getProperties} from "../../action/property";

const PropertiesContext = ({children}: any) => {
    const doGetProperties = (currentPage: any, itemsPerPage: any) => {
        try {
            const response = getProperties(currentPage, itemsPerPage);
            console.log(response);
        } catch (e) {
            console.log(e)
        }
    }
}
export default PropertiesContext;
