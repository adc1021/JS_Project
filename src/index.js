
import {Champ, compProfile} from "./scripts/data"
import myScatterPlot from "./scripts/scatter_plot"

window.Champ = Champ;
Champ();

window.myScatterPlot = myScatterPlot;
// myScatterPlot();

const arr = [];

const champIds = [290262]
champIds.forEach( id => {
  compProfile(id).then( data => {
    arr.push(data);
  })
})

console.log(arr);

myScatterPlot(arr)
