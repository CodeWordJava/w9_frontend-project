import React from "react";
import './App.css';
import Input from "../Input";
// import SubmitButton from "../SubmitButton";
import DropDown from "../DropDown";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../NavBar/index.js"
import CustomPaginationActionsTable from "../Display/index.js"

function App() {
  return (
  <>
<Navbar></Navbar>
<div id="introDiv">
  <div id="innerIdDiv">
  <p className="helloID">Student Resource Library</p>
  <img src="https://www.schoolofcode.co.uk/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png"></img>
  <div id="innerIntro">
      "Hello"
      <p>
        This is where the about us will go This is where the about us will go  This is where the about us will go 
        This is where the about us will go  This is where the about us will go  This is where the about us will go 
        This is where the about us will go  This is where the about us will go  This is where the about us will go 
        This is where the about us will go  This is where the about us will go  This is where the about us will go 
        This is where the about us will go 
      </p>
  </div>
  </div> 
</div>
<div id="tableDiv">
<CustomPaginationActionsTable></CustomPaginationActionsTable>
</div>
<Input></Input>
{/* <SubmitButton></SubmitButton> */}
</>
  );
}

export default App;
