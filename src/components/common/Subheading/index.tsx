const Subheading = ({sub, text, subColor, textColor} : any) => {
    return (
        <div className="row justify-content-center">
            <div className="col-md-12 heading-section text-center mb-5">
                <span style={{color: subColor}} className="subheading">{sub}</span>
                <h2 style={{color: textColor}} className="mb-2">{text}</h2>
            </div>
        </div>
    )
}
export default Subheading;
