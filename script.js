var inf=navigator.userAgent+'\n' +navigator.platform+'\n' +navigator.language+'\n' +navigator.appName+'\n' +navigator.appVersion+ '\n' +navigator.geolocation 
alert(inf)

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
} else {
  document.getElementById("demo").innerHTML =
  "Geolocation is not supported by this browser.";
}

function showPosition(position) {
  document.getElementById("demo").innerHTML =
  "Latitude: " + position.coords.latitude +
  "Longitude: " + position.coords.longitude;
}

alert(geo_inf)
