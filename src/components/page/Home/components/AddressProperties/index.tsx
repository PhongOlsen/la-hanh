import Subheading from "../../../../common/Subheading";
import AddressProperty from "../../../../common/AddressProperty";

const AddressProperties = () => {
    return (
        <section className="ftco-section ftco-no-pt">
            <div className="container">
                <Subheading sub={'What we offer'} text={'Featured Properties'} subColor={'#24a148'}
                            textColor={'rgba(0,0,0,.8)'}/>
                <div className="row">
                    <AddressProperty image={'images/place-2.jpg'} address={'Chicago'} quantity={20}/>
                    <AddressProperty image={'images/place-3.jpg'} address={'Chicago'} quantity={20}/>
                    <AddressProperty image={'images/place-1.jpg'} address={'Chicago'} quantity={20}/>
                </div>
            </div>
        </section>
    )
}
export default AddressProperties;
