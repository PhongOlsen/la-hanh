import Banner from "../../components/common/Banner";
import OurAgents from "../../components/page/Home/components/OurAgents";
import {useEffect} from "react";

const Agents = () => {

    useEffect(() => {
        window.scroll(0, 0)
    }, []);

    return (
        <>
            <Banner
                title={'AGENTS'}
                content={'Agents'}
                picture={'images/xbg_1.jpg.pagespeed.ic.XHJORU-GJg.jpg'}
            />
            <OurAgents/>
        </>
    )
}
export default Agents;
