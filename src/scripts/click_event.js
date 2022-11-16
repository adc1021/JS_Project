import fighterJson from "../../fighter_profile.json"
import * as d3 from "d3";

export function eventHandler(e) {
  const dot = e.target;
  const data = e.target.__data__;
  const sideBar = document.getElementById("mySidebar");
  dot.style.stroke = "red";
  sideBar.style.width = '500px'
  renderData(data);
}

function renderData(data) {
  let fighterNameDiv = document.getElementById("fighter-name");
  fighterNameDiv.innerHTML = "";
  let fighterName = data.competitor.name.split(',');
  let lastName =fighterName[0];
  let firstName =fighterName[1];
  let name = document.createTextNode(`${firstName} ${lastName}`);
  // console.log(name);
  fighterNameDiv.appendChild(name);
}

const closeBtn = document.getElementById("closebtn")
closeBtn.addEventListener("click", closeNav)

export function closeNav() {
  const sideBar = document.getElementById("mySidebar");
  let fighterNameDiv = document.getElementById("fighter-name");
  sideBar.style.width = "0px";
}

// const infoBtn = document.getElementById('info')
// console.log(infoBtn)
// infoBtn.addEventListener("click", infoPopup)

// export function infoPopup(e) {
//   console.log(e.target)
