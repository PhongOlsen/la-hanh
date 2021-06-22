import React, {useEffect} from 'react';
import Banner from "../../components/common/Banner";
import ContentDetail from "../../components/page/BlogDetail/components/ContentDetail";
import InputForm from "../../components/page/BlogDetail/components/InputForm";
import CategoryFilter from "../../components/page/BlogDetail/components/CategoryFilter";
import RecentBlog from "../../components/page/BlogDetail/components/RecentBlog";

const BlogDetail = () => {

    useEffect(() => {
        window.scroll(0,0)
    },[]);

    return (
        <>
            <Banner
                picture={'images/xbg_1.jpg.pagespeed.ic.XHJORU-GJg.jpg'}
                title={'BLOG'}
                content={'Blog'}
                title2={'Blog-Detail'}
            />
            <section className="ftco-section">
                <div className="container">
                    <div className="row">
                        <ContentDetail/>
                        <div className="col-md-4 sidebar ftco-animate">
                            <InputForm/>
                            <CategoryFilter/>
                            <RecentBlog/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogDetail;
