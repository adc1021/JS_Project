import * as d3 from "d3";
import { compProfile } from "./data.js";
import fighterJson from "../../fighter_profile.json";
import { csvFormatBody } from "d3";
import { eventHandler } from "./click_event.js";

const myScatterPlot = (data) => {
  const dataset1 = data;

  console.log();
  const svg = d3.select("svg"),
    margin = 200,
    width = svg.attr("width") - margin, //300
    height = svg.attr("height") - margin; //200

  const xScale = d3.scaleLinear().domain([0, 30]).range([0, width]),
    yScale = d3.scaleLinear().domain([0, 30]).range([height, 0]);

  const g = svg
    .append("g")
    .attr("transform", "translate(" + 100 + "," + 100 + ")");

  // Title
  svg
    .append("text")
    .attr("x", width / 2 + 100)
    .attr("y", 100)
    .attr("text-anchor", "middle")
    .style("font-family", "sans-serif")
    .style("font-size", 20)
    .style("font-weight", "bold")
    .text("UFC Champions");

  // X label
  svg
    .append("text")
    .attr("x", width / 2 + 100)
    .attr("y", height - 15 + 150)
    .attr("text-anchor", "middle")
    .style("font-family", "sans-serif")
    .style("font-weight", "bold")
    .style("font-size", 12)
    .text("LOSSES");

  // Y label
  svg
    .append("text")
    .attr("text-anchor", "middle")
    .attr("transform", "translate(60," + height + ")rotate(-90)")
    .style("font-family", "sans-serif")
    .style("font-weight", "bold")
    .style("font-size", 12)
    .text("WINS");

  //constrcuts bottom oriented axis
  g.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(xScale));

  // constructs left oriented axis
  g.append("g").call(d3.axisLeft(yScale));

  const dots = svg
    .append("g")
    .selectAll("dot")
    .data(dataset1)
    .enter()
    .append("circle") // adds circle tag as child of g
    .attr("cx", function (d) {
      return xScale(d[1]);
    })
    .attr("cy", function (d) {
      return yScale(d[0]);
    })
    .attr("r", 8)
    .attr("transform", "translate(" + 100 + "," + 100 + ")")
    .style("fill", function (d) {
      return d[2];
    })
    .style("stroke", 'black')
    .on("mouseover", function () {
      d3.select(this).transition().duration("300").attr("r", 12);
    })
    .on("mouseout", function () {
      d3.select(this).transition().duration("300").attr("r", 8);
    })
    .on("click", eventHandler)
    .append("title")
    .text(function (d) {
      return d[3];
    });
};

export default myScatterPlot;
