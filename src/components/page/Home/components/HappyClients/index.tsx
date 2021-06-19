import Subheading from "../../../../common/Subheading";
import HappyClient from "../../../../common/HappyClient";

const HappyClients = () => {
    return (
        <section className="ftco-section testimony-section bg-light">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <Subheading sub={'Testimonial'} text={'Happy Clients'} subColor={'#24a148'} textColor={'rgba(0,0,0,.8)'}/>
                    </div>
                    <div className="row ftco-animate">
                        <div className="col-md-12">
                            <div className="carousel-testimony owl-carousel">
                                <HappyClient
                                 content={'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'}
                                 userPicture={'images/xperson_1.jpg.pagespeed.ic.P4pHl6glbj.jpg'}
                                 userName={'Roger Scott'}
                                 officeUser={'Marketing Manager'}
                                />
                                <HappyClient
                                 content={'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'}
                                 userPicture={'images/xperson_1.jpg.pagespeed.ic.P4pHl6glbj.jpg'}
                                 userName={'Roger Scott'}
                                 officeUser={'Marketing Manager'}
                                />
                                <HappyClient
                                 content={'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'}
                                 userPicture={'images/xperson_1.jpg.pagespeed.ic.P4pHl6glbj.jpg'}
                                 userName={'Roger Scott'}
                                 officeUser={'Marketing Manager'}
                                />
                                <HappyClient
                                 content={'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'}
                                 userPicture={'images/xperson_1.jpg.pagespeed.ic.P4pHl6glbj.jpg'}
                                 userName={'Roger Scott'}
                                 officeUser={'Marketing Manager'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}
export default HappyClients;
