const Achievements = () => {
    return (
        <section className="ftco-counter img" id="section-counter">
            <div className="container">
                <div className="row pt-md-5">
                    <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
                        <div className="block-18 py-5 mb-4">
                            <div className="text text-border d-flex align-items-center">
                                <strong className="number" data-number={1000}>0</strong>
                                <span>Area <br/>Population</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
                        <div className="block-18 py-5 mb-4">
                            <div className="text text-border d-flex align-items-center">
                                <strong className="number" data-number={2500}>0</strong>
                                <span>Total <br/>Properties</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
                        <div className="block-18 py-5 mb-4">
                            <div className="text text-border d-flex align-items-center">
                                <strong className="number" data-number={500}>0</strong>
                                <span>Average <br/>House</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
                        <div className="block-18 py-5 mb-4">
                            <div className="text d-flex align-items-center">
                                <strong className="number" data-number={67}>0</strong>
                                <span>Total <br/>Branches</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Achievements;
