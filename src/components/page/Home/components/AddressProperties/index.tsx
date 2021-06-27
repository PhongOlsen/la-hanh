import Subheading from "../../../../common/Subheading";
import AddressProperty from "../../../../common/AddressProperty";

const AddressProperties = ({address}: any) => {
    return (
        <section className="ftco-section ftco-no-pt">
            <div className="container">
                <Subheading sub={'What we offer'} text={'Featured Properties'} subColor={'#24a148'}
                            textColor={'rgba(0,0,0,.8)'}/>
                <div className="row">
                    {address?.slice(0,3).map((item: any, index: any) => {
                        return (
                            <AddressProperty image={item?.image} address={item?.address} quantity={20}/>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default AddressProperties;
