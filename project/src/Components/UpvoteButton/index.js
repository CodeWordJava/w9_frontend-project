import React from "react";


export default function UpvoteButton(){

function UpvoteButton({id}){
/**
 * onclick need to add 1 or send the fetch PATCH request to server
 * needs the id/ name of the link clicked on to send in the PATCH request
 * pass props from ./Display/index.js which will be the row.id.
 * in this file the lopic og the PATCH reqesuet happens inside an async function
 */
  async function handleClick(){
    // console.log("submitted");
    const patch = await fetch("http://localhost:9000/updatedvote", {
    method: 'PATCH',
    headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    body: JSON.stringify({id: id})
  });
  // { "id": 5}
  const res = await patch.json()
  console.log(res);
  };


  return (
    <section>
      <button onClick={handleClick}>+</button>
    </section>
  )
};

export default UpvoteButton;