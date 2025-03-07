let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];  //dummy data in the array
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    console.log(myLeads);
});

// Let's try a different method!
// for(let i = 0; i < myLeads.length; i++) {
    // console.log(myLeads[i]);
    // ulEl.textContent += myLeads[i] + " "
    // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"  //This is easy to understand rather then below 3 lines of code.
    // create element
    // set text content
    // append to ul
    // const li = document.createElement("li");
    // li.textContent = myLeads[i];
    // ulEl.append = li;

// }

// 1. Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with
let listItems = "";
for (let i = 0; i < myLeads.length; i++) {
    // 2. Add the item to the listItems variable instead of the ulEl.innerHTML
    listItems += "<li>" + myLeads[i] + "</li>"
}
// 3. Render the listItems inside the unordered list using ulEl.innerHTML
ulEl.innerHTML = listItems;