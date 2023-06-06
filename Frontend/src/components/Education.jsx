import React from 'react'
import Input from "./input";

function Education() {
  return (
    <div>
      <form className="form">
        <legend>Education Details</legend>
        <label for="institute">Institute</label><br/>
        <Input type="text" id="institute" placeholder="Institute" />
        <label for="degree">Degree</label><br/>
        <Input type="text" id="degree" placeholder="Degree" />
        <label for="marks">Percentage</label><br/>
        <Input type="text" id="marks" placeholder="Percentage" />
        <label for="yop">Year of Passing</label><br/>
        <Input type="date" id="yop" placeholder="Year of Passing" />
        <button type="submit" value="submit">Next Page</button>
      </form>
    </div>
  );
}
export default Education;