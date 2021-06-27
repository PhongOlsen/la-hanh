import React from "react";
import Video from "../Video";
import Subheading from "../../../../common/Subheading";

const VideoProperty = ({picture, title, address}: any) => {
    return (
        <div className="row justify-content-center">
            <div className="col-md-12">
                <div className="property-details">
                    <Video picture={picture}/>
                    <Subheading sub={title} text={address} subColor={'rgba(0,0,0,.4)'} textColor={'rgba(0,0,0,.8)'}/>
                </div>
            </div>
        </div>
    )
}
export default VideoProperty;
