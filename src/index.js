import myScatterPlot from "./scripts/scatter_plot"
import fighterJson from "../fighter_profile.json"
import { csvFormatBody } from "d3";


// const champIdPromiseArr = fighterJson.map( profile => {
//   const {wins, losses} = profile.record; // [25, 1, "blue", name]
//   const color = profile.color;
//   const name = profile.competitor.name;
//   return [wins, losses, color, name];
//   // return profile
// })

// myScatterPlot(champIdPromiseArr);
// console.log(fighterJson)
myScatterPlot(fighterJson);


let closeBtn = document.getElementById('modal__close');
console.log(closeBtn)
closeBtn.addEventListener("click", () => {
  let modal = document.getElementById('modal');

  document.body.removeChild(modal);
});
