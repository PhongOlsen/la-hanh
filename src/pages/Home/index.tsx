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
import {useEffect} from "react";
import {firestore} from "../../services/firebase/firebase";
import {FIRESTORE_PROPERTIES} from "../../action/constants";

const Home = () => {

    useEffect(() => {
        const test = async () => {
            try {
                const response = await firestore.collection(FIRESTORE_PROPERTIES).orderBy('id').startAfter(0).limit(5);
                const result = await response.get();
                console.log(response);
                console.log(result);
            } catch (e) {
                console.log(e)
            }
        }
        test();
    }, []);

    useEffect(() => {
        window.scroll(0,0)
    },[]);

    return (
        <>
            <Banner
                btnProperties={true}
                title={'Tìm ngôi nhà hoàn hảo từ khu vực của bạn.'}
                content={'Từ mức thấp tới 20 đô la Một con sông nhỏ tên là Duden chảy qua vị trí của họ và cung cấp cho nó những chất dinh dưỡng cần thiết.'}
                labelBtn={'Xem tất cả các thuộc tính'}
                picture={'images/xbg_1.jpg.pagespeed.ic.XHJORU-GJg.jpg'}
            />
            <Search bgSearch={true}/>
            <Services/>
            <Properties/>
            <AddressProperties/>
            <FeaturedProperties/>
            <Posts/>
            {/*<Achievements/>*/}
            <HappyClients/>
            <OurAgents/>
            <Blogs/>
        </>
    )
}
export default Home;
