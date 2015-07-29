import React from 'react';
import Router from 'react-router';

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
import Login from "./components/login";
import Home from './components/home';



var routes = (
    <Route path="/">
        <DefaultRoute handler={Home}/>
        <Route name="login" handler={Login}/>
        <Route name="home" handler={Home}/>
    </Route>
);

Router.run(routes, Router.HashLocation, (Root) => {
    React.render(<Root/>, document.body);
});
