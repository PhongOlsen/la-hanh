import {
    NavLink
} from "react-router-dom";
import {
    ABOUT,
    AGENTS,
    BLOG,
    CONTACT,
    PROPERTIES,
    SERVICES,
    HOME
} from "../../../action/constants";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
            <div className="container">
                <NavLink className="navbar-brand" to={HOME}>Ecoverde</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                        aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"/> Menu
                </button>
                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><NavLink to={HOME} className="nav-link">Home</NavLink></li>
                        <li className="nav-item"><NavLink to={ABOUT} className="nav-link">About</NavLink></li>
                        <li className="nav-item"><NavLink to={AGENTS} className="nav-link">Agent</NavLink></li>
                        <li className="nav-item"><NavLink to={SERVICES} className="nav-link">Services</NavLink></li>
                        <li className="nav-item"><NavLink to={PROPERTIES} className="nav-link">Properties</NavLink></li>
                        <li className="nav-item"><NavLink to={BLOG} className="nav-link">Blog</NavLink></li>
                        <li className="nav-item"><NavLink to={CONTACT} className="nav-link">Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Header;
