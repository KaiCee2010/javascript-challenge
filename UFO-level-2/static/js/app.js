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



buttonFilter.on("click", function() {
    d3.selectAll(".incident").remove();
    
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
    
    var strArray = [];

    console.log("This is the input value", inputDateValue);

    if ( inputDateValue !== ""){
        strArray.push("incident.datetime === inputDateValue");  
    }
    console.log(strArray);

    if (inputCityValue !== "" ){
        strArray.push("incident.city === inputCityValue");
    }
    console.log(strArray);

    if (inputStateValue !== "" ){
        strArray.push("incident.city === inputStateValue");
    }
    console.log(strArray);

    if (inputCountryValue !== "" ){
        strArray.push("incident.city === inputCountryValue");
    }
    console.log(strArray);

    if (inputShapeValue !== "" ){
        strArray.push("incident.city === inputShapeValue");
    }
    console.log(strArray);

    // if (typeof inputCityValue !== null ){
    //     // this statement will not execute
    //     strArray.push("incident.city === inputCityValue");
    // }
    // console.log(strArray);


    var finalStr = strArray.join(" && ")      
      
    console.log("This is the final string", finalStr)

    // var filteredData = tableData.filter(incident => incident.datetime === inputDateValue || 
    //     incident.city.toLowerCase() === inputCityValue.toLowerCase());

    // console.log(filteredData);

    // showTableInfo(filteredData)

})

buttonClear.on("click", function() {
    d3.selectAll(".incident").remove();
    d3.select("#inputDate").property("value", "")
    d3.select("#inputCity").property("value", "")

    showTableInfo(tableData)


})

  


