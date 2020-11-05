// from data.js
var tableData = data;

var tbody = d3.select("tbody");
var button = d3.select("#button")

button.on("click", function() {
    var inputElement = d3.select("#inputDate");

    var inputValue = inputElement.property("value");

    console.log(inputValue);

    
    var filteredData = tableData.filter(incident => incident.datetime === inputValue);

    console.log(filteredData);

})


// tableData.forEach(incident => {
//     console.log(incident);
  
//     //Append one table row 
//     var row = tbody.append("tr");
  
//     //Log each incident report value
//     Object.entries(incident).forEach(([key, value]) => {
//       console.log(key, value);
  
//       //Append a cell per incident report value
//       var cell = row.append("td");
  
//       // Add each cell text value
//       cell.text(value);
//     });
//   });
  

// YOUR CODE HERE!
