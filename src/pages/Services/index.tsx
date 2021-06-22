import React, {useEffect} from 'react';
import Banner from "../../components/common/Banner";
import Services from "../../components/page/Home/components/Services";
import FeaturedProperties from "../../components/page/Home/components/FeaturedProperties";
import SpecialServices from "../../components/page/Services/SpecialServices";

const Service = () => {

    useEffect(() => {
        window.scroll(0, 0)
    }, []);

    return (
        <>
            <Banner
                title={'SERVICES'}
                content={'Services'}
                picture={'images/xbg_1.jpg.pagespeed.ic.XHJORU-GJg.jpg'}
            />
            <Services/>
            <FeaturedProperties/>
            <SpecialServices/>
        </>
    );
}

export default Service;
