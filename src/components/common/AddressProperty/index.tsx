const AddressProperty = ({image, address, quantity}: any) => {
    return (
        <div className="col-md-4">
            <span className="search-place img"
                  style={{backgroundImage: `url(${image})`}}>
                <div className="desc">
                    <h3><span>{address}</span></h3>
                    <span>{quantity} Properties</span>
                </div>
            </span>
        </div>
    )
}
export default AddressProperty;
