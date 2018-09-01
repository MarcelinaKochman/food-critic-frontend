import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Route} from "react-router-dom";
import RegisterPage from "./registration/RegisterPage";
import MainPage from "./MainPage";
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import NavBar from "./common/NavBar";
import {endpoints} from "./properties";
import LoginPage from "./login/LoginPage";
import RestaurantPage from "./restaurant/RestaurantPage";
import DishPage from "./restaurant/DishPage";

ReactDOM.render(
    <BrowserRouter>
        <div>
            <NavBar/>
            <Route path={endpoints.home} component={MainPage} exact={true} />
            <Route path={endpoints.register} component={RegisterPage} exact={true} />
            <Route path={endpoints.login} component={LoginPage} exact={true} />
            <Route path={endpoints.restaurant} component={RestaurantPage} exact={true} />
            <Route path={endpoints.dish} component={DishPage} exact={true} />
        </div>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();

