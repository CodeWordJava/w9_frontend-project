import React from "react";
import { useState, useEffect } from "react";

//UNTESTED: need the db to test 
function Input({data}) {

    const [input, setInput] = useState([]);
    // use input inside the handleSubmit
    // handleSubmit needs to grab input-text from "link, Topic, username"
    // event.target.value
    // then setInput to the input-text grabs
    // the state of input is then added to the POST request body
    // useEffect needs to listen to the input state (and not on load)
    // 
    
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
            const response = await fetch('http://localhost:9000/create', requestOptions); //api link goes here
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