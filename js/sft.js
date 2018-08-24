var sql = 'SELECT ' +
  'ST_AsText(the_geom_webmercator) as wkt_geom,' +
  'grant_name as grt,' +
  'funding_source as fnd,' +
  'project_category as cat,' + 
  'project_facility_name as name,' +
  'address as addr,' + 
  'agency as agy,' +
  'project_type as typ,' +
  'estimated_funded_damages as dmg,' +
  'council_district as cd ' +
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
      {name: 'fnd', values: ['CDBG-DR'], label: 'Community Development Block Grant - Disaster Recovery (CDBG-DR)', checked: true},
      {name: 'fnd', values: ['FHWA'], label: 'Federal Highway Administration (FHWA)', checked: true},
      {name: 'fnd', values: ['FEMA 404'], label: 'FEMA-404', checked: true},
      {name: 'fnd', values: ['FTA'], label: 'Federal Transporation Administration (FTA)', checked: true}
    ]
  } , {
    title: 'Managing Agency',
    choices: [
      {name: 'agy', values: ["Administration for Children's Services"], label: "Administration for Children's Services"},
      {name: 'agy', values: ['Board of Elections'], label: "Board of Elections"},  
      {name: 'agy', values: ['Campaign Finance Board'], label: "Campaign Finance Board"},  
      {name: 'agy', values: ['City Council'], label: "City Council"},
      {name: 'agy', values: ['City University of New York'], label: "City University of New York"},    
      {name: 'agy', values: ['Civilian Complaint Review Board'], label: "Civilian Complaint Review Board"},  
      {name: 'agy', values: ['Department of Citywide Administrative Services'], label: "Department of Citywide Administrative Services"},  
      {name: 'agy', values: ['Department of Correction'], label: "Department of Correction"},
      {name: 'agy', values: ['Department of Cultural Affairs'], label: "Department of Cultural Affairs"},
      {name: 'agy', values: ['Department of Design and Construction'], label: "Department of Design and Construction"},
      {name: 'agy', values: ['Department of Education'], label: "Department of Education"},
      {name: 'agy', values: ['Department of Environmental Protection'], label: 'Department of Environmental Protection'},
      {name: 'agy', values: ['Department of Finance'], label: 'Department of Finance'},
      {name: 'agy', values: ['Department of Health and Mental Hygiene'], label: 'Department of Health and Mental Hygiene'},
      {name: 'agy', values: ['Department of Homeless Services'], label: 'Department of Homeless Services'},
      {name: 'agy', values: ['Department of Information Technology and Telecommunications'], label: 'Department of Information Technology and Telecommunications'},
      {name: 'agy', values: ['Department of Investigation'], label: 'Department of Investigation'},
      {name: 'agy', values: ['Department of Parks and Recreation'], label: 'Department of Parks and Recreation'},
      {name: 'agy', values: ['Department of Probation'], label: 'Department of Probation'},
      {name: 'agy', values: ['Department of Records and Information Services'], label: 'Department of Records and Information Services'},
      {name: 'agy', values: ['Department of Sanitation'], label: 'Department of Sanitation'},
      {name: 'agy', values: ['Department of Social Services (Human Resources Administration)'], label: 'Department of Social Services'},  
      {name: 'agy', values: ['Department of Transportation'], label: 'Department of Transportation'},  
      {name: 'agy', values: ['Department of Youth and Community Development'], label: 'Department of Youth and Community Development'},  
      {name: 'agy', values: ['District Attorney - New York County'], label: 'District Attorney - New York County'}, 
      {name: 'agy', values: ['Economic Development Corporation'], label: 'Economic Development Corporation'}, 
      {name: 'agy', values: ['Financial Information Services Agency'], label: 'Financial Information Services Agency'}, 
      {name: 'agy', values: ['Fire Department'], label: 'Fire Department'}, 
      {name: 'agy', values: ['Health and Hospitals Corporation'], label: 'Health and Hospitals Corporation'}, 
      {name: 'agy', values: ['Housing Preservation and Development'], label: 'Housing Preservation and Development'},
      {name: 'agy', values: ['Law Department'], label: 'Law Department'}, 
      {name: 'agy', values: ['New York City Housing Authority'], label: 'New York City Housing Authority'},
      {name: 'agy', values: ['New York Public Library'], label: 'New York Public Library'}, 
      {name: 'agy', values: ['Office of Administrative Trials and Hearings'], label: 'Office of Administrative Trials and Hearings'}, 
      {name: 'agy', values: ['Office of the Mayor'], label: 'Office of the Mayor'}, 
      {name: 'agy', values: ['Police Department'], label: 'Police Department'}, 
      {name: 'agy', values: ['Queens Borough Public Library'], label: 'Queens Borough Public Library'}
    ]
  }],
  facilitySearch: {nameField: '[project_facility_name]'},
  decorations: [decorations]
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
setTimeout(() => { // clear in 5000ms (5 sec)
  highlitedGrantSource.clear();
}, 5000);
});

$(document).ready(function() {
  $('.filter-2 h3').click();
  finderApp.tabs.open('#filters');
  
  var layerChoices = new nyc.Choice({
    target: $('<div></div>'),
    choices: [
      {name: 'layer', label: 'None', value: 'none', checked: true},
      {name: 'layer', label: 'Sandy inundation zone', value: 'innundation'}
    ],
    radio: true
  });

  var layerCollapsible = new nyc.Collapsible({
    target: $('<div></div>'),
    title: 'Layers',
    content: layerChoices.getContainer()
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

finderApp.layer.setZIndex(1000)

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
          cartocss: '#layer{polygon-fill:#826DBA;polygon-opacity:0.5;::outline{line-color:#FFFFFF;line-width:1;line-opacity:0.5;}}',
          sql: 'select * from sandy_inundation_zone'
        }
      }]
    }
  })
});

finderApp.map.addLayer(inundationLayer);

var extraLayers = {
  innundation: inundationLayer
};