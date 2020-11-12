// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");
var buttonFilter = d3.select("#buttonFilter")
var buttonClear = d3.select("#buttonClear")

function showTableInfo(tableInfo){
    tableInfo.forEach(incident => {
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
}

showTableInfo(tableData)


// When button is clicked, filter data
buttonFilter.on("click", function() {
    d3.selectAll(".incident").remove();

    // Assign form fields to variables
    var inputDateElement = d3.select("#inputDate");

    // Assign values of form elements to variables
    var inputDateValue = inputDateElement.property("value");
    

    console.log(inputDateValue);

    
    var filteredData = tableData.filter(incident => incident.datetime === inputDateValue);

    console.log(filteredData);

    showTableInfo(filteredData)

})

// When button is clicked, clear filter
buttonClear.on("click", function() {
    d3.selectAll(".incident").remove();
    d3.select("#inputDate").property("value", "")

    showTableInfo(tableData)


})

  


