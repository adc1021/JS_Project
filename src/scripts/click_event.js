import fighterJson from "../../fighter_profile.json"
import * as d3 from "d3";

export function eventHandler(e) {
  const dot = e.target;
  const sideBar = document.getElementById("mySidebar");
  dot.style.stroke = "red";
  sideBar.style.width = '500px'
  console.log(e);
}

const closeBtn = document.getElementById("closebtn")
closeBtn.addEventListener("click", closeNav)

export function closeNav() {
  const sideBar = document.getElementById("mySidebar");
  sideBar.style.width = "0px";
}

// const infoBtn = document.getElementById('info')
// console.log(infoBtn)
// infoBtn.addEventListener("click", infoPopup)

// export function infoPopup(e) {
//   console.log(e.target)

