import React from 'react';
import SpecialServiceItem from "../SpecialServiceItem";

const SpecialServices = () => {
    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center heading-section mb-5">
                        <span className="subheading">Services</span>
                        <h2 className="mb-3">Special Services</h2>
                    </div>
                </div>
                <div className="row">
                    <SpecialServiceItem
                         svg={'flaticon-home-repair'}
                         title={'Development'}
                         content={'A small river named Duden flows by their place and supplies it with the necessary regelialia.'}
                     />
                     <SpecialServiceItem
                         svg={'flaticon-sales'}
                         title={'Sales Marketing'}
                         content={'A small river named Duden flows by their place and supplies it with the necessary regelialia.'}
                     />
                     <SpecialServiceItem
                         svg={'flaticon-bank'}
                         title={'Brokerage'}
                         content={'A small river named Duden flows by their place and supplies it with the necessary regelialia.'}
                     />
                     <SpecialServiceItem
                         svg={'flaticon-team'}
                         title={'Property Management'}
                         content={'A small river named Duden flows by their place and supplies it with the necessary regelialia.'}
                     />
                </div>
            </div>
        </section>
    );
}

export default SpecialServices;
