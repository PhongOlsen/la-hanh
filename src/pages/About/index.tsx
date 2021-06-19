import Banner from "../../components/common/Banner";
import Posts from "../../components/common/Posts";
import Achievements from "../../components/page/Home/components/Achievements";
import HappyClients from "../../components/page/Home/components/HappyClients";

const About = () => {
    return (
        <>
            <Banner
                picture={'images/xbg_1.jpg.pagespeed.ic.XHJORU-GJg.jpg'}
                title={'About'}
                content={'About'}
            />
            <Posts/>
            <Achievements/>
            <HappyClients/>
        </>
    )
}
export default About;
