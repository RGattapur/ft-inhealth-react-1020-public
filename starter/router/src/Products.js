import React from "react";

import { Route, Link, useRouteMatch } from "react-router-dom"; // useParams
import {make} from "./utils/utils";

const Products = (props) => {

	return (
		<section>
			<nav>
				<li><Link to="/hats">Hats</Link></li>
				<li><Link to="/boots">Boots</Link></li>
				<li><Link to="/shirts">Shirts</Link></li>
				<li><Link to="/jackets">Jackets</Link></li>
			</nav>
			<h2>Products</h2>
		</section>
	)
}
export {Products}
