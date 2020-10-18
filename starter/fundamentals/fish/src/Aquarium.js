import React,{Component} from 'react';
import './Aquarium.css';

import {Fish} from "./Fish";

const FAKETANK = [ { name:"dabfish", quantity:4 },{ name:"gurnard", quantity:6 }]

class Aquarium extends Component {

  state = {   
    tank:FAKETANK , 
    names: [...this.props.names ] 
  }
  
  addFish = () => {

    // Make a copy of NAMES and remove the first name
    // Create a fish-object, e.g. { name:"gurnard", quantity:0 }
    // Add the fish-object to the tank
    // Replace the names array with the copy
  
  }

  change = e => {
  
    // Get the quantity string from the INPUT change event object.
    const quantity = Number(e.currentTarget.value);
    // Get the name from the custom data-attribute attached to the input: data-fish={fish.name}
    const name = e.currentTarget.getAttribute("data-fish")

    console.log( quantity,name )

  }

  reset = () => {
    // Reset all quantities to zero
  }

  remove = (selected) => {
    // Filter out the fish with the matching name
  }

  // Use Reduce to calculate total quantity
  totalQuantity = () => 0

  render() {

    const {names,tank} = this.state;

    return (
      <section>
        
        <section className="features" >
       
          {/* Change button states to reflect component state */}

          <p onClick={this.addFish} className="button">{names[0]}</p> 
          <p onClick={this.reset} className="button">Zero quantities</p> 

        </section>

        <section className="tank" >
          { tank.map(f => <Fish fish={f} key={f.name} change={this.change} remove={this.remove} /> ) } 
        </section>

        <hr/>

        <p className="total">Total quantity {this.totalQuantity()}</p>
        <p className="total">{ JSON.stringify(tank)}</p>
 
      </section>
      
    );
  }
}

export default Aquarium;