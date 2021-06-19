import Banner from "../../components/common/Banner";
import React from "react";
import VideoProperty from "../../components/page/Property-Detail/components/VideoProperty";
import Features from "../../components/page/Property-Detail/components/Features";
import Description from "../../components/page/Property-Detail/components/Description";
import Navbar from "../../components/page/Property-Detail/components/Navbar";

const PropertyDetail = () => {
    return (
        <>
            <Banner
                picture={'images/xbg_1.jpg.pagespeed.ic.XHJORU-GJg.jpg'}
                title={'PROPERTIES'}
                content={'Properties'}
                title2={'Property-Detail'}
            />
            <section className="ftco-section ftco-property-details">
                <div className="container">
                    <VideoProperty/>
                    <div className="row">
                        <div className="col-md-12 pills">
                            <div className="bd-example bd-example-tabs">
                                <Navbar/>
                                <div className="tab-content" id="pills-tabContent">
                                    <Features/>
                                    <Description/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default PropertyDetail;
