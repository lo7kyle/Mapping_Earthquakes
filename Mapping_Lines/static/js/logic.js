console.log("working");
/*
// Create the map object with a center and zoom level. you can create the map like below
let map = L.map('mapid').setView([40.7, -94.5], 4);
*/

// Create the map object with a center and zoom level. This is another way of create the map using curly {}
let map = L.map("mapid", {
    center: [
      37.6213, -122.3790
    ],
    zoom: 7
  });

// // We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: API_KEY
// });
// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// Get data from cities.js
// let cityData = cities;

// Coordinates for each point to be used in the line.
let line = [
  [37.6213, -122.3790],
  [30.1975, -97.6664],
  [43.6777, -79.6248],
  [40.6413, -73.7781]
];

// You can also use: for (let i =0; i<cities.length; i++){}
// Loop through the cities array and create one marker for each city.
// when using population as radius divide by 100000
// cityData.forEach(function(city) {
//   console.log(city)
//   L.circleMarker(city.location, {
//     color: 'orange',
//     fillColor: 'orange',
//     radius: city.population/100000
//   })
//   // Use toLocalString() to add commas in the between the numbers for population
//   // use bindPopup to use HTML syntax to add popup 
//   .bindPopup("<h2>" + city.city + "," + city.state + "</h2> <hr> <h3>Population: " + city.population.toLocaleString() + "</h3>")
//   .addTo(map);
// });

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "blue",
  weight: '4', 
  dashArray: '20, 20',
  dashOffset: '20',
  opacity: '0.5'
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);