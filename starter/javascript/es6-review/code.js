
// ======================================================
// UTILs

const draw = s => document.querySelector(".page").innerHTML += s;
draw("<p>JavaScript <span>ES6</span></p>")

// ======================================================
// LET, CONST

const DENMARK = {
	lang: "Danish",
	capital: "Copenhagen"
}

// ======================================================
// ARROW functions

// ======================================================
// CLASSES

class Movie {
	constructor(m){
		this.movie = m;
	}
	about() {
		console.log(this,this.movie);
	}	
}

const taxi = new Movie("Taxi Driver");
taxi.about();

// ======================================================

// Template literals allow multiple line strings with variable interpolation

const city = { name:"Seville",temp:40 }

const spain = [
	{ image: "sevilla.jpg", name: "Sevilla", region: "Andalusia", popl: 1.2, temp: 41.7, },
	{ image: "valencia.jpg", name: "Valencia", region: "Valencia", popl: 1.5, temp: 28.5, },
	{ image: "barcelona.jpg", name: "Barcelona", region: "Catalonia", popl: 4.0, temp: 40.1, },
	{ image: "granada.jpg", name: "Granada", region: "Andalusia", popl: 1.25, temp: 29.4, },
	{ image: "caceres.jpg", name: "Caceres", region: "Extremadura", popl: 0.1, temp: 26.5 },
	{ image: "alicante.jpg", name: "Alicante", region: "Valencia", popl: 0.7, temp: 24.5 },
	{ image: "zaragoza.jpg", name: "Zaragoza", region: "Aragon", popl: 0.7, temp: 20.1 },
	{ image: "vigo.jpg", name: "Vigo", region: "Galicia", popl: 0.2, temp: 22.4 }
];


// ======================================================
// Destructuring

const movie = { 
	title:"North By NorthWest",
	actor:"Gregory Peck", 
	studio:"Paramount", 
	oscar:"Best Score" 
}

const tour = [ "Norway","Denmark","Sweden","Finland","Iceland" ]

const flight = { from : { airport:"Gatwick",with:"BA" }, to : { airport:"Oslo",with:"Norwegian" }}

const degree = "york-msc-physics-2-2018-serc";

// ======================================================

// Defining a default function argument.

const quote = "Do not go gentle into that good night";

// ======================================================

// Spread operator

const holiday = [ {city:"Oslo",temp:-4}, {city:"Seville",temp:40 }]

// ======================================================

// nullish coalescing operator handles null/undefined arguments.
const add = (a,b) => (a ?? 0) + (b ?? 0)

// Elvis operator avoids throwing error on non-existent properties.
const song = { title:"Something" };
song.awards?.length;

// ======================================================
// ES6 modules
// Named exports from 1 file : export {double}
// Named imports into another: import {double} from "./utils.js"
// Module syntax requires web page runs from HTTP address.

// ======================================================

// CLOSURE.

const create = (c) => {
	const colour = c.toLowerCase();
	const fn = (animal) => `${colour} ${animal}`
	return fn
}

// Function animal retains a memory of/access to variable colour which was in scope at 
// the time the inner function was created.
const animal = create("Green");

animal("horse");
console.dir(animal);
