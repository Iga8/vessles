//var map = L.map('map', {
//    center: [20.0, 5.0],
//    minZoom: 2,
//    zoom: 2
//});

//L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//    subdomains: ['a', 'b', 'c']
//}).addTo(map);

//set up base layer 



var map = L.map('map').setView([53.2734, -7.778320310000026], 7);
minZoom: 5;
maxZoom: 13;
mapLink ='<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}', {
   attribution: 'Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri' ,   
   //id: '',

   //accessToken: 'pk.eyJ1IjoianVzY2llIiwiYSI6ImNpejFtamw3bjAwMXIyd2xjcWs2MWU4ZzYifQ.YbwPHqYk4Q9u8HlJ1HnEzA'

}).addTo(map);
//window.onload = function() {
//    setupMap();

//    var marker = L.marker(markers.features[0].geometry.coordinates.reverse(),
//        {title: markers.features[0].properties.description});
//    marker.addTo(map);

//};





//display scale on map 
L.control.scale().addTo(map);

//add geoJson layer
//L.geoJSON(geojsonFeature).addTo(map);
//display line on map
var polyline = L.polyline([
                [54.118694150124654, -11.664894938468933],
                [53.5555, -11.43],
                [53.010267, -11.5100],
                [52.514, -11.977],
                
                   


], 
{
    color: 'black',
    weight: 5,
                opacity: .6,
                dashArray: '10.5',
                lineJoin: 'round',
                
            }
            ).addTo(map);


var ports = L.icon({
    iconUrl: '/Content/Images/port-icon.png',
    iconSize: [30, 36], // size of the icon
    iconAnchor: [15, 36], // point of the icon which will correspond to marker's location
    popupAnchor: [6, 0] // point from which the popup should open relative to the iconAnchor
});






//anotcher aproach to using Ajax 

//var ports = new L.GeoJSON.AJAX("/Scripts/map/map(1).geojson", {

//        pointToLayer: function (feature, latlng) {

//            var portMarker = L.marker(latlng, { icon: PortIcon, title: feature.properties.name });

//            var popupHTML = "<label class='popupTitle'>" + feature.properties.LOCATION + "</label><br/>";
//            popupHTML += "<div><label class='popupLatLong'>Lat:</label>" + latlng.lat.toFixed(4) + " <label class='popupLatLong'>Long:</label>" + latlng.lng.toFixed(4) + "</div>";
          
//            return portMarker;
//        }
//    });
//    ports.addTo(map)

//var port = L.icon({
//    iconUrl: './Content/Images/port.PNG',
//    shadowUrl:'./Content/Images/marker-shadow',
//    });

//var Esri_WorldImagery = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
//    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
//});

//var marker=L.marker();



//json data with ports for  ports 


 var ports = [
   {
       "name": "Galway Port",
       "url": "http://www.galwayharbour.com/",
       "lat": 53.2690,
       "lng": -9.0473
   },
   {
       "name": "Cork Port ",
       "url": "https://en.wikipedia.org/wiki/Anguilla",
       "lat": 51.8522,
       "lng": -8.2600
   },

   {
       "name": "Arran Island Port",
       "url": "https://en.wikipedia.org/wiki/Japan",
       "lat": 36.204824,
       "lng": 138.252924
   },
{
     "name": "Drogheda Port ",
     "url": "https://en.wikipedia.org/wiki/Japan",
     "lat": 36.204824,
     "lng": 138.252924
},
{
    "name": "Dublin Port ",
    "url": "https://en.wikipedia.org/wiki/Japan",
    "lat": 53.3511,
    "lng": -6.2145
},
   
   
{
    "name": "Wexford Port ",
    "url": "https://en.wikipedia.org/wiki/Japan",
    "lat":  52.341975,
    "lng": -6.463823
},
   
{
    "name": "Limerick Dock",
    "url": "https://en.wikipedia.org/wiki/Japan",
    "lat":  52.66005,
    "lng":  -8.6420395
},
   {
       "name": "Bantry Bay Port ",
       "url": "http://www.bantrybayport.com/",
       "lat": 51.42,
       "lng": -9.2888
   },

   {
       "name": "Dingle port ",
       "url": "http://www.dinglemarina.ie/facilities/",
       "lat": 52.13773535,
       "lng": -10.2772479
   },
   {
       "name": "Sligo Port",
       "url": "http://www.sligococo.ie/Services/HarbourOffice/",
      
       "lat": 54.2873001,
       "lng": -8.516979215
   }
   
 ];



 //var smallIcon = new L.Icon({
 //    iconSize: [27, 27],
 //    iconAnchor: [13, 27],
 //    popupAnchor: [1, -24],
 //    iconUrl: 'C:\Users\jcieslak\Documents\Visual Studio 2013\Projects\Vessesls\Vessesls\Content/Images/port.PNG'



 //var ports = L.icon({
 //    iconUrl: 'ports.png',
 //    shadowUrl: 'leaf-shadow.png',

 //    iconSize: [27, 27], // size of the icon
 //    shadowSize: [50, 64], // size of the shadow
 //    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
 //    shadowAnchor: [4, 62],  // the same for the shadow
 //    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
 //});

 //L.marker([51.5, -0.09], { icon: ports }).addTo(map);






////load ports port  on map 
for (var i = 0; i < ports.length; ++i)
{
   L.marker( [ports[i].lat, ports[i].lng] )
      .bindPopup( '<a href="' + ports[i].url + '" target="_blank">' + ports[i].name + + ports[i].lat )
  .addTo( map );
}


// loading GeoJSON file - Here my html and .geojson file resides in same folder not working
//$.getJSON("/Scripts/map/map(1).geojsonmap(1).geojson", function (data) {
//    // L.geoJson function is used to parse geojson file and load on to map
//    L.geoJson(data).addTo(map);
//});


//var grayscale = L.tileLayer(mapboxUrl, { id: 'juscie.4bbc9224', attribution: mapboxAttribution }),
//    streets = L.tileLayer(mapboxUrl, { id: 'MapID', attribution: mapboxAttribution });

//var map = L.map('map', {
//    center: [39.73, -104.99],
//    zoom: 10,
//    layers: [grayscale, cities]
//});

//var baseMaps = {
//    "Grayscale": grayscale,
//    "Streets": streets
//};

//var baseMaps = {
//    "<span style='color: gray'>Grayscale</span>": grayscale,
//    "Streets": streets
//};

//dispaly search 
//var searchControl = new L.esri.Controls.Geosearch().addTo(map);

//var results = new L.LayerGroup().addTo(map);

//searchControl.on('results', function (data) {
//    results.clearLayers();
//    for (var i = data.results.length - 1; i >= 0; i--) {
//        results.addLayer(L.marker(data.results[i].latlng));
//    }
//});
//
setTimeout(function () { $('.pointer').fadeOut('slow'); }, 3400);