import React from "react";

const RecentBlogItem = ({picture, content, time,}: any) => {
    return (
        <div className="block-21 mb-4 d-flex">
                                <span className="blog-img mr-4"
                                      style={{backgroundImage: `url(${picture})`}}/>
            <div className="text">
                <h3 className="heading"><span>{content}</span></h3>
                <div className="meta">
                    <div><span><span className="icon-calendar"/> {time}</span></div>
                    <div><span><span className="icon-person"/> Admin</span></div>
                    <div><span><span className="icon-chat"/> 19</span></div>
                </div>
            </div>
        </div>
    )
}
export default RecentBlogItem;
