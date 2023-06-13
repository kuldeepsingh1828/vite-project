import React from 'react'
import { useState } from 'react'
import MyComponent from '../MyComponent';
export default function MyStateFullComponent() {
    let [state, setState] = useState([]);
    console.log('state', state);
    let clickHandler = () => {
        let todo = document.getElementById("input").value;
        setState([...state, todo]);
    }
    return (
        <div>
            <input id='input' type={"text"} />
            <button onClick={clickHandler}>Add Todo</button>
            <ol>
                {state.map((todo, index) => <li key={index}>{todo}</li>)}
            </ol>
        </div>
    )
}
