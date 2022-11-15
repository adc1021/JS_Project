import myScatterPlot from "./scripts/scatter_plot"
import fighterJson from "../fighter_profile.json"


const champIdPromiseArr = fighterJson.map( profile => {
  const {wins, losses} = profile.record; // [25, 1, "blue", name]
  const color = profile.color;
  const name = profile.competitor.name;
  return [wins, losses, color, name];
  // return profile
})

myScatterPlot(champIdPromiseArr);
// myScatterPlot(fighterJson)
