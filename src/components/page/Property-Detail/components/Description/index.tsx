import React from "react";

const Description = ({description}: any) => {
    return (
        <div className="tab-pane fade" id="pills-manufacturer" role="tabpanel"
             aria-labelledby="pills-manufacturer-tab">
            <p>{description}</p>
        </div>
    )
}
export default Description;
