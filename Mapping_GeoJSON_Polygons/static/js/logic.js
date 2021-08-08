console.log("working");
/*
// Create the map object with a center and zoom level. you can create the map like below
let map = L.map('mapid').setView([40.7, -94.5], 4);
*/


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// We create the tile layer that will be the background of our map.
let satStreets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  STREET: streets,
  SATSTREET: satStreets
};
// Create the map object with a center and zoom level. This is another way of create the map using curly {}
let map = L.map("mapid", {
  center: [
    43.7, -79.3
  ],
  zoom: 11,
  layers: [streets]
});

// Pass our map layers into our layer control and add the layer control to the map
L.control.layers(baseMaps).addTo(map);

// Accessing the Toronto airline routes GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/lo7kyle/Mapping_Earthquakes/main/torontoNeighborhoods.json";

var myStyle = {
  "fillColor": "#FFFF99",
  "weight": 1,
  "opacity": 0.65
};

// // Grabbing GeoJSON data (simple)
// d3.json(torontoHoods).then(function(data){
//   console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJSON(data).addTo(map);
// });

// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data, {
    onEachFeature: function(feature, layer){
      console.log(layer);
      layer.bindPopup("<h2>Neighborhood: " + feature.properties.AREA_NAME + "</h2>");
    },
    style: myStyle
}).addTo(map);
});