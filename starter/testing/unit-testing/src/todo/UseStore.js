
import { useState, useEffect } from 'react';

// This custom Hook reads/writes values to localStorage.
// [store,setStore] = useStore( "list",[])
// Equivalent non Hooks code:
// const read = () => localStorage.list ? JSON.parse( localStorage.list ) : []
// const write = list => localStorage.list = JSON.stringify( list )

const useStore = ( key,initialValue ) => {

    const current = localStorage[key] ? JSON.parse( localStorage[key] ) : initialValue;

    const [store,setStore] = useState(current)

    useEffect( () => {
        localStorage[key] = JSON.stringify( store )
    }, [store,key] )

    return [store,setStore]
}

export {useStore}


