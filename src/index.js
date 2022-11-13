
import {Champ, compProfile} from "./scripts/data"
import myScatterPlot from "./scripts/scatter_plot"
import fighterJson from "../fighter_profile.json"


window.Champ = Champ;
Champ();

window.myScatterPlot = myScatterPlot;
// myScatterPlot();

const arr = [];


// const champIds = [250145, 260623, 290262, 340506]
const champIdPromiseArr = fighterJson.map( profile => {
  const {wins, losses} = profile.record;
  return [wins, losses];


  // let fighterId = [profile.record.wins, profile.record.losses]
  // return fighterId
})

Promise.all(champIdPromiseArr).then( data => myScatterPlot(data));
