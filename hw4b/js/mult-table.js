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
    $( "#sliderMinCol" ).slider("option", "value", $( "#minCol" ).val());
    $( "#sliderMaxCol" ).slider("option", "value", $( "#maxCol" ).val());
    $( "#sliderMinRow" ).slider("option", "value", $( "#minRow" ).val());
    $( "#sliderMaxRow" ).slider("option", "value", $( "#maxRow" ).val());
    if($("#numForm").valid()){
            generateTable()
          }
});
//Min Col Slider
$(function() {
    $("#sliderMinCol").slider({
       min: -50,
       max: 50,
       value: 0,
       animate:"slow",
       orientation: "horizontal",
       slide: function( event, ui ) {
          $( "#minCol" ).val(ui.value);
          if ($("#numForm").valid()) {
            $('#submit').prop('disabled', false); 
        } else {
        $('#submit').prop('disabled', 'disabled');
        }
          if($("#numForm").valid()){
            generateTable()
          }
       }
    });
    $( "#minCol" ).val( $( "#sliderMinCol" ).slider( "value" ) );
 });
//Max col slider
$(function() {
    $("#sliderMaxCol").slider({
       min: -50,
       max: 50,
       value: 0,
       animate:"slow",
       orientation: "horizontal",
       slide: function( event, ui ) {
          $( "#maxCol" ).val(ui.value);
          if ($("#numForm").valid()) {
            $('#submit').prop('disabled', false); 
        } else {
        $('#submit').prop('disabled', 'disabled');
        }
          if($("#numForm").valid()){
            generateTable()
          }
       }
    });
    $( "#maxCol" ).val( $( "#sliderMaxCol" ).slider( "value" ) );
 });

//Min Row Slider
$(function() {
    $("#sliderMinRow").slider({
       min: -50,
       max: 50,
       value: 0,
       animate:"slow",
       orientation: "horizontal",
       slide: function( event, ui ) {
          $( "#minRow" ).val(ui.value);
          if ($("#numForm").valid()) {
            $('#submit').prop('disabled', false); 
        } else {
        $('#submit').prop('disabled', 'disabled');
        }
          if($("#numForm").valid()){
            generateTable()
          }
       }
    });
    $( "#minRow" ).val( $( "#sliderMinRow" ).slider( "value" ) );
 });

//Max Row slider
$(function() {
    $("#sliderMaxRow").slider({
       min: -50,
       max: 50,
       value: 0,
       animate:"slow",
       orientation: "horizontal",
       slide: function( event, ui ) {
          $( "#maxRow" ).val(ui.value);
          if ($("#numForm").valid()) {
            $('#submit').prop('disabled', false); 
        } else {
        $('#submit').prop('disabled', 'disabled');
        }
          if($("#numForm").valid()){
            generateTable()
          }
       }
    });
    $( "#maxRow" ).val( $( "#sliderMaxRow" ).slider( "value" ) );
 });
    //loads the onclick listener for the close button
    function loadTabOnClick(){
        if($("#tabList").html() != ""){
            $("#tabs").tabs().on("click", "button.btn-close", function() {
                //finds the table
                let tableID = this.closest("li").querySelector("a").text;
                let checkedTable = document.getElementById(`${tableID}`);
                //selects the tab table
                const child = checkedTable.querySelector(".table-div");
                //removes the tab ant its content
                this.parentElement.parentElement.remove();
                child.parentElement.remove();
                $("#tabs").tabs().tabs("refresh");
                if($("#tabList").html() == ""){
                    $("#tabs").tabs("destroy")
                }
            });
        }
    }
    //Removes all checked tabs
    function removeSelectedTabs(){
        //finds all checkboxes
        const checkBox = document.querySelectorAll(".checkBox");
        //for every checkbox
        checkBox.forEach(checkBoxChecked => {
            //finds the table
            let tableID = checkBoxChecked.closest("li").querySelector("a").text;
            const checkedTable = document.getElementById(`${tableID}`)
            //selects the tab table
            const child = checkedTable.querySelector(".table-div")
            //if checked, removes the tab and its content
            if (checkBoxChecked.checked == true) {
                checkBoxChecked.parentElement.parentElement.remove()
                child.parentElement.remove()
            }
        });
        $("#tabs").tabs("refresh");
        if($("#tabList").html() == ""){
            $("#tabs").tabs("destroy")
        }
    }
//adds a new tab
function addTab(){
    //if it's the first tab, initialize the tab container
    if($("#tabList").html() == ""){
        $("#tabs").tabs();
    }
    //get values
    let minRow = parseInt($("input#minRow").val());
    let maxRow = parseInt($("input#maxRow").val());
    let minCol = parseInt($("input#minCol").val());
    let maxCol = parseInt($("input#maxCol").val());

    //make the title
    let title = `(${minRow},${maxRow})X(${minCol},${maxCol})`

    //if there isn't an identical table, add the current table
    if(document.getElementById(title) == null){
        //add tab
        $("#tabList").append(`<li><div class="d-flex flex-row align-items-center px-3 py-2 justify-content-between"><input type="checkbox" class="checkBox"><a class="" href="#${title}">${title}</a><button type="button" onclick="removeTab(${title})" class="btn-close" aria-label="Close"></button></div></li>`)
        //add table
        $("#tabData").append(`<div id="${title}"><div class="table-div">${$("#table-div").html()}</div></div>`)
        //refresh tabs
        $("#tabs").tabs("refresh")
    }
    //load the on click listeners for the tab close buttons
    loadTabOnClick();

}

function generateTable(){
    // Get inputs from form
    let minRow = parseInt($("input#minRow").val());
    let maxRow = parseInt($("input#maxRow").val());
    let minCol = parseInt($("input#minCol").val());
    let maxCol = parseInt($("input#maxCol").val());

    // Clear existing table
    let table = document.querySelector("#table-div table");
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
