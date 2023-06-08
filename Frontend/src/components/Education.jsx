import React from 'react'
import Input from "./input";
import "../public/styles.css"

function Education() {
  return (
    <div>
      <form className="form">
        <h1>Education Details</h1>
        <h2><label for="level">Level of Studies</label></h2><br/>
        <Input type="text" id="level" placeholder="Level" />
        <h2><label for="degree">Degree</label></h2><br/>
        <Input type="text" id="degree" placeholder="Degree" />
        <h2><label for="institute">Institute</label></h2><br/>
        <Input type="text" id="institute" placeholder="Institute" />
        <h2><label for="city">City</label></h2><br/>
        <Input type="text" id="city" placeholder="City" />
        <h2><label for="marks">Percentage</label></h2><br/>
        <Input type="text" id="marks" placeholder="Percentage" />
        <h2><label for="yop">Year of Passing</label></h2><br/>
        <Input type="date" id="yop" placeholder="Year of Passing" />
        <button type="submit" value="submit">Next Page</button>
      </form>
    </div>
  );
}
export default Education;