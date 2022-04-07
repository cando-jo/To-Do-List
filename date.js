//jshint esversion: 6
exports.getDate = function() {
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
return today.toLocaleDateString("en-US", options);

}
 //Prnthses should be added in app.js
exports.getDay = function() {
  let today = new Date();

  let options = {
    weekday: "long",
  };
return today.toLocaleDateString("en-US", options);

}
