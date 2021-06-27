import Subheading from "../../../../common/Subheading";
import Property from "../../../../common/Property";
import Paniganate from "../../../../common/Paniganate";

const Properties = ({properties, paniganate, getPropertyDetail}: any) => {

    return (
        <section className="ftco-section">
            <div className="container">
                <Subheading sub={'What we offer'} text={'Featured Properties'} subColor={'#24a148'}
                            textColor={'rgba(0,0,0,.8)'}/>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            {properties?.map((item: any, index: any) => {
                                return (
                                    <div onClick={() => getPropertyDetail(item)} key={index} className="item col-md-4">
                                        <Property
                                            typeProperties={item?.typeProperties}
                                            picture={item?.picture}
                                            price={item?.price}
                                            area={item?.area}
                                            userPicture={item?.userPicture}
                                            userName={item?.userName}
                                            time={item?.time}
                                            title={item?.title}
                                            address={item?.address}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                {paniganate ? <Paniganate/> : ''}
            </div>
        </section>
    )
}
export default Properties;
