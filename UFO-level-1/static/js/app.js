// from data.js
var tableData = data;

var tbody = d3.select("tbody");

tableData.forEach(incident => {
    console.log(incident);
  
    //Append one table row 
    var row = tbody.append("tr");
  
    //Log each incident report value
    Object.entries(incident).forEach(([key, value]) => {
      console.log(key, value);
  
      //Append a cell per incident report value
      var cell = row.append("td");
  
      // Add each cell text value
      cell.text(value);
    });
  });
  

// YOUR CODE HERE!
