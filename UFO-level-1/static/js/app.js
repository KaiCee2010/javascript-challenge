// from data.js
var tableData = data;

var tbody = d3.select("tbody");
var buttonFilter = d3.select("#buttonFilter")
var buttonClear = d3.select("#buttonClear")

tableData.forEach(incident => {
    console.log(incident);
  
    //Append one table row 
    var row = tbody.append("tr").attr("class", "incident");
  
    //Log each incident report value
    Object.entries(incident).forEach(([key, value]) => {
      console.log(key, value);
  
      //Append a cell per incident report value
      var cell = row.append("td");
  
      // Add each cell text value
      cell.text(value);
    });
  });

buttonFilter.on("click", function() {
    d3.selectAll(".incident").remove();
    
    var inputElement = d3.select("#inputDate");

    var inputValue = inputElement.property("value");

    console.log(inputValue);

    
    var filteredData = tableData.filter(incident => incident.datetime === inputValue);

    console.log(filteredData);

    filteredData.forEach(incident => {
        console.log(incident);
      
        //Append one table row 
        var row = tbody.append("tr").attr("class", "incident");
      
        //Log each incident report value
        Object.entries(incident).forEach(([key, value]) => {
          console.log(key, value);
      
          //Append a cell per incident report value
          var cell = row.append("td");
      
          // Add each cell text value
          cell.text(value);
        });
    });

})

buttonClear.on("click", function() {
    d3.selectAll(".incident").remove();
    
    tableData.forEach(incident => {
        console.log(incident);
      
        //Append one table row 
        var row = tbody.append("tr").attr("class", "incident");
      
        //Log each incident report value
        Object.entries(incident).forEach(([key, value]) => {
          console.log(key, value);
      
          //Append a cell per incident report value
          var cell = row.append("td");
      
          // Add each cell text value
          cell.text(value);
        });
      });


})

  

// YOUR CODE HERE!
