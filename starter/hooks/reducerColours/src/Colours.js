import React, {useReducer} from "react";
import "./Colours.css";
import {reducer} from "./reducer";
import { ADD_COLOUR, SHRINK, NO_DUPLICATES, SORT, ROTATE, EMPTY, NO_ORANGE} from "./actions";

const Colours = () => {
	
	const [colours, dispatch] = useReducer(reducer, []);

	const addColour = c => dispatch({ type: ADD_COLOUR, payload: c });

	return (
		<section className="demo">

			<h2>useReducer Hook</h2>
			
			<section className="flex palette">
				{colours.map((c, n) => (
					<p className="colour" key={n} style={{backgroundColor:c}}>&nbsp;</p>
				))}
			</section>

			<section className="flex">				
				<section onClick={() => addColour("blue")}>BLUE</section>
				<section onClick={() => addColour("green")}>GREEN</section>
				<section onClick={() => addColour("red")}>RED</section>
				<section onClick={() => addColour("orange")}>ORANGE</section>
			</section>

			<section className="flex">
				<p className="button" onClick={() => dispatch({ type: SHRINK })}>Shrink</p>
				<p className="button" onClick={() => dispatch({ type: NO_DUPLICATES })}>No-Duplicates</p>
				<p className="button" onClick={() => dispatch({ type: SORT })}>Sort</p>
				<p className="button" onClick={() => dispatch({ type: ROTATE })}>Rotate</p>
				<p className="button" onClick={() => dispatch({ type: EMPTY })}>Empty</p>
				<p className="button" onClick={() => dispatch({ type: NO_ORANGE })}>No Orange</p>
			</section>
		</section>
	);
}

export {Colours};
