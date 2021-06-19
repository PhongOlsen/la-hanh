const Banner = ({btnProperties, title, content, labelBtn, picture, title2}: any) => {
    return (
        <section className="hero-wrap"
                 style={{backgroundImage: `url(${picture})`}}
                 data-stellar-background-ratio="0.5">
            <div className="overlay"/>
            <div className="container">
                <div className="row no-gutters slider-text align-items-center">
                    {btnProperties ?
                        <div className="col-lg-7 col-md-6 d-flex align-items-end">
                            <div style={{textAlign: 'left'}} className="text">
                                <h1 className="mb-4">{title}</h1>
                                <p style={{fontSize: '18px'}}>{content}</p>
                                <p className="btn btn-primary py-3 px-4">{labelBtn}</p>
                            </div>
                        </div> :
                        <div className="col-md-12 ftco-animate pb-0 text-center">
                            <p className="breadcrumbs">
                                <span className="mr-2">
                                    <span>Home<i className="fa fa-chevron-right"/>
                                    </span>
                                </span>
                                <span className="mr-2">
                                    <span>{title}<i className="fa fa-chevron-right"/>
                                </span>
                                </span>
                                {title2 ? <span>{title2}</span> : ''}
                            </p>
                            <h1 className="mb-3 bread">{title}</h1>
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}
export default Banner;
