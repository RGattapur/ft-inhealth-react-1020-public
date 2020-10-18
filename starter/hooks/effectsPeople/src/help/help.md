## Framework Training
## REACT 
## Exercise USERS
## August 2019
____

- The website **https://randomuser.me**/ exposes a public API for consuming **JSON data** about random users.
- This exercise uses the **Container-Presentation pattern** to consume/display data from the API using React.


#### Installation
- Install and run the starter version of the project.

		npm install
		npm start
		
#### Review the existing project.

- Navigate to this url in the browser.

		https://randomuser.me/api/?results=4
		
- This returns a single JSON object, whose **results property** contains an array of four objects, describing four people.
- We pass this url as a **prop** to the Users component.

		let randomUsers = "https://randomuser.me/api/?results=4";
		<Users path={randomUsers}/>
		
#### Asynchronous fetch

- We will use the browser **Promised-based Fetch API** to read JSON data from the randomuser.me site.		
- Fetch is built into modern browsers. *The create-react-app transpilation process polyfills Fetch for older browsers.*
- Fetching JSON data from an external site is an **asynchronous (async)** process.
- We cannot predict if the Fetch call will succeed or how long it will take.
- We need to ensure that the React component has successfully initialised/rendered on-screen (in the browser DOM) before we attempt an async Fetch call.
- This requires an awareness of **React Lifecycle** methods.
- In this case, the **componentDidMount()** method is automatically called by React once a component instance has successfully rendered in the DOM.
- This is a good place to make a Fetch call to retrieve data and then use that data to change the view of the component.

#### Update state with Fetch data

- We can define a users array in the component state, which will be populated by the Fetch API call.

	    constructor(props) {
	        super(props);
	        this.state = { users:[] };
	    }
	    
	- In componentDidMount, we make a Fetch call to the API.
		
			componentDidMount() {
				fetch( this.props.path )
			}
     
- Fetch returns an HTTP response object, **not** the data itself.

	   fetch( this.props.path )
     .then(response => response.json())
     
- The .json() method extracts data from the HTTP response object, and returns a resolved promise.
- If we chain a second THEN clause, it will be passed the data.

       fetch( this.props.path )
         .then(response => response.json())
         .then(data => console.log(data))
         
- We can set state with this data.

		.then(data => this.setState( { users: data.results }))
		
- When state changes, React will automatically call render again. We can display the data returned by the API.
- Use this debugging to check that the API is returning data.

		   render = () => 
		   <p>{ JSON.stringify( this.state.users )}</p>
		   
#### Stateless component for each user

- Create a stateless function called **DrawUser** to display each User.
- Using **composition**, map over this.state.user, passing one user object to each instance of DrawUser.

	    render = () => 
			<section>{ this.state.users.map( (u,n) => 
			<DrawUser key={n} user={u} />)}
			</section> 
			
						
			let DrawUser = ({user}) => {			
				return (
					<section>{ JSON.stringify( user )}</section>
				)
			}
			
- Use **destructuring** to extract the relevant fields from each user and display them.

			let { 
				name:{first,last}, 
				picture:{large}, 
				location:{city}, 
				email 
			} = user;
		
		    return (
		        <section>
		            <p className="name">{first} {last}</p>
		            <img src={large} alt={last}/>
		            <p>{city}</p>
		            <p>{email}</p>
		        </section>
		    )
		    
- This exercise has used the **Container-Presentation** pattern.
- The stateful class-based Users component contains data fetching logic and state.
- The stateless DrawUsers function contains no logic or state. 
- It is passed data via props and then renders it on screen.