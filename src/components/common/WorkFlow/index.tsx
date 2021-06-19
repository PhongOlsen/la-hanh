const WorkFlow = ({index, title, content}: any) => {
    return (
        <div className="col-md-3 d-flex align-self-stretch ftco-animate">
            <div className="media block-6 services services-2">
                <div className="media-body py-md-4 text-center">
                    <div className="icon mb-1 d-flex align-items-center justify-content-center">
                        <span>{index}</span>
                        <img src="images/blob.svg" alt=""/>
                    </div>
                    <h3>{title}</h3>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    )
}
export default WorkFlow;
