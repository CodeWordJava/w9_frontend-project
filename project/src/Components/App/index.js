import React from "react";
import "./App.css";
import Input from "../Input";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../NavBar/index.js";
import CustomPaginationActionsTable from "../Display/index.js";

//Rendering the App using our components

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div id="introDiv">
        <div id="innerIdDiv">
          <p className="helloID">Student Resource Library</p>
          <img src="https://www.schoolofcode.co.uk/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png" alt="School of Code Logo"></img>
          <div id="innerIntro">
            <p>
              Welcome to the School of Code Student Resource Library!
              <br/>
              Here you can submit tech links from past presentations, guest
              speakers, or just anything you think might help your fellow
              bootcampers! We ask that while you use this website that you take
              the time to upvote any links you feel really helped you or links
              that really offer clear information you think might help others.
              Feel free to submit anything at the bottom of the page and happy
              hacking!
            </p>
          </div>
        </div>
      </div>
      <div id="tableDiv">
        <CustomPaginationActionsTable></CustomPaginationActionsTable>
      </div>
      <Input></Input>
    </>
  );
}

export default App;
