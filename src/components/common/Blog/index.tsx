import {useHistory} from "react-router-dom";
import {BLOG_DETAIL} from "../../../action/constants";
const Blog = ({createdAt, title, picture}: any) => {
    const history = useHistory();
    return (
        <div onClick={() => history.push(BLOG_DETAIL)} className="col-md-3 d-flex">
            <div className="blog-entry justify-content-end">
                <div className="text">
                    <span className="block-20 img"
                          style={{backgroundImage: `url(${picture})`}}>
                    </span>
                    <div className="meta mb-3">
                        <div>{createdAt}</div>
                        <div>Admin</div>
                        <div><span className="meta-chat"><span className="fa fa-comment"/> 3</span>
                        </div>
                    </div>
                    <h3 className="heading">{title}</h3>
                </div>
            </div>
        </div>
    )
}
export default Blog;
