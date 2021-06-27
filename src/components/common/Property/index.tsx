const Property = ({
                      typeProperties = 'Sale',
                      picture,
                      price,
                      area,
                      userPicture,
                      userName,
                      time,
                      title,
                      address
                  }: any) => {
    return (

        <div className="property-wrap">
                <span className="img" style={{backgroundImage: `url(${picture})`}}>
                    <div className="rent-sale">
                        <span className={typeProperties === 'Sale' ? 'sale' : 'rent'}>
                            {typeProperties}
                        </span>
                    </div>
                    <p className="price">
                        {typeProperties !== "Sale" ? <span className="orig-price">
                            {price} VND
                            <small> / mo</small>
                        </span> : <span className="orig-price">{price} VND</span>}
                    </p>
                </span>
            <div className="text">
                <ul className="property_list">
                    <li><span className=""/>{area} m2</li>
                </ul>
                <h3>{title}</h3>
                <span className="location">{address}</span>
                <span className="d-flex align-items-center justify-content-center btn-custom">
                            <span className="fa fa-link"/>
                        </span>
                <div className="list-team d-flex align-items-center mt-2 pt-2 border-top">
                    <div className="d-flex align-items-center">
                        <div className="img"
                             style={{backgroundImage: `url(${userPicture})`}}/>
                        <h3 className="ml-2">{userName}</h3>
                    </div>
                    <span className="text-right">{time} weeks ago</span>
                </div>
            </div>
        </div>
    )
}
export default Property;
