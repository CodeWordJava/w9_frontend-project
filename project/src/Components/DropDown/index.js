import React from "react";



function DropDown({setTopic}) {
    return (
        <div>
        <select id="dropDown" onChange = {e => setTopic(e.target.value)}>
          <option value="">filter by topic</option>
          <option value="react">React</option>
          <option value="nodeJS">NodeJS</option>
          <option value="JavaScript">JavaScript</option>
          <option value="CSS">CSS</option>
        </select>
      </div>
    )
}

export default DropDown;