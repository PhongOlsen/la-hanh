import Subheading from "../../../../common/Subheading";
import OurAgent from "../../../../common/OurAgent";

const OurAgents = () => {
    return (
        <section className="ftco-section ftco-agent">
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <Subheading sub={'AGENTS'} text={'Our Agents'} subColor={'#24a148'} textColor={'rgba(0,0,0,.8)'}/>
                </div>
                <div className="row">
                    <OurAgent avatar={'images/xteam-1.jpg.pagespeed.ic.XdGG32VxIm.jpg'} userName={'Carlos Henderson'} quantityProperties={10}/>
                    <OurAgent avatar={'images/xteam-1.jpg.pagespeed.ic.XdGG32VxIm.jpg'} userName={'Carlos Henderson'} quantityProperties={10}/>
                    <OurAgent avatar={'images/xteam-1.jpg.pagespeed.ic.XdGG32VxIm.jpg'} userName={'Carlos Henderson'} quantityProperties={10}/>
                    <OurAgent avatar={'images/xteam-1.jpg.pagespeed.ic.XdGG32VxIm.jpg'} userName={'Carlos Henderson'} quantityProperties={10}/>
                </div>
            </div>
        </section>
    )
}
export default OurAgents;
