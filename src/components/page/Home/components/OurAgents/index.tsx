import Subheading from "../../../../common/Subheading";
import OurAgent from "../../../../common/OurAgent";

const OurAgents = ({users, getPropertiesByUser}: any) => {
    return (
        <section className="ftco-section ftco-agent">
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <Subheading sub={'AGENTS'} text={'Our Agents'} subColor={'#24a148'} textColor={'rgba(0,0,0,.8)'}/>
                </div>
                <div className="row">
                    {users?.slice(0, 3).map((item:any, index: any) => {
                        return (
                            <div style={{cursor: 'pointer'}} onClick={() => getPropertiesByUser(item)} key={index}>
                                <OurAgent position={item?.position}  avatar={item?.avatar} userName={item?.userName} quantityProperties={10}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default OurAgents;
