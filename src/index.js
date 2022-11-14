
import {Champ, compProfile} from "./scripts/data"
import myScatterPlot from "./scripts/scatter_plot"
import fighterJson from "../fighter_profile.json"


window.Champ = Champ;
Champ();

window.myScatterPlot = myScatterPlot;



const champIdPromiseArr = fighterJson.map( profile => {
  const {wins, losses} = profile.record;
  const color = profile.color;
  return [wins, losses, color];
})

Promise.all(champIdPromiseArr).then( data => myScatterPlot(data));
