const HappyClient = ({content, userPicture, userName, officeUser}: any) => {
    return (
        <div className="item col-md-4">
            <div className="testimony-wrap py-4">
                <div className="text">
                    <span className="fa fa-quote-left"/>
                    <p className="mb-4">{content}</p>
                    <div className="d-flex align-items-center">
                        <div className="user-img"
                             style={{backgroundImage: `url(${userPicture})`}}/>
                        <div className="pl-3">
                            <p className="name">{userName}</p>
                            <span className="position">{officeUser}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HappyClient;
