import Subheading from "../../../../common/Subheading";
import Property from "../../../../common/Property";
import Paniganate from "../../../../common/Paniganate";

const Properties = ({paniganate}: any) => {
    return (
        <section className="ftco-section">
            <div className="container">
                <Subheading sub={'What we offer'} text={'Featured Properties'} subColor={'#24a148'}
                            textColor={'rgba(0,0,0,.8)'}/>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <Property
                                typeProperties={'Sale'}
                                picture={'images/xwork-1.jpg.pagespeed.ic.kJbcYAoUnI.jpg'}
                                price={'300,000'}
                                area={'200'}
                                userPicture={'images/xperson_1.jpg.pagespeed.ic.P4pHl6glbj.jpg'}
                                userName={'La Thi Hanh'}
                                time={'2 weeks ago'}
                                title={'The Blue Sky Home'}
                                address={'Oakland'}
                            />
                            <Property
                                typeProperties={'Sale'}
                                picture={'images/xwork-1.jpg.pagespeed.ic.kJbcYAoUnI.jpg'}
                                price={'300,000'}
                                area={'300'}
                                userPicture={'images/xperson_1.jpg.pagespeed.ic.P4pHl6glbj.jpg'}
                                userName={'La Thi Hanh'}
                                time={'2 weeks ago'}
                                title={'The Blue Sky Home'}
                                address={'Oakland'}
                            />
                            <Property
                                typeProperties={'Sale'}
                                picture={'images/xwork-1.jpg.pagespeed.ic.kJbcYAoUnI.jpg'}
                                price={'300,000'}
                                area={'400'}
                                userPicture={'images/xperson_1.jpg.pagespeed.ic.P4pHl6glbj.jpg'}
                                userName={'La Thi Hanh'}
                                time={'2 weeks ago'}
                                title={'The Blue Sky Home'}
                                address={'Oakland'}
                            />
                        </div>
                    </div>
                </div>
                {paniganate ? <Paniganate/> : ''}
            </div>
        </section>
    )
}
export default Properties;
