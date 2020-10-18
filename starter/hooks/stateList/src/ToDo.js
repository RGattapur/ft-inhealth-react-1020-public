import React from 'react';
import './todo.css';
import {DrawList} from "./DrawList.js"

const FAKE_TODOS = [
    { desc:"Buy Milk", id:4567 },
    { desc:"Learn Hooks", id:8765 }
]

const ToDo = () => {

    const list = FAKE_TODOS;
    const item = "";

    const addItem = (e) => {
        e.preventDefault();
    }

    const remove = (id) => null

    const createItem = (e) => console.log(e.target.value);

    const empty = () => null

    return (
        <section>          
            <form onSubmit={addItem}>
                <input value={item} onChange={createItem}/>
                <button>Add Item</button>
            </form>

            <DrawList list={list} remove={remove} /> 
     
            <button onClick={empty}>Empty</button>
        </section>

    );
}

export {ToDo}
