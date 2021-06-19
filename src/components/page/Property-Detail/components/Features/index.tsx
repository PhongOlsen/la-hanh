import React from "react";
import FeatureItem from "../FeatureItem";

const Features = () => {
    return (
        <div className="tab-pane fade show active" id="pills-description" role="tabpanel"
             aria-labelledby="pills-description-tab">
            <ul className={'row features'}>
                <FeatureItem content={'Floor Area: 1,300 SQ FT'}/>
                <FeatureItem content={'Floor Area: 1,300 SQ FT'}/>
                <FeatureItem content={'Floor Area: 1,300 SQ FT'}/>
                <FeatureItem content={'Floor Area: 1,300 SQ FT'}/>
                <FeatureItem content={'Floor Area: 1,300 SQ FT'}/>
                <FeatureItem content={'Floor Area: 1,300 SQ FT'}/>
                <FeatureItem content={'Floor Area: 1,300 SQ FT'}/>
                <FeatureItem content={'Floor Area: 1,300 SQ FT'}/>
                <FeatureItem content={'Floor Area: 1,300 SQ FT'}/>
            </ul>
        </div>
    )
}
export default Features;
