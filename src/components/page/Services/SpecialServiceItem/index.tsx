import React from 'react';

const SpecialServiceItem = ({svg, title, content}: any) => {
    return (
        <div className="col-md-3 d-flex align-items-stretch ftco-animate">
            <div className="media block-6 services d-block text-center px-3 pb-4">
                <div className="icon d-flex justify-content-center align-items-center"><span
                    className={svg}/></div>
                <div className="media-body py-md-4">
                    <h3>{title}</h3>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
}

export default SpecialServiceItem;
