
class People{

	constructor(p) {
		this.people=p;
		this.init();
	}

	init() {
		this.peopleEl = document.querySelector(".people")
		this.chooseEl = document.querySelector(".choose")
		this.people.sort( () => Math.random() - 0.5);
		this.drawPeople();

		this.chooseEl.addEventListener( "click", this.choosePerson );

		document.querySelector(".question").textContent = localStorage.question ? localStorage.question : "Question";

		this.persons = document.querySelectorAll(".person")

		this.persons.forEach( person => person.addEventListener("click", this.removePerson ))
	}

	removePerson = e => {
		const name = e.currentTarget.getAttribute("data-person");
		this.people = this.people.filter( p => p !== name );
		
		e.currentTarget.remove();
	}

	choosePerson = e => {
		
		this.persons.forEach( person => person.classList.remove("faded"));

		this.selected = this.people[ Math.floor( Math.random() * this.people.length )];
	
		this.persons.forEach( p => {
			p.style.setProperty('--anim-time', (1+Math.random()) +'s');
			p.classList.add("rotate");
		})

		localStorage.question = document.querySelector(".question").textContent;

		window.setTimeout( this.stopAnim.bind(this), 2000 )
	}

	stopAnim() {
		this.persons.forEach( p => {
			p.classList.remove("rotate");
			p.classList.add("faded");
		})	
		
		const el = document.querySelector(`[data-person="${this.selected}"]`);
		el.classList.remove("faded")

	}

	drawPeople() {
		
		this.people.forEach(this.drawPerson.bind(this));
	}

	drawPerson(name) {
		const person = `<section class="person" data-person=${name}><p>${name}</p></section>`
		this.peopleEl.innerHTML += person;
	}
}
