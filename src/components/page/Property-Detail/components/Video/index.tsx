import React from "react";

const Video = ({picture}: any) => {
    return (
        <div className="img"
             style={{backgroundImage: `url(${picture})`}}>
            {/*<a href="https://vimeo.com/45830194"*/}
            {/*   className="img-video popup-vimeo d-flex align-items-center justify-content-center">*/}
            {/*    <span className="fa fa-play"/>*/}
            {/*</a>*/}
        </div>
    )
}
export default Video;
