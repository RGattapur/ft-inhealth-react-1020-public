
const draw = s => document.querySelector(".page").innerHTML += s;
draw("<p>JavaScript <span>ES6</span></p>")

const DENMARK = {
	lang: "Danish",
	capital: "Copenhagen"
}

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

const movie = { 
	title:"North By NorthWest",
	actor:"Gregory Peck", 
	studio:"Paramount", 
	oscar:"Best Score" 
}

const tour = [ "Norway","Denmark","Sweden","Finland","Iceland" ]

const flight = { from : { airport:"Gatwick",with:"BA" }, to : { airport:"Oslo",with:"Norwegian" }}

const degree = "york-msc-physics-2-2018-serc";

const quote = "Do not go gentle into that good night";

const holiday = [ {city:"Oslo",temp:-4}, {city:"Seville",temp:40 }]

const add = (a,b) => a+b;

const song = { title:"Something" };
// song.awards

const create = (c) => {
	const colour = c.toLowerCase();
	const fn = (animal) => `${colour} ${animal}`
	return fn
}

const animal = create("Green");

