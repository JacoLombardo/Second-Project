console.log(data.results.length)

const recipies = data.results

let recipeT = document.getElementById("dataT");

// for (i = 0; i < recipies.length; i++) {
//     let tr = document.createElement("tr");
//     recipeT.appendChild(tr);
// }



function createTable() {
  

  for (let i = 0; i < recipies.length; i++) {
  let tr = document.createElement("tr");

  let td1 = document.createElement("td");
  td1.innerHTML = "Nr. " + (i + 1);
  let td2 = document.createElement("td");
  td2.innerHTML = recipies[i].title;
  let td3 = document.createElement("td");
  td3.innerHTML = recipies[i].image;

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);

  recipeT.appendChild(tr);
}
}

createTable()


function moreDetails() {
  
}