
import React, { Component } from 'react';
import {Ticket} from "./Ticket";
import './NewYork.css';

const FAKE = [
	{ name:"Statue Liberty", photo:"liberty.jpeg", price:25, "id":"sl25", open:true },
	{ name:"Empire State", photo:"empire.jpeg" , price:40, "id":"em40", open:true },
	{ name:"Natural History", photo:"natural.jpeg" , price:20, "id":"nt20", open:true },
	{ name:"Metropolitan Museum", photo:"metro.jpeg" , price:55, "id":"mt55", open:true }
]

class NewYork extends Component {

    state = { newyork:FAKE,basket:[] }

    buyTicket = ticket => null

    inBasket = ticket => null

    empty = () => null

    remove = ticket => null

    getTotal = () => 0

    render() {

        const {newyork,basket} = this.state;

        return (
            <section>
                <section className="collection">
					{ newyork.map( ticket =>            
						<Ticket {...ticket} key={ticket.id} />
					)}
                </section>
                {/* ------------------------------------------------------------- */}
                <section className="basket">
                    <section className="collection">
                        {/* Map over the basket */}
                    </section> 

                    <p>${this.getTotal()}</p>
                    <p className="button" onClick={this.empty}>Empty</p>
                </section>           
			</section>
        );
    }
}

export {NewYork};