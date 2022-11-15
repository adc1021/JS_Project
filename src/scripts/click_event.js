import fighterJson from "../../fighter_profile.json"
import * as d3 from "d3";

// Goal is to add an event handler for a click event
// I want the dot to stay at the toggle over size when a click event occurs
// sidebar should appear display a summary of the individual
export function eventHandler(e) {
  const dot = e.target;
  const sideBar = document.getElementById("mySidebar");
  dot.style.stroke = "red";
  sideBar.style.width = '500px'
}

const closeBtn = document.getElementById("closebtn")
closeBtn.addEventListener("click", closeNav)

export function closeNav() {
  const sideBar = document.getElementById("mySidebar");
  sideBar.style.width = "0px";
}



// function closeNav() {
//   document.getElementById("mySidebar").style.width = "0";
//   document.getElementById("main").style.marginLeft = "0";
// }
