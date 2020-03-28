// import data from data.js
const tableData = data;

// reference HTML table using D3
var tbody = d3.select('tbody');

function buildTable(data) {
    tbody.html('');

    data.forEach((datarow) => {
        let row = tbody.append('tr');
        Object.values(dataRow.forEach((val) => {
            let cell = row.append('td');
            cell.text(val);
            }
        );
    });
}