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

function createFilter(tableInfo){
    
    var inputDateElement = d3.select("#inputDate");
    var inputCityElement = d3.select("#inputCity");
    var inputStateElement = d3.select("#inputState");
    var inputCountryElement = d3.select("#inputCountry");
    var inputShapeElement = d3.select("#inputShape");

    var inputDateValue = inputDateElement.property("value");
    var inputCityValue = inputCityElement.property("value");
    var inputStateValue = inputStateElement.property("value");
    var inputCountryValue = inputCountryElement.property("value");
    var inputShapeValue = inputShapeElement.property("value");

    var radioChecked = d3.select('input[name="inlineRadioOptions"]:checked').node().value

    console.log("radio: ", radioChecked)
      
    if (radioChecked === "or"){
        var finalFiltered  = tableInfo.filter(incident => incident.datetime === inputDateValue || incident.city.toLowerCase() === inputCityValue.toLowerCase() ||
        incident.state.toLowerCase() === inputStateValue.toLowerCase() || incident.country.toLowerCase() === inputCountryValue.toLowerCase() ||
        incident.shape.toLowerCase() === inputShapeValue.toLowerCase())
        
        console.log(finalFiltered)

        return finalFiltered
    }  
    else {
        if ( inputDateValue !== ""){
            var dateFiltered = tableInfo.filter(incident => incident.datetime === inputDateValue);  
        }
        else {var dateFiltered = tableInfo}
        
        if (inputCityValue !== "" ){
            var cityFiltered = dateFiltered.filter(incident => incident.city.toLowerCase() === inputCityValue.toLowerCase());
        }
        else {var cityFiltered = dateFiltered}
    
        // console.log(cityFiltered);
    
        if (inputStateValue !== "" ){
            var stateFiltered = cityFiltered.filter(incident => incident.state.toLowerCase() === inputStateValue.toLowerCase());
        }
        else {var stateFiltered = cityFiltered}
    
        // console.log(stateFiltered);
    
        if (inputCountryValue !== "" ){
            var countryFiltered = stateFiltered.filter(incident => incident.country.toLowerCase() === inputCountryValue.toLowerCase());
        }
        else {var countryFiltered = stateFiltered}
    
        // console.log(countryFiltered);
    
        if (inputShapeValue !== "" ){
            var finalFiltered = countryFiltered.filter(incident => incident.shape.toLowerCase() === inputShapeValue.toLowerCase());
        }
        else {var finalFiltered = countryFiltered}
        
        console.log(finalFiltered);
        
        return finalFiltered  
    };   
}

showTableInfo(tableData)



buttonFilter.on("click", function() {
    d3.selectAll(".incident").remove();
    
    var filteredData = createFilter(tableData)

    console.log(filteredData);

    showTableInfo(filteredData)

})

buttonClear.on("click", function() {
    d3.selectAll(".incident").remove();
    d3.select("#inputDate").property("value", "")
    d3.select("#inputCity").property("value", "")
    d3.select("#inputState").property("value", "")
    d3.select("#inputCountry").property("value", "")
    d3.select("#inputShape").property("value", "")

    showTableInfo(tableData)


})

  


