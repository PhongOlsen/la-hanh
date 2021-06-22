const OurAgent = ({avatar, userName, quantityProperties}: any) => {
    return (
        <div className="col-md-3">
            <div className="agent">
                <div className="img">
                    <img src={avatar} className="img-fluid"
                         alt="Colorlib Template"/>
                    <div className="desc">
                        <h3>{userName}</h3>
                        <p className="h-info"><span className="location">Listing</span> <span
                            className="details">{quantityProperties} Properties</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OurAgent;
