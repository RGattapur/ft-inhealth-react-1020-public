## Framework Training
## REACT 
## Exercise NATIONS
## August 2019
____

- This exercise uses the **map** function to **iterate** over an array of objects.
- **Composition** is introduced to use instances of one component inside another component.

#### Installation
- Install the project from the terminal.

		npm install
		npm run start
		
#### Mapping data into markup 

- A common pattern in React is to **map** over an array of data and return markup, such as an unordered list.  
- We can review these concepts in the **browser console** using plain Javascript.

		let basket = [ "Apples", "Pears" ];
		basket.map( f => "<li>" + f + "</li>" )

- This code creates an array of strings containing HTML list-item markup.

		["<li>Apples</li>", "<li>Pears</li>"]
		
- By adding the functional reduce method, we can concatenate all the array elements into a string.

		basket.map( f => "<li>" + f + "</li>" ).reduce((a,b) => a+b )
		// Creates: "<li>Apples</li><li>Pears</li>"
		
- The code can be refactored into a function.

		let turnArrayIntoList = data => "<ul>" + data.map( f => "<li>" + f + "</li>" ).reduce((a,b) => a+b ) + "</ul>";

- The result of a call to this function can be injected into the DOM.

		document.querySelector("body").innerHTML = turnArrayIntoList( [ "Apples", "Pears" ] )

#### Pass country data into the Nation component

- The files **cities/japan.js** and **cities/spain.js** define data describing cities.
- We want to pass this data into a React component as a **prop** and then iterate over the data using **map**.

		let es = {
		    name : "Spain",
		    cities :[
		        { name: "Seville", region: "Andalusia", 
		        temp: 88, id: 1007 },
		        { name: "Trujillo", region: "Extremadura", 
		        temp: 64, id: 1046 }
		    ]
		}
		
		export { es };
		
- In **index.js** import the data and pass it as **prop** named country into the Nation component.

		import { es } from "./cities/spain";
		
		ReactDOM.render( <Nation country={es}/> , spain ); 
		
- Inside the component, add debugging to confirm what is passed in.
- *Note the use of JSX className. This avoids a conflict with Javascript keyword class.*

		{ JSON.stringify( this.props.country ) }
        
#### Iterating over the cities data

- Create a cities variable using **destructuring**.

		let { cities } = this.props.country;
		
- Iterate over the cities array using map.

		{cities.map(city => <p className="city">{city.name}</p>)}
		
- This works but generates an error. 
- React wants **unique keys** on each iterated element.
- Add a key attribute using the ID property in each city.
- Add the region as a SPAN within the paragraph.
		
				{cities.map(city => (
					<p key={city.id} className="city">
						{city.name}
						<span>{city.region}</span>
					</p>
				))}

#### Composition

- Our components should reflect the structure of the data we are working with. Here we have two nations which each contain multiple cities.
- We can define a new **City component** to display just one city.
- And then use **composition** to map over multiple instances of this City component in the render method of the Nation component.
- The City component is **stateless** and could be defined with either ES5 or ES6 function syntax.

		let City = ({name,region}) => <p className="city">{name}<span>{region}</span></p>
		
- We can then map over the cities arrays passing props down to instances of the City component.

		{cities.map((c,n) => 
		<City name={c.name} region={c.region} key={c.id} />)}
		
- We can use the spread operator as shorthand to avoid naming each prop.

		{cities.map((c,n) => <City {...c} key={c.id} />)}
		
- Add code in **index.js** to implement this example for both Spain and Japan.