import React from "react";
import { useState, useEffect } from "react";

//UNTESTED: need the db to test 
function Input() {

    // const [input, setInput] = useState([]);
    const [topic, setTopic] = useState("");
    const [link, setLink] = useState("");
    const [username, setUsername] = useState("");

    // use input inside the handleSubmit
    // handleSubmit needs to grab input-text from "link, Topic, username"
    // event.target.value
    // then setInput to the input-text grabs
    // the state of input is then added to the POST request body
    // useEffect needs to listen to the input state (and not on load)
    // 
    
    //handles form submit

        async function handleSubmit(e) {
            e.preventDefault();
            console.log("submitted");
            const post = await fetch("http://localhost:9000/create", {
            method: 'POST',
            headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            body: JSON.stringify({topic: topic, link: link, username: username})

        })
          const res = await post.json()
            console.log(res)
        };
       
    
      function handleTopicChange(e) {
        setTopic(e.target.value);
      }
      function handleLinkChange(e) {
        setLink(e.target.value);
      }
    
      function handleUsernameChange(e) {
        setUsername(e.target.value);
      }

    // useEffect(() => {


    //     // POST request using fetch 
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ title: '' })
    //     };
    //     async function fetchData() {
    //         const response = await fetch('http://localhost:9000/create', requestOptions); //api link goes here
    //         const data = await response.json(gatherData());

    //         setInput([...input, data])
    //     }
    //     fetchData();

    // // empty dependency array
    // }, []);

    //function to gather data

console.log(topic);
console.log(link);
console.log(username);

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Topic" onChange={handleTopicChange}> 
            </input>
            <input type="text" placeholder="Link" onChange={handleLinkChange}> 
            </input>
            <input type="text" placeholder="Username" onChange={handleUsernameChange}> 
            </input>
            <input type="submit" value="Submit Link"></input>
        </form>
    )
}

export default Input;