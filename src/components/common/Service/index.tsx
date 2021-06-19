const Service = ({icon, title, content} : any) => {
    return (
        <div className="col-md-3 d-flex align-items-stretch ftco-animate">
            <div className="media block-6 services services-bg d-block text-center px-4 py-5">
                <div className="icon d-flex justify-content-center align-items-center"><span
                    className={icon}/></div>
                <div className="media-body py-md-4">
                    <h3>{title}</h3>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    )
}
export default Service;
