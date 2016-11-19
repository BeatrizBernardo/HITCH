import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory, DefaultRoute, Link, RouteHandler } from "react-router";


import PaginaPrincipal from "./pages/PaginaPrincipal";
import PaginaEvento from "./pages/PaginaEvento";

const app = document.getElementById('app');

/**
 * render principal
 */
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={PaginaPrincipal}>
            <Route path="paginaEvento" component={PaginaEvento}></Route>
        </Route>
    </Router>,
    app);


/**
 * só para testes da paginaEvento
 */
/*ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={PaginaEvento}>
            
        </Route>
    </Router>,
    app);*/