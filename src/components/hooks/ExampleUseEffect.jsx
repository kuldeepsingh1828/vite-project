import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const fetchData = async (productId) => {
    console.log(productId)
    let responseBody = await fetch(`https://fakestoreapi.com/products/${productId}`);
    let jsonResponse = await responseBody.json();
    return jsonResponse;
}

const fetchData2 = (productId) => {
    fetch(`https://fakestoreapi.com/products/${productId}`).
        then((result) => result.json()).
        then((responseBody) => responseBody).
        catch();
}

export default function ExampleUseEffect() {
    const [counter, setCounter] = useState(1);
    const [data, setData] = useState({});

    const updateData = async () => {
    }


    //On Rendering and update in state(s)
    // render
    useEffect(() => {

    });

    //On Rendering ONLY
    //CONSTRUCTOR
    useEffect(() => {
        (async () => {
            setData(await fetchData(counter));
        })();
    }, []);

    //On Rendering and Dependecy -- UPDATE
    useEffect(() => {
        console.log("COUNTER DEPENDCY");
        (async () => {
            setData(await fetchData(counter));
        })();
    }, [counter]);


    return (
        <>
            <h1>{counter}</h1>
            <button onClick={() => { setCounter((counter) => counter + 1) }}>Next</button>
            <div>
                {JSON.stringify(data)}
            </div>
        </>
    )
}
/*
import React from 'react'
import { useState } from 'react'

const fetchData = async () => {
    let responseBody = await fetch('https://fakestoreapi.com/products/1');
    let jsonResponse = await responseBody.json();
    return jsonResponse;
}

const fetchData2 = () => {
    fetch('https://fakestoreapi.com/products/1').
        then((result) => result.json()).
        then((responseBody) => responseBody).
        catch();
}

export default function ExampleUseEffect() {
    const [counter, setCounter] = useState(1);
    const [data, setData] = useState({});

    const updateData = async () => {
        setData(await fetchData());
    }
    return (
        <>
            <h1>{counter}</h1>
            <button onClick={() => { setCounter(() => counter + 1) }}>Next</button>
            <div>
                {JSON.stringify(data)}
            </div>
            <button onClick={updateData}>Data Fetch</button>
        </>
    )
}
import React from 'react'
import { useState } from 'react'

const fetchData = async () => {
    let responseBody = await fetch('https://fakestoreapi.com/products/1');
    let jsonResponse = await responseBody.json();
    return jsonResponse;
}

const fetchData2 = () => {
    fetch('https://fakestoreapi.com/products/1').
        then((result) => result.json()).
        then((responseBody) => responseBody).
        catch();
}

export default function ExampleUseEffect() {
    const [counter, setCounter] = useState(1);
    const [data, setData] = useState({});

    const updateData = async () => {
        setData(await fetchData());
    }
    return (
        <>
            <h1>{counter}</h1>
            <button onClick={() => { setCounter(() => counter + 1) }}>Next</button>
            <div>
                {JSON.stringify(data)}
            </div>
            <button onClick={updateData}>Data Fetch</button>
        </>
    )
}
*/