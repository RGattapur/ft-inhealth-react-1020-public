
import React from "react";

const Fish = ({fish,change,remove}) => 

    <section className="fish"> 

        <img src={"fish/"+fish.name+".jpeg"} alt="fish" />

        <h4 className="fishName">{ fish.name }</h4>

        <input type="text" value={fish.quantity} onChange={change} data-fish={fish.name}/>
        
        <p className="remove" onClick={ () => remove(fish) }>Remove</p>

    </section>

export {Fish}
