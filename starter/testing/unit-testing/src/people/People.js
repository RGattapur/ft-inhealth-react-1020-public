import React, {useEffect, useState} from 'react';
import './People.css';

const People = () => {
    
    const path ="people.json";
    const [people, setPeople] = useState([]);

    useEffect(() => {

        fetch(path)
            .then(response => response.json())
            .then(data => setPeople(data))
            .catch(e => console.log(e))

    }, []);

    return (
        <section>
            <section className="people">
                { people.map(( p,n) => <p key={n}>{p.name}<span>{p.age}</span></p> ) }
            </section>
        </section>
    )

}

export {People}