var colors = {
  "Facilities and Waterfront Structures": '#256ec1',
  "Housing Reconstruction": '#f9f222',
  "Waste and Water Systems": '#8E0F2E',
  "Roads, Traffic, and Transportation": '#7FDDEC',
  "Parks, Beaches, and Recreational Facilities": '#69b418',
  "Hospital Reconstruction": '#bd5ffa',
  "School Reconstruction": '#FE9E43',
  "Other": '#A5ADC0',
};
  
function style(feature, resolution) {
  var zoom = nyc.ol.TILE_GRID.getZForResolution(resolution);
  var color = colors[feature.get('cat')];
  return new ol.style.Style({
    image: new ol.style.Circle({
      radius: zoom / 3,
      fill: new ol.style.Fill({color: color}),
      stroke: new ol.style.Stroke({
        width: 2,
        color: 'black'
      })
    })
  });
};

function grantStyle(feature, resolution) {
  var zoom = nyc.ol.TILE_GRID.getZForResolution(resolution);
  var color = colors[feature.get('cat')];
  return new ol.style.Style({
  image: new ol.style.Circle({
  radius: zoom / 3,
  fill: new ol.style.Fill({color: color}),
  stroke: new ol.style.Stroke({
  width: 4,
  color: "red"
  })
  })
  });
  };