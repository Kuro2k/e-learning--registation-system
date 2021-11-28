import React from 'react'

import {
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import Home from './home/home.page';
import Header from '../components/header/header.component';
import Footer from '../components/footer/footer.component';
import Login from './login/login.page';
import SignUp from './signup/signup.page';
import Cart from './cart/cart.component';
import Checkout from './checkout/checkout.page';

function Client() {
    return (
        <>
            <Header/>
            <Switch>
                <Route path="/checkout" exact component={Checkout}/>
                <Route path="/cart" exact component={Cart}/>
                <Route path="/signup" exact component={SignUp}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/" exact component={Home}/>
                <Route path="">
                    <Redirect/>
                </Route>
            </Switch>
            <Footer/>
        </>
    )
}

export default Client
