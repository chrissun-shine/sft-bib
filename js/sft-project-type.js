new nyc.ol.FinderApp({
  title: 'Sandy Funding Tracker',
  geoclientUrl: 'https://maps.nyc.gov/geoclient/v1/search.json?app_key=74DF5DB1D7320A9A2&app_id=nyc-lib-example',
  facilityTabTitle: 'Projects',
  facilityUrl: 'https://nycomb-admin.carto.com/api/v2/sql?q=' + encodeURIComponent(nyc.ol.format.CartoSql.createSql({from: 'sft_nonbib_dataset'})),
  facilityFormat: new nyc.ol.format.CartoSql(),
  facilityStyle: style,
  filterChoiceOptions: [{
    title: 'Source of Funding',
    choices: [
      {name: 'funding_source', values: ['FEMA-PA'], label: 'FEMA Public Assistance (PA)', checked: true},
      {name: 'funding_source', values: ['CDBG-DR'], label: 'Community Development Block Grant - Disaster Recovery (CDBG-DR)', checked: true},
      {name: 'funding_source', values: ['FHWA'], label: 'Federal Highway Administration (FHWA)', checked: true},
      {name: 'funding_source', values: ['FEMA 404'], label: 'FEMA-404', checked: true},
      {name: 'funding_source', values: ['FTA'], label: 'Federal Transporation Administration (FTA)', checked: true}
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
    } , {
    title: 'Project Types',
    choices: [
    {name: 'typ', values: ['Housing Reconstruction'], label: 'Housing Reconstruction'},
      {name: 'typ', values: ['Parks and Recreational Facilities'], label: 'Parks and Recreational Facilities'},
      {name: 'typ', values: ['School Reconstruction'], label: 'School Reconstruction'},
      {name: 'typ', values: ['Traffic and Planning'], label: 'Traffic and Planning'},
      {name: 'typ', values: ['Facilities and Contents'], label: 'Facilities and Contents'},
      {name: 'typ', values: ['Road Reconstruction / Resurfacing'], label: 'Road Reconstruction / Resurfacing'},
      {name: 'typ', values: ['Waterfront Structures'], label: 'Waterfront Structures'},
      {name: 'typ', values: ['Conduit'], label: 'Conduit'},
      {name: 'typ', values: ['Bridges'], label: 'Bridges'},
      {name: 'typ', values: ['Beach Reopenings'], label: 'Beach Reopenings'},
      {name: 'typ', values: ['Wastewater Treatment System'], label: 'Wastewater Treatment System'},
      {name: 'typ', values: ['Hospital Reconstruction'], label: 'Hospital Reconstruction'},
      {name: 'typ', values: ['Aquarium'], label: 'Aquarium'},
      {name: 'typ', values: ['Boardwalk'], label: 'Boardwalk'},
      {name: 'typ', values: ['Shoreline Rehabilitation'], label: 'Shoreline Rehabilitation'},
      {name: 'typ', values: ['Debris Removal'], label: 'Debris Removal'},
      {name: 'typ', values: ['Vehicle and Equipment Usage'], label: 'Vehicle and Equipment Usage'},
      {name: 'typ', values: ['Vehicle Replacement'], label: 'Vehicle Replacement'},
      {name: 'typ', values: ['Emergency Protective Measures'], label: 'Emergency Protective Measures'},
      {name: 'typ', values: ['Ferries'], label: 'Ferries'},
      {name: 'typ', values: ['City Labor'], label: 'City Labor'}
    ]
  }],
  facilitySearch: {nameField: '[project_facility_name]'},
  decorations: [decorations]
});

$(document).ready(function() {
  $('.filter-1 h3').click(),
  $('.filter-2 h3').click();
  finderApp.tabs.open('#filters');
});