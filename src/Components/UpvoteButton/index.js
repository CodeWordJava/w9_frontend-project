import React from "react";
//Takes in ID prop from display and sends a patch request to the API
function UpvoteButton({ id }) {
  async function handleClick() {
    const patch = await fetch("http://localhost:9000/updatedvote", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    const res = await patch.json();
    console.log(res);
  }

  return (
    <section>
      <button id = "upvoteButton" onClick={handleClick}>+</button>
    </section>
  );
}

export default UpvoteButton;
