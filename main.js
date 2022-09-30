console.log(data)

let recipeTable = document.getElementById("tbody");

for (i = 0; i < data.length; i++) {
    let tr = document.createElement("tr");
    recipeTable.appendChild(tr);
}

for (let i = 0; i < data.length; i++) {
  let tr = document.createElement("tr");

  let td1 = document.createElement("td");
  td1.innerHTML = "Nr. " + (i + 1);
  let td2 = document.createElement("td");
  td2.innerHTML = data[i].title;
  let td3 = document.createElement("td");
  td3.innerHTML = data[i].image;

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);

  recipeTable.appendChild(tr);
}