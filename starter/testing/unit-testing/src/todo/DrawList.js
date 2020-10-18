
import React from 'react';

const DrawList = ({list,remove}) =>

<ul className="list">
	{list.map((item,n) =>
		<li key={item.id}>{item.desc}
			<span id={item.id} onClick={ () => remove(item.id)}>REMOVE</span>
		</li>
	)}
</ul>

export {DrawList}
