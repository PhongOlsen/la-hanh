import Banner from "../../components/common/Banner";
import Posts from "../../components/common/Posts";
import HappyClients from "../../components/page/Home/components/HappyClients";
import {useEffect} from "react";

const About = () => {

    useEffect(() => {
        window.scroll(0, 0)
    }, []);

    return (
        <>
            <Banner
                picture={'images/xbg_1.jpg.pagespeed.ic.XHJORU-GJg.jpg'}
                title={'About'}
                content={'About'}
            />
            <Posts/>
            {/*<Achievements/>*/}
            <HappyClients/>
        </>
    )
}
export default About;
