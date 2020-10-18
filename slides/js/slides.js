
const slides = [

{ h : "React Components" , 
t : ["Components are the fundamental building block of React",
" Components combine logic, state, arguments, a view and a name into a cohesive reusable unit.",
" A Component accepts arguments/props and returns a rendered view/markup.",
`<pre><code>

const Capital = (props) => &lt;h1&gt;props.city&lt;/h1&gt;

</code></pre>`] },

// ===========================================================================

{ h : "Class-based components" , 
t : ["Components can be written as an ES6 class.",
" The component must have a render method which returns a view.",
`<pre><code>

class Nation extends Component {

    render() {
        return (
            &lt;section&gt;Oslo&lt;/section&gt;
        )
    }
}

</code></pre>`] },

// ===========================================================================

{ h : "Component props" , 
t : ["Arguments are passed into components as props.",
" Here the prop is destructured into a variable.",
`<pre><code>

class Nation extends Component {

    render() {
        const {city} = this.props;
        return (
            &lt;section&gt;{city}&lt;/section&gt;
        )
    }
}

</code></pre>`] },

// ===========================================================================

{ h : "Component composition" , 
t : ["The render method of a component can contain instances of other components.",
" Using composition, React applications become a hierarchy of components.",
`<pre><code>


render() {
    const {city} = this.props;
    return (
        &lt;section&gt;
            &lt;City name={city.name} /&gt;
        &lt;/section&gt;
    )
}


</code></pre>`] },

// ===========================================================================

{ h : "Component state" , 
t : ["Class components can define internal state in the constructor.",
" When state changes React will re-render the component view.",
`<pre><code>

constructor(props) {
    super(props);
    this.state = { temp:0 }
}

// Alternative ES7 syntax
state = { temp:0 }



</code></pre>`] },

// ===========================================================================

{ h : "Changing state" , 
t : ["State is only directly set in the constructor.",
" In other methods setState is a request to React to asynchonously change state.",
`<pre><code>

warmUp() {
    const {temp} = this.state;
    this.setState( { temp:temp+1 }, this.stateChanged )
}

stateChanged() {
    console.log(this.state)
}



</code></pre>`] },

// ===========================================================================

{ h : "Mapping over arrays of data" , 
t : ["React uses map to iterate over arrays of data and create markup.",
" Each iteration should have an associated unique key.",
" Here cities is an array of objects.",
" Multiple instances of the City component are created.",
`<pre><code>

<section>
    {cities.map((c,n) => &lt;City name={c.name} key={c.id} /&gt;)}
</section>



</code></pre>`] },

// ===========================================================================

{ h : "Spreading props" , 
t : ["The ES6 spread operator can be used to pass in multiple props.",
`<pre><code>

const c = {name:"Seville",region:"Andalusia"};

&lt;City name={c.name} region={c.region} /&gt;

// Passing in multiple props using ES6 spread operator.
&lt;City {...c} /&gt;

</code></pre>`] },

// ===========================================================================

{ h : "Stateless function components" , 
t : ["Components that do not need state can be written as simple functions",
" The function can accept props but cannot define state",
" Stateless components are simple, reliable, predictable and testable.",
`<pre><code>

const Capital = (props) => &lt;h1&gt;{props.city}&lt;/h1&gt;

</code></pre>`] },

// ===========================================================================


{ h : "Destructuring props" , 
t : ["Props are objects which can be destructured into variables as they are passed into components.",
`<pre><code>

const Capital = ({city,temp}) => &lt;h1&gt;{city}&lt;/h1&gt;

</code></pre>`] },

// ===========================================================================

{ h : "Scope and keyword THIS" , 
t : ["The runtime value of THIS inside a class method may vary.",
" Writing methods using arrow syntax is one way to bind the value of THIS.",
`<pre><code>

// THIS points at class instance.
empty = () => this.setState( { basket:[] }); 

render = () => &lt;p onClick={empty}&gt;Empty&lt;/p&gt;



</code></pre>`] },

// ===========================================================================


{ h : "Higher Order Components" , 
t : ["HOCS are functions which return a component.",
" HOCS create new components by combining existing components.",
" (React Hooks provide an alternative approach using functions.)",
`<pre><code>

const Merge = (data,View) => 
      class FetchComponent extends Component {
        render = () => <View/>
      }
}

// New component merges 2 components with data.
const CityTemps18 = Merge("spain-2018.json",TempView);


</code></pre>`] },

// ===========================================================================

{ h : "React Hooks" , 
t : ["Hooks create functions which retain state.",
" When state changes the function will re-render.",
" Hooks provide al alternative to class-based component development",
`<pre><code>

// useState() defines state variables and setter functions.
// useEffect() runs after a component re-renders


</code></pre>`] },

// ===========================================================================

{ h : "useState Hook" , 
t : ["The useState Hook defines a state variable and a function to change it.",
" When the state variable changes, the function re-renders.",
`<pre><code>

// Define a variable with an initial value of 0.
// Note the use of array destructuring.

const [score, setScore] = useState(0);


</code></pre>`] },

// ===========================================================================

{ h : "useState Hook" , 
t : ["This code changes state variable score.",
" The function will then re-render with the new state.",
`<pre><code>

const [score, setScore] = useState(0);

const up =()=> setScore(score+1);

&lt;p onClick={up}&gt;{score}&lt;/p&gt;


</code></pre>`] },

// ===========================================================================

{ h : "useEffect Hook" , 
t : ["A function will re-render after a state change.",
" The useEffect function runs after the re-render and can see updated state.",
" By default useEffect runs after every state change.",

`<pre><code>

const [score,setScore] = useState(0);

useEffect(() => {
    console.log(score);
});


</code></pre>`] },

// ===========================================================================


{ h : "useEffect Hook" , 
t : ["Here BOTH useEffect functions will run if EITHER state variable changes.",
" We need to connect specific useEffect functions to specific state data changes.",

`<pre><code>

const [score,setScore] = useState(0);
const [temp,setTemp] = useState(0);

useEffect(() => console.log(score));
useEffect(() => console.log(temp));


</code></pre>`] },

// ===========================================================================


{ h : "Dependency Arrays" , 
t : ["Dependency arrays decide when a useEffect function will run.",
" Here each useEffect function is connected to a specific state variable.",

`<pre><code>

const [score,setScore] = useState(0);
const [temp,setTemp] = useState(0);

useEffect(() => console.log(score), [score]);
useEffect(() => console.log(temp), [temp]);


</code></pre>`] },

// ===========================================================================

{ h : "Dependency Arrays and useEffect" , 
t : ["If a dependency array is empty, the associated useEffect function will run only once.",
" This pattern is useful for initialisation code.",

`<pre><code>

useEffect(() => {
    // Initialisation code will run only once.
}, [] );

</code></pre>`] },

// ===========================================================================

{ h : "Async code with useEffect" , 
t : ["The useEffect function is a good place to handle async requests such as Fetch API code.",

`<pre><code>

useEffect(() => {

    fetch(path)
    .then( r => r.json())
    .then(data=>console.log(data))
    .catch(e=>console.log(e))

}, [path] );

</code></pre>`] },

// ===========================================================================

{ h : "useReducer" , 
t : ["The useReducer Hook uses Redux-like patterns to isolate state changes into one place.",
" Actions are dispatched containing a payload and a type.",
" Actions are handled by a reducer function.",
" This pure function takes in current state and an action. It returns modified state.",

`<pre><code>
const [state, dispatch] = useReducer(reducer, data);

&lt;p onClick={() => dispatch({type:HYPHEN})}&gt;Hyphen&lt;/p&gt;
</code></pre>`] },

// ===========================================================================

{ h : "useReducer" , 
t : ["The reducer a pure function written in plain JavaScript",
" It takes in current-state and an action.",
" It returns modified state.",
" Typically this will be a series of CASE statements.",

`<pre><code>
const reducer = (state,action) => {
    switch (action.type) {
      case HYPHEN:
        return {phrase: state.phrase.split(" ").join("-")};
      default:
        return state;
    }
}
</code></pre>`] },

// ===========================================================================

{ h : "Custom Hooks" , 
t : ["Custom Hooks provide code reuse and encapsulate implementation details.",
" Typically a custom hook will contain/use built-in hooks",

`<pre><code>
const useRandom = (l) => { 
    const pick = () => l[Math.floor(Math.random()*l.length)]
    const [item,setItem] = useState(pick());
    const chooseRandom = () => setItem(pick())
    return [item,chooseRandom]
}

const [city,setCity] = useRandom(cities);

</code></pre>`] },

// ===========================================================================

{ h : "React Router" , 
t : ["React Router maps changes of browser url to components",
" This enables a single page React application to connect to the browser History API",

`<pre><code>

// Load the Products component when the path changes to /products
&lt;Route path="/products" component={Products} /&gt;

// Links change the route
&lt;Link to="/products"&gt;Products&lt;/Link&gt;

</code></pre>`] },

// ===========================================================================

]

