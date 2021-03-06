var sql = 'SELECT ' +
  'ST_AsText(the_geom_webmercator) as wkt_geom,' +
  'mapping_id as id,' +
  'grant_name as grt,' +
  'funding_source as fnd,' +
  'project_category as cat,' + 
  'project_facility_name as name,' +
  'address as addr,' + 
  'agency as agy,' +
  'project_type as typ,' +
  'estimated_funded_damages as dmg,' +
  'dedicated_resiliency_funding as res,' +
  'council_district as cd, ' +
  'community_district as cm ' +
  'FROM sft_nonbib_dataset';

new nyc.ol.FinderApp({
  title: 'Sandy Funding Tracker',
  geoclientUrl: 'https://maps.nyc.gov/geoclient/v1/search.json?app_key=74DF5DB1D7320A9A2&app_id=nyc-lib-example',
  facilityTabTitle: 'Projects',
  facilityUrl: 'https://nycomb-admin.carto.com/api/v2/sql?q=' + encodeURIComponent(sql),
  facilityFormat: new nyc.ol.format.CartoSql(),
  facilityStyle: style,
  filterChoiceOptions: [{
    title: 'Project Category',
    choices: [
      {name: 'cat', values: ['Facilities and Waterfront Structures'], label: 'Facilities and Waterfront Structures', checked: true},
      {name: 'cat', values: ['Hospital Reconstruction'], label: 'Hospital Reconstruction', checked: true},
      {name: 'cat', values: ['Housing Reconstruction'], label: 'Housing Reconstruction', checked: true},
      {name: 'cat', values: ['Parks, Beaches, and Recreational Facilities'], label: 'Parks, Beaches, and Recreational Facilities', checked: true},
      {name: 'cat', values: ['Roads, Traffic, and Transportation'], label: 'Roads, Traffic, and Transportation', checked: true},
      {name: 'cat', values: ['School Reconstruction'], label: 'School Reconstruction', checked: true},
      {name: 'cat', values: ['Waste and Water Systems'], label: 'Public Utilities', checked: true},
      {name: 'cat', values: ['Other'], label: 'Other', checked: true}

    ]
  } , {
    title: 'Source of Funding',
    choices: [
      {name: 'fnd', values: ['FEMA-PA'], label: 'FEMA Public Assistance (PA)', checked: true},
      {name: 'fnd', values: ['CDBG-DR'], label: 'HUD Community Development Block Grant - Disaster Recovery (CDBG-DR)', checked: true},
      {name: 'fnd', values: ['FHWA'], label: 'Federal Highway Administration (FHWA)', checked: true},
      {name: 'fnd', values: ['FEMA 404'], label: 'FEMA Hazard Mitigation - 404', checked: true},
      {name: 'fnd', values: ['FTA'], label: 'Federal Transporation Administration (FTA)', checked: true}
    ]
  } , {
    title: 'Managing Agency',
    choices: [
      {name: 'agy', values: ["Administration for Children's Services"], label: "Administration for Children's Services",},
      {name: 'agy', values: ['Board of Elections'], label: "Board of Elections",},  
      {name: 'agy', values: ['Campaign Finance Board'], label: "Campaign Finance Board",},  
      {name: 'agy', values: ['City Council'], label: "City Council",},
      {name: 'agy', values: ['City University of New York'], label: "City University of New York",},    
      {name: 'agy', values: ['Civilian Complaint Review Board'], label: "Civilian Complaint Review Board", },  
      {name: 'agy', values: ['Department of Citywide Administrative Services'], label: "Department of Citywide Administrative Services",},  
      {name: 'agy', values: ['Department of Correction'], label: "Department of Correction",},
      {name: 'agy', values: ['Department of Cultural Affairs'], label: "Department of Cultural Affairs",},
      {name: 'agy', values: ['Department of Design and Construction'], label: "Department of Design and Construction",},
      {name: 'agy', values: ['Department of Education'], label: "Department of Education",},
      {name: 'agy', values: ['Department of Environmental Protection'], label: 'Department of Environmental Protection',},
      {name: 'agy', values: ['Department of Finance'], label: 'Department of Finance',},
      {name: 'agy', values: ['Department of Health and Mental Hygiene'], label: 'Department of Health and Mental Hygiene',},
      {name: 'agy', values: ['Department of Homeless Services'], label: 'Department of Homeless Services',},
      {name: 'agy', values: ['Department of Information Technology and Telecommunications'], label: 'Department of Information Technology and Telecommunications',},
      {name: 'agy', values: ['Department of Investigation'], label: 'Department of Investigation',},
      {name: 'agy', values: ['Department of Parks and Recreation'], label: 'Department of Parks and Recreation',},
      {name: 'agy', values: ['Department of Probation'], label: 'Department of Probation',},
      {name: 'agy', values: ['Department of Records and Information Services'], label: 'Department of Records and Information Services',},
      {name: 'agy', values: ['Department of Sanitation'], label: 'Department of Sanitation',},
      {name: 'agy', values: ['Department of Social Services (Human Resources Administration)'], label: 'Department of Social Services',},  
      {name: 'agy', values: ['Department of Transportation'], label: 'Department of Transportation',},  
      {name: 'agy', values: ['Department of Youth and Community Development'], label: 'Department of Youth and Community Development',},  
      {name: 'agy', values: ['District Attorney - New York County'], label: 'District Attorney - New York County',}, 
      {name: 'agy', values: ['Economic Development Corporation'], label: 'Economic Development Corporation',}, 
      {name: 'agy', values: ['Financial Information Services Agency'], label: 'Financial Information Services Agency',}, 
      {name: 'agy', values: ['Fire Department'], label: 'Fire Department',}, 
      {name: 'agy', values: ['Health and Hospitals Corporation'], label: 'Health and Hospitals Corporation',}, 
      {name: 'agy', values: ['Housing Preservation and Development'], label: 'Housing Preservation and Development',},
      {name: 'agy', values: ['Law Department'], label: 'Law Department',}, 
      {name: 'agy', values: ['New York City Housing Authority'], label: 'New York City Housing Authority', },
      {name: 'agy', values: ['New York Public Library'], label: 'New York Public Library',}, 
      {name: 'agy', values: ['Office of Administrative Trials and Hearings'], label: 'Office of Administrative Trials and Hearings',}, 
      {name: 'agy', values: ['Office of the Mayor'], label: 'Office of the Mayor', }, 
      {name: 'agy', values: ['Police Department'], label: 'Police Department',}, 
      {name: 'agy', values: ['Queens Borough Public Library'], label: 'Queens Borough Public Library',}
    ]
  }],
  facilitySearch: {nameField: '[project_facility_name]'},
  decorations: [decorations]
});

$('.nav').insertAfter('#banner');
$('.nav .burg').click(function() {
  $('.nav .lnks').slideToggle();
});
$(window).resize(function() {
  if ($(window).width() > 510) {
    $('.nav .lnks').show();
  }
});

var highlitedGrantSource = new ol.source.Vector();
finderApp.map.addLayer(new ol.layer.Vector({
  source: highlitedGrantSource,
  style: style.grantStyle,
  zIndex: 10000
}));

finderApp.popup.pager.on('change', function(pager) {
var featureShownInPopup = pager.item;
var grant = featureShownInPopup.get('grt');
if (highlitedGrantSource.getFeatures().length) {
  highlitedGrantSource.clear();
}
highlitedGrantSource.addFeatures(featuresByGrant[grant]);
setTimeout(() => { // clear in 20000ms (10 sec)
  highlitedGrantSource.clear();
}, 20000);
});

$(document).ready(function() {
  $('.filter-2 h3').click();
  finderApp.tabs.open('#filters');
  
  var layerChoices = new nyc.Choice({
    target: $('<div></div>'),
    choices: [
      {name: 'layer', label: 'None', value: 'none', checked: true},
      {name: 'layer', label: 'Sandy Inundation Zone', value: 'inundation'},
    ],
    radio: true
  });

  var layerCollapsible = new nyc.Collapsible({
    target: $('<div></div>'),
    title: 'Additional Layers',
    content: layerChoices.getContainer(),
    collapsed: true
  });

  $('#filters').append(layerCollapsible.getContainer());

  layerChoices.on('change', function() {
    for (var layer in extraLayers) {
      extraLayers[layer].setVisible(false);
    }
    var chosen = layerChoices.val()[0].value
    extraLayers[chosen].setVisible(true);
  });
});

var layerChoices2 = new nyc.Choice({
  target: $('<div></div>'),
  choices: [
    {name: 'layer', label: 'None', value: 'none', checked: true},
    {name: 'layer', label: 'City Council District', value: 'council'},
    {name: 'layer', label: 'Community District', value: 'community'},
    {name: 'layer', label: 'Borough', value: 'boro'},      
    {name: 'layer', label: 'Zip Code', value: 'zipcode'},
    {name: 'layer', label: 'NYS Senate District', value: 'senate'},
    {name: 'layer', label: 'NYS Assembly District', value: 'assembly'},
  ],
  radio: true
});

var layerCollapsible = new nyc.Collapsible({
  target: $('<div></div>'),
  title: 'Political and Geographic Boundaries',
  content: layerChoices2.getContainer(),
  collapsed: true
});

$('#filters').append(layerCollapsible.getContainer());

layerChoices2.on('change', function() {
  for (var layer in extraLayers) {
    extraLayers[layer].setVisible(false);
  }
  var chosen = layerChoices2.val()[0].value
  extraLayers[chosen].setVisible(true);
});


finderApp.layer.setZIndex(3000)

var inundationLayer = new ol.layer.Tile({
  zIndex: 0,
  visible: false,
  source: new ol.source.CartoDB({
    account: 'nycomb-admin',
    config: {
      layers: [{
        type: 'cartodb',
        options: {
          cartocss_version: '2.1.1',
          cartocss: '#layer{polygon-fill:#627FE0;polygon-opacity:0.8;::outline{line-color:#FFFFFF;line-width:1;line-opacity:0.5;}}',
          sql: 'select * from sandy_inundation_zone'
        }
      }]
    }
  })
});

finderApp.map.addLayer(inundationLayer);

var borderStyle = new ol.style.Style({
  fill: new ol.style.Fill({color: 'rgba(255,255,255,0)'}),
  stroke: new ol.style.Stroke({
    color: '#274b72',
    width: 2
  })
});

var councilSql = 'select ST_AsText(the_geom_webmercator) as wkt_geom, coun_dist, rep from council_boundaries';
var councilLayer = new ol.layer.Vector({
  zIndex: 0,
  visible: false,
  source: new ol.source.Vector({
    url: 'https://nycomb-admin.carto.com/api/v2/sql?q=' + encodeURIComponent(councilSql),
    format: new nyc.ol.format.CartoSql()
  }),
  style: borderStyle
});
finderApp.map.addLayer(councilLayer);

var zipcodeSql = 'select ST_AsText(the_geom_webmercator) as wkt_geom, postalcode from zipcode_boundaries';
var zipcodeLayer = new ol.layer.Vector({
  zIndex: 0,
  visible: false,
  source: new ol.source.Vector({
    url: 'https://nycomb-admin.carto.com/api/v2/sql?q=' + encodeURIComponent(zipcodeSql),
    format: new nyc.ol.format.CartoSql()
  }),
  style: borderStyle
});
finderApp.map.addLayer(zipcodeLayer);

var communitySql = 'select ST_AsText(the_geom_webmercator) as wkt_geom, boro_cd from comm_boundaries';
var communityLayer = new ol.layer.Vector({
  zIndex: 0,
  visible: false,
  source: new ol.source.Vector({
    url: 'https://nycomb-admin.carto.com/api/v2/sql?q=' + encodeURIComponent(communitySql),
    format: new nyc.ol.format.CartoSql()
  }),
  style: borderStyle
});
finderApp.map.addLayer(communityLayer);

var boroSql = 'select ST_AsText(the_geom_webmercator) as wkt_geom, boro_name from borough_boundaries';
var boroLayer = new ol.layer.Vector({
  zIndex: 0,
  visible: false,
  source: new ol.source.Vector({
    url: 'https://nycomb-admin.carto.com/api/v2/sql?q=' + encodeURIComponent(boroSql),
    format: new nyc.ol.format.CartoSql()
  }),
  style: borderStyle
});

finderApp.map.addLayer(boroLayer);

var senateSql = 'select ST_AsText(the_geom_webmercator) as wkt_geom, sen_dis from senate_boundaries';
var senateLayer = new ol.layer.Vector({
  zIndex: 0,
  visible: false,
  source: new ol.source.Vector({
    url: 'https://nycomb-admin.carto.com/api/v2/sql?q=' + encodeURIComponent(senateSql),
    format: new nyc.ol.format.CartoSql()
  }),
  style: borderStyle
});

finderApp.map.addLayer(senateLayer);

var assemblySql = 'select ST_AsText(the_geom_webmercator) as wkt_geom, assem_dist from assembly_boundaries';
var assemblyLayer = new ol.layer.Vector({
  zIndex: 0,
  visible: false,
  source: new ol.source.Vector({
    url: 'https://nycomb-admin.carto.com/api/v2/sql?q=' + encodeURIComponent(assemblySql),
    format: new nyc.ol.format.CartoSql()
  }),
  style: borderStyle
});

finderApp.map.addLayer(assemblyLayer);

new nyc.ol.FeatureTip({
  map: finderApp.map,
  tips: [{
    layer: councilLayer,
    label: function(feature) {
      return {html: 'City Council District: ' + feature.get('coun_dist') + '<br>' + feature.get('rep'),  css: 'council'};
    }
  }, {
    layer: zipcodeLayer,
    label: function(feature) {
      return {html:'Zip Code: ' + feature.get('postalcode'), css: 'zipcode'};
    }
  }, {
    layer: communityLayer,
    label: function(feature) {
      return {html:'Community District: ' + feature.get('boro_cd'), css: 'community'};
    }
  }, {
    layer: boroLayer,
    label: function(feature) {
      return {html: 'Borough: ' + feature.get('boro_name'), css: 'boro'};
    }
  }, {
    layer: senateLayer,
    label: function(feature) {
      return {html: 'NYS Senate District: ' + feature.get('sen_dis'), css: 'boro'};
    }
  }, {
    layer: assemblyLayer,
    label: function(feature) {
      return {html: 'NYS Assembly District: ' + feature.get('assem_dist'), css: 'boro'};
    }
  }]
});

var extraLayers = {
  council: councilLayer,
  zipcode: zipcodeLayer,
  community: communityLayer,
  boro: boroLayer,
  senate: senateLayer,
  assembly: assemblyLayer,
  inundation: inundationLayer,
};