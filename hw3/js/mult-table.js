function generateTable(){
    // Get inputs from form
    let minRow = parseInt(document.getElementById('numForm').minRow.value);
    let maxRow = parseInt(document.getElementById('numForm').maxRow.value);
    let minCol = parseInt(document.getElementById('numForm').minCol.value);
    let maxCol = parseInt(document.getElementById('numForm').maxCol.value);

    // Check for an existing error message and clear it if there is one
    var alert = document.getElementById("alert");
    if(alert){
        alert.parentNode.removeChild(alert);
    }

    // Potential Errors

    // If MinCol is not a number
    if(!minCol){
        document.getElementById('numForm').minCol.insertAdjacentHTML('afterend', '<div id="alert" class="alert alert-danger mt-2" role="alert"> Please enter a numeric value</div>');
        return;
    }

    // If MaxCol is not a number
    if(!maxCol){
        document.getElementById('numForm').maxCol.insertAdjacentHTML('afterend', '<div id="alert" class="alert alert-danger mt-2" role="alert"> Please enter a numeric value</div>');
        return;
    }
    // If MaxCol < MinCol
    if(maxCol < minCol){
            document.getElementById('numForm').maxCol.insertAdjacentHTML('afterend', '<div id="alert" class="alert alert-danger mt-2" role="alert"> Maximum Columns must be greater than or equal to Minimum Columns</div>');
            return;
    }
    // If the column range > 500
    if(maxCol - minCol > 500){
        document.getElementById('numForm').maxCol.insertAdjacentHTML('afterend', '<div id="alert" class="alert alert-danger mt-2" role="alert"> Range between Minimum and Maximum Columns must be less than or equal to 500</div>');
        return;
    }
    // If MinRow is not a number
    if(!minRow){
        document.getElementById('numForm').minRow.insertAdjacentHTML('afterend', '<div id="alert" class="alert alert-danger mt-2" role="alert"> Please enter a numeric value</div>');
        return;
    }
    // If MaxRow is not a number
    if(!maxRow){
        document.getElementById('numForm').maxRow.insertAdjacentHTML('afterend', '<div id="alert" class="alert alert-danger mt-2" role="alert"> Please enter a numeric value</div>');
        return;
    }
    // If MaxRow < MinRow
    if(maxRow < minRow){
        document.getElementById('numForm').maxRow.insertAdjacentHTML('afterend', '<div id="alert" class="alert alert-danger mt-2" role="alert"> Maximum Rows must be greater than or equal to Minimum Rows</div>');
        return;
    }
    // If the row range > 500
    if(maxRow - minRow > 500){
        document.getElementById('numForm').maxRow.insertAdjacentHTML('afterend', '<div id="alert" class="alert alert-danger mt-2" role="alert"> Range between Minimum and Maximum Rows must be less than or equal to 500</div>');
        return;
    }
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
