let map;

function initMap() {
  const localContextMapView = new google.maps.localContext.LocalContextMapView({
    element: document.getElementById("map"),
    placeTypePreferences: [
      { type: "restaurant" },
      { type: "tourist_attraction" },
    ],
    maxPlaceCount: 12,
  });

  map = localContextMapView.map;
  map.setOptions({
    center: { lat: 39.0997, lng: -94.5786 },
    zoom: 8,
  });
}

window.initMap = initMap;