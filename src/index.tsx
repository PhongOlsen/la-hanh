import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Router, withRouter, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {PropertiesContextProvider} from "./contexts/PropertiesContext";
import {AddressPropertyContextProvider} from "./contexts/AddressPropertyContext";
import {UserContextProperty} from "./contexts/UserContext";
import {ContactContextProvider} from "./contexts/ContactContext";

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
        <UserContextProperty>
            <PropertiesContextProvider>
                <AddressPropertyContextProvider>
                    <ContactContextProvider>
                        <Router history={customHistory}>
                            <AppRootWithRouter/>
                        </Router>
                    </ContactContextProvider>
                </AddressPropertyContextProvider>
            </PropertiesContextProvider>
        </UserContextProperty>
    </React.StrictMode>
    ,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
