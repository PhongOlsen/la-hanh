import Subheading from "../../../../common/Subheading";
import Blog from "../../../../common/Blog";
import Paniganate from "../../../../common/Paniganate";

const Blogs = ({paniganate, subheading = true}: any) => {
    return (
        <section className="ftco-section ftco-no-pt">
            <div className="container">
                {subheading ?
                    <div className="row justify-content-center mb-5">
                        <Subheading sub={'BLOG'} text={'Recent Blog'} subColor={'#24a148'} textColor={'rgba(0,0,0,.8)'}/>
                    </div> : ''
                }
                <div className="row d-flex">
                <Blog createdAt={'June 01,2020'} title={'Why Lead Generation is Key for Business Growth'} picture={'images/image_1.jpg'} />
                <Blog createdAt={'June 01,2020'} title={'Why Lead Generation is Key for Business Growth'} picture={'images/image_2.jpg'} />
                <Blog createdAt={'June 01,2020'} title={'Why Lead Generation is Key for Business Growth'} picture={'images/image_3.jpg'} />
                <Blog createdAt={'June 01,2020'} title={'Why Lead Generation is Key for Business Growth'} picture={'images/image_4.jpg'} />
                </div>
                {paniganate ? <Paniganate/> : ''}
            </div>
        </section>
    )
}
export default Blogs
