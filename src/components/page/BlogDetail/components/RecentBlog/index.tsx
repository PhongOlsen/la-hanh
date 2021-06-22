import React from "react";
import RecentBlogItem from "./components/RecentBlogItem";

const RecentBlog = () => {
    return (
        <div className="sidebar-box">
            <h3>Recent Blog</h3>
            <RecentBlogItem
                picture={'images/ximage_1.jpg.pagespeed.ic.vmQWwyI747.jpg'}
                content={'Even the all-powerful Pointing has nocontrol about theblind texts'}
                time={'June 01, 2020'}
            />
            <RecentBlogItem
                picture={'images/ximage_2.jpg.pagespeed.ic.xwtUvSO42k.jpg'}
                content={'Even the all-powerful Pointing has nocontrol about theblind texts'}
                time={'June 01, 2020'}
            />
            <RecentBlogItem
                picture={'images/ximage_3.jpg.pagespeed.ic.pDhbIcoUfZ.jpg'}
                content={'Even the all-powerful Pointing has nocontrol about theblind texts'}
                time={'June 01, 2020'}
            />
        </div>
    )
}
export default RecentBlog;
