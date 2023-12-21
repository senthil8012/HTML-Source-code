"use strict";
// api url
const api_url =
    "https://raw.githubusercontent.com/robertholtom/code-test/master/json/code-test.json";

// Defining async function
async function getapi(url) {
    const response = await fetch(url);
    var data = await response.json();
    show(data);
}

// Calling that async function
getapi(api_url);

// Function to define innerHTML for HTML table
function show(data) {
    let table =""
    for (let r of data.articles) {
        table += `<tr> 
    <td><h1>${r.primarySectionRouteName}</h1> <br>
      <h2>${r.headline}</h2>
      <p>${r.standfirst}</p></td>
    <td><a href="${r.link}" title="${r.thumbnail.title}"><img width="${r.thumbnail.width}" height="${r.thumbnail.height}" title="${r.thumbnail.title}" src="${r.thumbnail.src}"/></a></td>           
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("datashow").innerHTML = table;
}
