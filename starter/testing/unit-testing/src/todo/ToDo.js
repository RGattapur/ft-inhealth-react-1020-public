import React, {useState,useEffect} from 'react';
import './todo.css';
import {DrawList} from "./DrawList.js"
import {useStore} from "./UseStore";

const ToDo = () => {

    // Custom Hook to read/write list to localStorage
    const [store,setStore] = useStore( "list",[])

    const [ item,setItem ] = useState("");
    const [ list,setList ] = useState( store ); 

    useEffect( () => {
        setStore(list);
     }, [list,setStore] );

    const createId = s => `${s.trim().toLowerCase().split(" ").join("-")}-${Math.floor(Math.random()*1000000)}`

    const addItem = (e) => {
        e.preventDefault();
        let todo = { desc:item, id:createId(item) };
        setList( [ ...list, todo ] )
        setItem("")
    }

    const remove = (id) => setList( (list) => list.filter( ob => ob.id !== id ));

    const createItem = (e) => setItem(e.target.value);

    const empty = () => {
        setList([])
        setItem("")
    }

    return (
        <section>          
            <form data-testid="todo_form" onSubmit={addItem} >
                <input data-testid="todo_item" value={item} onChange={createItem} />
                <button>Add Item</button>
            </form>

            <DrawList list={list} remove={remove} /> 
     
            <button onClick={empty}>Empty</button>
        </section>

    );
}

export {ToDo}
