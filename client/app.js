import { DATA_FETCHER } from "./dataFetcher.js";
import { createMapLoader } from "./mapLoader.js";

const map = L.map('map');
const mapLoader = await createMapLoader(map);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// let v = await DATA_FETCHER.fetchCountriesGeometries();
// v = v.features;
// v = v.filter((feature) => "name" in feature.properties);

// mapLoader.loadData(v);
alert("Data loaded!");
