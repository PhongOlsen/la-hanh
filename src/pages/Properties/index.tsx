import React, {useContext, useEffect} from 'react';
import Banner from "../../components/common/Banner";
import Search from "../../components/common/Search";
import Properties from "../../components/page/Home/components/Properties";
import {PropertiesContext} from "../../contexts/PropertiesContext";

const PropertiesPage = () => {
    const {properties, setProperty} = useContext(PropertiesContext);

    useEffect(() => {
        window.scroll(0, 0)
    }, []);

    const getPropertyDetail = (property: any) => {
        setProperty(property);
    }

    return (
        <>
            <Banner
                title={'SERVICES'}
                content={'Services'}
                picture={'images/xbg_1.jpg.pagespeed.ic.XHJORU-GJg.jpg'}
            />
            <Search/>
            <Properties getPropertyDetail={getPropertyDetail} properties={properties} paniganate={true}/>
        </>

    );
}

export default PropertiesPage;
