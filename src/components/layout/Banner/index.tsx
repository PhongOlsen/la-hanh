const Banner = () => {
    return (
        <section className="hero-wrap"
                 style={{backgroundImage: 'url(images/xbg_1.jpg.pagespeed.ic.XHJORU-GJg.jpg)'}}
                 data-stellar-background-ratio="0.5">
            <div className="overlay"/>
            <div className="container">
                <div className="row no-gutters slider-text align-items-center">
                    <div className="col-lg-7 col-md-6 d-flex align-items-end">
                        <div className="text">
                            <h1 className="mb-4">Find Perfect <br/>House From Your Area.</h1>
                            <p style={{fontSize: '18px'}}>From as low as $20 A small river named Duden flows by
                                their place and
                                supplies it with the necessary regelialia.</p>
                            <p className="btn btn-primary py-3 px-4">View all properties</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Banner;
