import React from 'react';
import './App.css';
import HomeLayout from "./layout/HomeLayout";
import {Switch} from "react-router-dom";
import PrivateRoute from "./index";

function App() {
  return (
    <div className="App">
        <Switch>
            <PrivateRoute path="/" component={HomeLayout}/>
        </Switch>
    </div>
  );
}

export default App;
