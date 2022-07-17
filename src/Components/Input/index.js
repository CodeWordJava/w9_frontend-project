import React from "react";
import { useState } from "react";

// This is our post fucntion that has input boxes for Topic Link and Username, and sends them to the API
function Input() {
  const [topic, setTopic] = useState("");
  const [link, setLink] = useState("");
  const [username, setUsername] = useState("");

  //post request: handles form submits
  async function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    const post = await fetch("https://the-soc-tech-library.herokuapp.com/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ topic: topic, link: link, userName: username }),
    });
    const res = await post.json();
    console.log(res);
  }

  function handleTopicChange(e) {
    setTopic(e.target.value);
  }
  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  return (
    <div id="formDiv">
      <form id="form" onSubmit={handleSubmit}>
        <input
          id="topicInput"
          type="text"
          placeholder="Topic"
          onChange={handleTopicChange}
          required
        ></input>
        <input
          id="linkInput"
          type="text"
          placeholder="Link"
          onChange={handleLinkChange}
          required
        ></input>
        <input
          id="usernameInput"
          type="text"
          placeholder="Username"
          onChange={handleUsernameChange}
          required
        ></input>
        <input id="submitButton" type="submit" value="Submit Link"></input>
      </form>
    </div>
  );
}

export default Input;
