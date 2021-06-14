// from data.js
var tableData = data;
console.log(tableData);

// Reference table
var tbody = d3.select("tbody");

// get data into table columns
tableData.forEach(function(sighting) {
    console.log(sighting);
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });



