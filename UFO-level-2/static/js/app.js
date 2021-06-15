// from data.js
var tableData = data;
console.log(tableData);

// Reference table
var tbody = d3.select("tbody");

//append each row
tableData.forEach(function(sighting) {
    console.log(sighting);
    var row = tbody.append("tr");
    //Object.entries for each sighting
    Object.entries(sighting).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });



// Select the button
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    // Select the input date, state, shape and get the raw HTML nodes
    var inputElement = d3.select("#input");
    // Get the value property of the input date, state, shape
    var inputValue = inputElement.property("value");
    // Filter Data with datetime equal to input value
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue ||
                                                    sighting.city === inputValue ||
                                                    sighting.state === inputValue ||
                                                    sighting.country === inputValue ||
                                                    sighting.shape === inputValue);
    console.log(filteredData);


    filteredData.forEach(function(selections) {

    console.log(selections);
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");
        Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});
});




