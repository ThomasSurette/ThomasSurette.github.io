function generateTable(){
    // Get inputs from form
    let minRow = parseInt(document.getElementById('numForm').minRow.value);
    let maxRow = parseInt(document.getElementById('numForm').maxRow.value);
    let minCol = parseInt(document.getElementById('numForm').minCol.value);
    let maxCol = parseInt(document.getElementById('numForm').maxCol.value);

    // Clear existing table
    let table = document.querySelector("table");
    table.innerHTML = ""
    
    // Generate table head
    generateHead(table, minCol, maxCol);
    // Generate table body
    generateBody(table, minCol, maxCol, minRow, maxRow);
}
function generateHead(table, minCol, maxCol){
    // Add thead
    let tHead = table.createTHead();
    // Insert Row
    let row = tHead.insertRow();
    // Add empty cell to first spot in header
    let th = document.createElement("th");
    let text = document.createTextNode('');
    th.appendChild(text);
    row.appendChild(th);

    // Loop from mincol to maxcol and add column headers
    for(let i = minCol; i <= maxCol; i++){
        let th = document.createElement("th");
        let text = document.createTextNode(i.toString());
        th.appendChild(text);
        row.appendChild(th);
    }

}
function generateBody(table, minCol, maxCol, minRow, maxRow){
    // Loop from minRow to maxRow and generate a row for each
    for(let i = minRow; i <= maxRow; i++){
        // Add new row
        let row = table.insertRow();
        // Add row header equal to row value
        let th = document.createElement("th");
        let text = document.createTextNode(i);
        th.appendChild(text);
        row.appendChild(th);
        // Loop through row from mincol to maxcol and add th with value of current col * current row
        for (let j = minCol; j <= maxCol; j++) {
            let cell = row.insertCell();
            let text = document.createTextNode((i*j).toString());
            // Add title to show equation when hovering over cell
            cell.title = `${i} x ${j} = ${i*j}`;
            cell.appendChild(text);
          }
    } 
}

// Method to compare inputs to make sure max is greater
jQuery.validator.addMethod("compare", function (value, element, arg) {
    return (parseInt(value) >= parseInt($(arg).val()) && $(arg).val()!="");
});
//Validate form
$("#numForm").validate({
    //Form rules
    rules: {
        //Must enter a number between -50 and 50 for minCol
        "minCol": {
            required: true,
            number: true,
            range:[-50,50]
        },
        //Must enter a number between -50 and 50 for maxCol
        "maxCol": {
            required: true,
            number: true,
            range:[-50,50],
            compare: $("#minCol")
        },
        //Must enter a number between -50 and 50 for minRow
        "minRow":{
            required: true,
            number: true,
            range:[-50,50],
        },
        //Must enter a number between -50 and 50 for maxRow
        "maxRow": {
            required: true,
            number: true,
            range:[-50,50],
            compare: $("#minRow")
        },
    },
    //Error messages
    messages: {
        "minCol": {
            required: "This field is required",
            number: "Please enter a valid number",
            
        },
        "maxCol": {
            required: "This field is required",
            number: "Please enter a valid number",
            compare:"Maximum Columns must be greater than or equal to Minimum Columns"
        },
        "minRow":{
            required: "This field is required",
            number: "Please enter a valid number",
        },
        "maxRow": {
            required: "This field is required",
            number: "Please enter a valid number",
            compare:"Maximum Columns must be greater than or equal to Minimum Columns"
        },
    }
});
//Only enable submit button when form is valid
$('input').on('blur keyup', function() {
    if ($("#numForm").valid()) {
        $('#submit').prop('disabled', false);  
    } else {
    $('#submit').prop('disabled', 'disabled');
}
});
