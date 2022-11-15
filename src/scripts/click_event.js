import fighterJson from "../../fighter_profile.json"
import * as d3 from "d3";


// Goal is to add an event handler for a click event
// I want the dot to stay at the toggle over size when a click event occurs
// sidebar should appear display a summary of the individual
export default function eventHandler(e) {
  const dot = e.target;
  dot.style.stroke = "red";
  document.getElementById("mySidebar").style.width = '500px'
  
}

// function closeNav() {
//   document.getElementById("mySidebar").style.width = "0";
//   document.getElementById("main").style.marginLeft = "0";
// }
