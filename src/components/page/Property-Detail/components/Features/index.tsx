import React from "react";
import FeatureItem from "../FeatureItem";

const Features = ({features}: any) => {
    return (
        <div className="tab-pane fade show active" id="pills-description" role="tabpanel"
             aria-labelledby="pills-description-tab">
            <ul className={'row features'}>
                {features?.map((item: any, index: any) => {
                    return (
                        <FeatureItem content={item}/>
                    )
                })}
            </ul>
        </div>
    )
}
export default Features;
