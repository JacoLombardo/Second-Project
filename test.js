let recipes = data.results

let recipeDiv = document.getElementById("dataT");

for (let i = 0; i < recipes.length; i++) {
  let recipeArr = recipes[i].title.split(/[ ,]+/)
  recipeArr.push(recipes[i].id)
  let recipeString =  "https://spoonacular.com/"+ recipeArr.join("-")

  let recipeCard = document.createElement("div");
  recipeCard.classList.add("cards");

  let cardBody = document.createElement("div");
  cardBody.classList.add("card")

  let h1 = document.createElement("h1");
  h1.classList.add("card-title");
  h1.innerText = recipes[i].title;

  let img = document.createElement("img");
  img.setAttribute("src", recipes[i].image);
  img.setAttribute("alt", recipes[i].title);
  img.classList.add("img-card-top");

  recipeCard.appendChild(cardBody);
  cardBody.appendChild(img);
  cardBody.appendChild(h1);
    
  recipeDiv.appendChild(recipeCard);
}


// let a = document.createElement("a");
//   a.classList.add("card-text");
//   a.innerText = "ID " + recipes[i].id;
//   a.setAttribute("href", recipeString)