let list = document.getElementsByTagName('ul')[0];
// ADD NEW ITEM TO END OF LIST
let lastItem = list.lastElementChild;
lastItem.insertAdjacentHTML("afterend", "<li id=\"zero\">cream</li>");

// ADD NEW ITEM START OF LIST
let firstItem = list.firstElementChild;
firstItem.insertAdjacentHTML("beforebegin", "<li id=\"five\">kale</li>");

// ADD A CLASS OF COOL TO ALL LIST ITEMS
for(let i = 0; i < 6; i++)
    list.children.item(i).classList.add('cool');

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
let header = document.getElementsByTagName('h2')[0];
header.insertAdjacentHTML("beforeend", `<span>${list.children.length}</span>`);