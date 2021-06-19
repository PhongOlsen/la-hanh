import Service from "../../../../common/Service";

const Services = () => {
    return (
        <section className="ftco-section ftco-no-pb ftco-no-pt bg-primary">
            <div className="container">
                <div className="row d-flex no-gutters">
                    <Service icon={'flaticon-business'} title={'Trusted by Thousands'}
                             content={'A small river named Duden flows by their place and supplies it with the necessary regelialia.'}/>
                    <Service icon={'flaticon-home'} title={'Wide Range of Properties'}
                             content={'A small river named Duden flows by their place and supplies it with the necessary regelialia.'}/>
                    <Service icon={'flaticon-stats'} title={'Financing Made Easy'}
                             content={'A small river named Duden flows by their place and supplies it with the necessary regelialia.'}/>
                    <Service icon={'flaticon-quarantine'} title={'Locked in Pricing'}
                             content={'A small river named Duden flows by their place and supplies it with the necessary regelialia.'}/>
                </div>
            </div>
        </section>
    )
}
export default Services;
