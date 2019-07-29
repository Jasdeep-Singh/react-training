/*********** Routes for applications **************/
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../containers/home';
import Signup from '../containers/signup';
import Login from '../containers/login';
import Header from '../components/header';
import NotFound from '../components/NoFound';

const Routers = () => {
    return (            
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    );
};

export default Routers;