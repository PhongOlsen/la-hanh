import Banner from "../../components/common/Banner";
import Search from "../../components/common/Search";
import Services from "../../components/page/Home/components/Services";
import Properties from "../../components/page/Home/components/Properties";
import AddressProperties from "../../components/page/Home/components/AddressProperties";
import FeaturedProperties from "../../components/page/Home/components/FeaturedProperties";
import Posts from "../../components/common/Posts";
import HappyClients from "../../components/page/Home/components/HappyClients";
import OurAgents from "../../components/page/Home/components/OurAgents";
import Blogs from "../../components/page/Home/components/Blogs";
import {useContext, useEffect} from "react";
import {PropertiesContext} from "../../contexts/PropertiesContext";
import {AddressPropertyContext} from "../../contexts/AddressPropertyContext";
import {UserContext} from "../../contexts/UserContext";
import {useHistory} from "react-router-dom";
import {PROPERTIES, PROPERTY_DETAIL} from "../../action/constants";

const Home = () => {
    const history = useHistory();
    const {doGetProperties, properties, doGetPropertiesByUser, setProperty} = useContext(PropertiesContext);
    const {doGetAddress, address} = useContext(AddressPropertyContext);
    const {doGetUsers, users} = useContext(UserContext);

    /*eslint-disable */
    useEffect(() => {
        doGetProperties((properties: any) => {
            console.log(properties);
        });
    },[]);

    useEffect(() => {
        doGetAddress((address: any) => {
            console.log(address);
        })
    },[]);

    useEffect(() => {
        doGetUsers((users: any) => {
            console.log(users);
        })
    },[])
    /*eslint-enable */

    useEffect(() => {
        window.scroll(0, 0)
    }, []);

    const getPropertiesByUser = (user: any) => {
        if (user?.id) doGetPropertiesByUser(user?.id);
        history.push(PROPERTIES);
    }

    const getPropertyDetail = (item: any) => {
        setProperty(item);
        history.push(PROPERTY_DETAIL);
    }
    return (
        <>
            <Banner
                btnProperties={true}
                title={'T??m ng??i nh?? ho??n h???o t??? khu v???c c???a b???n.'}
                content={'T??? m???c th???p t???i 20 ???? la M???t con s??ng nh??? t??n l?? Duden ch???y qua v??? tr?? c???a h??? v?? cung c???p cho n?? nh???ng ch???t dinh d?????ng c???n thi???t.'}
                labelBtn={'Xem t???t c??? c??c thu???c t??nh'}
                picture={'images/xbg_1.jpg.pagespeed.ic.XHJORU-GJg.jpg'}
            />
            <Search bgSearch={true}/>
            <Services/>
            <Properties getPropertyDetail={getPropertyDetail} properties={properties} />
            <AddressProperties address={address}/>
            <FeaturedProperties/>
            <Posts/>
            {/*<Achievements/>*/}
            <HappyClients/>
            <OurAgents getPropertiesByUser={getPropertiesByUser} users={users}/>
            <Blogs/>
        </>
    )
}
export default Home;
