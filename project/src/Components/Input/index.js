import React from "react";
import { useState, useEffect } from "react";

//UNTESTED: need the db to test 
function Input({data}) {

    const [input, setInput] = useState([]);

  //handles form submit
        function handleSubmit(e) {
            e.preventDefault();
            console.log("submitted");
        }
    useEffect(() => {

        // POST request using fetch 
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: '' })
        };
        async function fetchData() {
            const response = await fetch('', requestOptions); //api link goes here
            const data = await response.json();

            setInput([...input, data])
        }
        fetchData();

    // empty dependency array
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Topic"> 
            </input>
            <input type="text" placeholder="Link"> 
            </input>
            <input type="text" placeholder="Username"> 
            </input>
            <input type="submit" value="Submit Link"></input>
        </form>
    )
}

export default Input;