import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import Home from "../../pages/Home";
import {Route, Switch, Redirect} from 'react-router-dom';
import {
    ABOUT,
    AGENTS,
    BLOG,
    BLOG_DETAIL,
    CONTACT, EMAIL,
    HOME,
    PROPERTIES,
    PROPERTY_DETAIL,
    SERVICES
} from "../../action/constants";
import About from "../../pages/About";
import Agents from "../../pages/Agents";
import Services from "../../pages/Services";
import Blog from "../../pages/Blog";
import Contact from "../../pages/Contact";
import PropertiesPage from "../../pages/Properties";
import BlogDetail from "../../pages/BlogDetail";
import PropertyDetail from "../../pages/PropertyDetail";
import {useContext, useEffect} from "react";
import {UserContext} from "../../contexts/UserContext";
import Loading from "../../components/layout/Loading";
import Email from "../../pages/Email";

const HomeLayout = () => {
    const {isLoading, doGetUser, user} = useContext(UserContext);
    /*eslint-disable */
    useEffect(() => {
        if (localStorage.getItem('token')) doGetUser(localStorage.getItem('token'))
    },[]);
    /*eslint-enable */

    return (
        <>
            <Loading isLoading={isLoading}/>
            <Header/>
            <Switch>
                <Route path="/" exact>
                    <Redirect to={HOME} />
                </Route>
                <Route path={HOME} exact component={Home}/>
                <Route path={ABOUT} exact component={About}/>
                <Route path={AGENTS} exact component={Agents}/>
                <Route path={SERVICES} exact component={Services}/>
                <Route path={PROPERTIES} exact component={PropertiesPage}/>
                <Route path={BLOG} exact component={Blog}/>
                <Route path={CONTACT} exact component={Contact}/>
                <Route path={BLOG_DETAIL} exact component={BlogDetail}/>
                <Route path={PROPERTY_DETAIL} exact component={PropertyDetail}/>
                <Route path={EMAIL} exact component={Email}/>
                {user?.role === 'admin' ? <Route path={EMAIL} exact component={Email}/> : ''}
            </Switch>
            <Footer/>
        </>
    )
}
export default HomeLayout;
