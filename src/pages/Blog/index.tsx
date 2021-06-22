import React, {useEffect} from 'react';
import Banner from "../../components/common/Banner";
import Blogs from "../../components/page/Home/components/Blogs";

const Blog = () => {

    useEffect(() => {
        window.scroll(0, 0)
    }, []);

    return (
        <>
            <Banner
                picture={'images/xbg_1.jpg.pagespeed.ic.XHJORU-GJg.jpg'}
                title={'BLOG'}
                content={'Blog'}
            />
            <div style={{marginTop: '100px'}}>
                <Blogs subheading={false} paniganate={true}/>
            </div>
        </>
    );
}

export default Blog;
