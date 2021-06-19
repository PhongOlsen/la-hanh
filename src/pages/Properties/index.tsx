import React from 'react';
import Banner from "../../components/common/Banner";
import Search from "../../components/common/Search";
import Properties from "../../components/page/Home/components/Properties";

const PropertiesPage = () => {
    return (
        <>
            <Banner
                title={'SERVICES'}
                content={'Services'}
                picture={'images/xbg_1.jpg.pagespeed.ic.XHJORU-GJg.jpg'}
            />
            <Search/>
            <Properties paniganate={true}/>
        </>

    );
}

export default PropertiesPage;
