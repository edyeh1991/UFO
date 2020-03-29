// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// Keep track of all filters
var filters = {};

// This function will replace your handleClick function
function filter() {
    let filteredDate = d3.select("#datetime");
    if (filteredDate.on('change')) {
      filters["datetime"] = filteredDate.property("value")
    } else {
      filters['datetime'] = null
    };
    
    let filteredCity = d3.select("#city");
    if (filteredCity.on('change')) {
      filters["city"] = filteredCity.property("value")
    } else {
      filters['city'] = null
    };

    let filteredState = d3.select("#state");
    if (filteredState.on('change')) {
      filters["state"] = filteredState.property("value")
    } else {
      filters['state'] = null
    };

    let filteredCountry = d3.select("#country");
    if (filteredCountry.on('change')) {
      filters["country"] = filteredCountry.property("value")
    } else {
      filters['country'] = null
    };

    let filteredShape = d3.select("#shape");
    if (filteredShape.on('change')) {
      filters["shape"] = filteredShape.property("value")
    } else {
      filters['shape'] = null
    };
  filterTable();
}

function filterTable() {
  let filteredData = tableData;

  Object.values(filters).forEach((val)=>{
    if (filters["datetime"]){
        filteredData = filteredData.filter(row => row.datetime===filters["datetime"])
    };
    if (filters["city"]) {
      filteredData = filteredData.filter(row => row.city === filters["city"])
    };
    if (filters["state"]) {
      filteredData = filteredData.filter(row => row.state === filters["state"])
    };
    if (filters["country"]) {
      filteredData = filteredData.filter(row => row.country === filters["country"])
    };
    if (filters["shape"]) {
      filteredData = filteredData.filter(row => row.shape === filters["shape"])
    };
  });

  // Loop through all of the filters and keep any data that
  // matches the filter values
  // Finally, rebuild the table using the filtered Data
    buildTable(filteredData);
  }

// Attach an event to listen for changes to each filter
d3.selectAll("#datetime").on('change', filter);
d3.selectAll("#city").on('change', filter);
d3.selectAll("#state").on('change', filter);
d3.selectAll("#country").on('change', filter);
d3.selectAll("#shape").on('change', filter);

d3.selectAll("#filter-btn").on('click', filterTable);

// Build the table when the page loads
buildTable(tableData);