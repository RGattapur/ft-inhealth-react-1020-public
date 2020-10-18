
import React from "react";
import logo from './images/hipster.png' ;
import "./Hipster.css";
/*
import {BrowserRouter,Link,Route, Switch, Redirect} from "react-router-dom";
import {randomStore} from "./utils/utils";
import {Products} from "./Products";
import {Home} from "./Home";
import {Admin} from "./Admin";
import {Error} from "./Error";

import {Store} from "./Store";
*/

//  <Link>, <Redirect> change the current route.
//  <Route>, <Switch> react to route-changes and render components/functions.
//  BrowserRouter is a context-provider
//  The router passes additional props into components: history, location, match, staticContext

const Hipster = () => {

	return (
		<section>

			<nav>
				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="/products">Products</a></li>
					<li><a href="/store">Store</a></li>
					<li><a href="/admin">Admin</a></li>
				</ul>
			</nav>

			<img src={logo} alt="Hipster"/>

		</section>
	);
}

export default Hipster;
