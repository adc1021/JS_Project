import Example from "./scripts/example";
import ChampionData from "./scripts/data";

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main");
    new Example(main);
});

window.ChampionData = ChampionData;
