import ChampionData from "./data";

const data = [
    [90, 20],
    [20, 100],
    [66, 44],
    [53, 80],
    [24, 182],
    [80, 72],
    [10, 76],
    [33, 150],
    [100, 15]];


const svg = d3.select("svg")
                margin = 200,
                width = svg.attr("width") - margin,
                height = svg.attr("height") - margin;


const xScale = d3.scaleLinear()
                .domain([0, 100])
                .range([0, width]),
                yScale = d3.scaleLinear().domain([0,200]).range([height, 0]);

svg.append('text')
.attr('x', width/2 + 100)
.attr('y', height - 15 + 150)
.attr('text-anchor', 'middle')
.style('font-family', 'Helvetica')
.style('font-szie', 12)
.text('Independent');



