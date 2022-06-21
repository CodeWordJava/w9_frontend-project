import React from "react";
import './App.css';
import Input from "../Input";
import SubmitButton from "../SubmitButton";
import DropDown from "../DropDown";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../NavBar/index.js"
import TablePaginationActions from "../Display/index.js"

function App() {
  return (
  <>
<Navbar></Navbar>
<div id="introDiv">
  <p> Hello</p>
</div>
<div id="tableDiv">
<TablePaginationActions></TablePaginationActions>
</div>
<Input></Input>
<SubmitButton></SubmitButton>
<DropDown></DropDown>
</>
  );
}

export default App;
