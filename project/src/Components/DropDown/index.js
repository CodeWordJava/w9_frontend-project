import React from "react";

function DropDown() {
    return (
        <div>
        <select>
          <option value="default">filter by topic</option>
          <option value="react">React</option>
          <option value="nodeJS">NodeJS</option>
          <option value="JavaScript">JavaScript</option>
        </select>
      </div>
    )
}

export default DropDown;