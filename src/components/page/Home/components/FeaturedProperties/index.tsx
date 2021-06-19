import Subheading from "../../../../common/Subheading";
import WorkFlow from "../../../../common/WorkFlow";

const FeaturedProperties = () => {
    return (
        <section className="ftco-section services-section bg-darken">
            <div className="container">
                <Subheading sub={'What we offer'} text={'Featured Properties'} subColor={'white'} textColor={'white'}/>
                <div className="row">
                    <WorkFlow
                        index={1}
                        title={'Meet Your Agent'}
                        content={'A small river named Duden flows by their place and supplies it with the necessary regelialia.'}
                    />
                    <WorkFlow
                        index={1}
                        title={'Meet Your Agent'}
                        content={'A small river named Duden flows by their place and supplies it with the necessary regelialia.'}
                    />
                    <WorkFlow
                        index={1}
                        title={'Meet Your Agent'}
                        content={'A small river named Duden flows by their place and supplies it with the necessary regelialia.'}
                    />
                    <WorkFlow
                        index={1}
                        title={'Meet Your Agent'}
                        content={'A small river named Duden flows by their place and supplies it with the necessary regelialia.'}
                    />
                </div>
            </div>
        </section>
    )
}
export default FeaturedProperties;
