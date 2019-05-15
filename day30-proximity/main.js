// SEI Warmup Week 7 - Thurs - Dave

/*
Proximity
You and some friends usually play a gathering game (like a scavenger hunt) using geo-coordinates in the city, but it has gotten so popular that many people want to join in. One of your friends created an API. An API is a way for us to get data from a service. But now you want to build an App to help people decide what to find in the city.

You are given the following set of data as a result from an API request and you want to sort those results in terms of proximity to your starting location (General Assembly).

var startPoint = {name: "General Assembly", location: {lat: -37.818555, long: 144.959076}}
var results = [
  {name: "Melbourne Cricket Grounds", location: {lat: -37.819967, long: 144.983449}},
  {name: "Flagstaff Gardens", location: {lat: -37.810680, long: 144.954352}},
  {name: "Emporium Melbourne", location: {lat: -37.812433, long: 144.963787}},
  {name: "City Library", location: {lat: -37.817039, long: 144.965983}},
  {name: "Southern Cross Station", location: {lat: -37.818281, long: 144.952776}},
  {name: "Sea Life Melbourne Aquarium", location: {lat: -37.820640, long: 144.958325}}
]
Write a function in JS to print the names of the results in order of closest to your location to furthest away.

Also, explain what your assumptions are for the way you are calculating distance between the start point and the results.

Extension
Use HTML5 Geolocation to get your current location and order the results based on that. This way, while the user is walking around the city, they can see which result is closest to their current location.
*/


var startPoint = {name: "General Assembly", location: {lat: -37.818555, long: 144.959076}}

var results = [
  {name: "Melbourne Cricket Grounds", location: {lat: -37.819967, long: 144.983449}},
  {name: "Flagstaff Gardens", location: {lat: -37.810680, long: 144.954352}},
  {name: "Emporium Melbourne", location: {lat: -37.812433, long: 144.963787}},
  {name: "City Library", location: {lat: -37.817039, long: 144.965983}},
  {name: "Southern Cross Station", location: {lat: -37.818281, long: 144.952776}},
  {name: "Sea Life Melbourne Aquarium", location: {lat: -37.820640, long: 144.958325}}
]

// Loop through each array item in results
// compare lat (results[0].location.lat) of result to startPoint, store in dist_lat
// compare long (results[0].location.lat)of result to startPoint, store in dist_long
// add dist_lat + dist_long into overall_dist
// print to console in order of closest first (smallest overall_dist)


var closestLocation = function(array) {

  var myLat = startPoint.location.lat;
  var myLong = startPoint.location.long;

  // Find total distance of each location and store in array (assuming earth is flat)
  var distances = [];
  array.forEach(function(result) {
    var distLat = Math.abs(myLat - result.location.lat);
    var distLong = Math.abs(myLong - result.location.long);
    var combinedLatLong = distLat + distLong;
    distances.push({"name": result.name, "combinedLatLong": combinedLatLong})
  })

  // Sort distances by closest to furthest
  var sortClosest = distances.sort(function(a,b) {
    return a.combinedLatLong - b.combinedLatLong;
  })

  // Print results to console
  sortClosest.forEach(function(location){
    console.log(location.name);
  });
}

console.log(closestLocation(results))