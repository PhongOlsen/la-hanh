import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Router, withRouter, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';

const AppRootWithRouter = withRouter(App);

const customHistory = createBrowserHistory();

const PrivateRoute = ({component: Component, ...rest}: any) => {
    return (
        <>
            <Route {...rest} render={(props) => {
                return (
                    <>
                        <Component {...props}/>
                    </>
                )
            }
            }/>
        </>
    )
}
export default PrivateRoute;

ReactDOM.render(
    <React.StrictMode>
        <Router history={customHistory}>
            <AppRootWithRouter/>
        </Router>
    </React.StrictMode>
    ,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
