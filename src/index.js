import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { Router, Switch, Route } from "react-router-dom";
import thunk from 'redux-thunk';
import reducers from "./reducers";

import AuthLayout from "./layouts/Auth.js";
import RtlLayout from "./layouts/RTL.js";
import AdminLayout from "./layouts/Admin.js";

import "./style/main.scss";

import history from './history';

import Layout from "./components/layout";

import SignIn from './components/auth/signin';
import SignUp from './components/auth/signup';
import Account from "./components/account/account";

import Shop from "./components/shop/shop";
import Review from "./components/order/review";
import Shipping from "./components/information/shipping";
import Payment from "./components/information/payment";

import Home from "./components/home/home";
import Brands from './components/brands/brands';
import BrandContent from "./components/brands/brandsContent";
import BrandContentPage from "./components/brands/brandsContentPage";
import Resources from "./components/resources/resources";

import ShowVideo from "./components/showVideo";

import PromotionsContainer from './components/promotions/promotionsContainer';
import PromotionsDetail from './components/promotions/promotionsDetail';
import WhoWeAre from './components/whoWeAre';
import ContactUsContainer from './components/contact-us/contactUsContainer';
import ResourcesContainer from './components/resources/resourcesContainer';
import NoMatch from 'components/noMatch';
import OrderConfirmation from 'components/order/orderConfrimation';
import BrandsPhasePage from 'components/brands/brandsPhasePage';

const createStoreWithMiddleware = applyMiddleware(thunk)(compose((window.devToolsExtension ? window.devToolsExtension(): f => f)(createStore)))
require('dotenv').config()

ReactDOM.render(

    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Layout>
          <Switch>
            {/* <Route path="/" exact component={SignIn}/> */}
            <Route path="/" exact component={Home}/>

            <Route path="/signin" exact component={SignIn}/>
            <Route path="/signup" exact component={SignUp}/>

            <Route path="/account" exact component={Account}/>
            
            <Route path="/shop" exact component={Shop}/>
            <Route path="/order/review" exact component={Review} />

            <Route path="/information/shipping" exact component={Shipping} />
            <Route path="/information/payment" exact component={Payment} />

            {/* ORDER CONFIRMATION */}

            <Route path="/information/orderconfirmation" exact component={OrderConfirmation} />

            <Route path="/products/brand/:id" exact component={Brands} />
            <Route path="/products/brand/content/:id/:type" exact component={BrandContent} />
            
            <Route path="/products/brand/content/page/:id/:type" exact component={BrandContentPage} />

            <Route path="/phasepage/:id/:type" exact component={BrandsPhasePage} />

            <Route path="/resources/:id" exact component={Resources} />
            <Route path="/resources/content/:id" exact component={ResourcesContainer} />

            <Route path='/videos/webinars/:id' exact component={ShowVideo} />

            <Route path='/promotions' exact component={PromotionsContainer} />
            <Route path='/promotions/content/:id' exact component={PromotionsDetail} />

            <Route path='/whoweare' exact component={WhoWeAre} />

            <Route path='/contact-us' exact component={ContactUsContainer} />

            {/* DASHBOARD ROUTES */}

            <Route path="/rtl" component={RtlLayout} />
            <Route path="/auth" component={AuthLayout} />
            <Route path="/admin" component={AdminLayout} />
            {/* <Redirect from="/" to="/admin/dashboard" /> */}

            {/* NO MATCHING URL FOUND */}

            <Route component={NoMatch} />

          </Switch>
        </Layout>
      </Router>
    </Provider>
    , 
    
    
    
    
    
    
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
