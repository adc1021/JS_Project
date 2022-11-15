// import {Champ, compProfile} from "./scripts/data"
import myScatterPlot from "./scripts/scatter_plot";
import fighterJson from "../fighter_profile.json";
import { circleCollection } from "./scripts/click_event";

// console.log(circleCollection)
// window.Champ = Champ;
// Champ();

window.myScatterPlot = myScatterPlot;

const champIdPromiseArr = fighterJson.map((profile) => {
  const { wins, losses } = profile.record; // [25, 1, "blue", name]
  const color = profile.color;
  const name = profile.competitor.name;
  return [wins, losses, color, name];
});

// const fighterName = fighterJson.map( profile => {
//   const name = profile.competitor.name;
//   return name;
// })

// Promise.all(champIdPromiseArr).then( data => myScatterPlot(data));
myScatterPlot(champIdPromiseArr);
