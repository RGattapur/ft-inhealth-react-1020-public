
import React from "react";

const Store = (props) => {

    const {match, location} = props;	
    const {city,addr} = props;

	return (
		<section>
			<h2>{ city }</h2>
			<p className="subtitle">{ addr }</p>
            <hr/>
            <p>Additional props <span>{JSON.stringify(match)}</span><span>{JSON.stringify(location)}</span></p>
		</section>
	)
}

export {Store}