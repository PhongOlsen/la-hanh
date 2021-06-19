import React from "react";
import Video from "../Video";
import Subheading from "../../../../common/Subheading";

const VideoProperty = () => {
    return (
        <div className="row justify-content-center">
            <div className="col-md-12">
                <div className="property-details">
                    <Video/>
                    <Subheading sub={'OAKLAND'} text={'The Blue Sky Home'} subColor={'rgba(0,0,0,.4)'} textColor={'rgba(0,0,0,.8)'}/>
                </div>
            </div>
        </div>
    )
}
export default VideoProperty;
