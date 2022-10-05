// normal recipes

let recipes = data.results

let recipeDiv = document.getElementById("dataT");

for (let i = 0; i < recipes.length; i++) {
  let recipeArr = recipes[i].title.split(/[ ,]+/)
  recipeArr.push(recipes[i].id)
  let recipeString =  "https://spoonacular.com/"+ recipeArr.join("-")

  let recipeCard = document.createElement("div");
  recipeCard.classList.add("card");
  recipeCard.setAttribute("style", "width: 18rem; border: 2px solid black;");

  let img = document.createElement("img");
  img.setAttribute("src", recipes[i].image);
  img.setAttribute("alt", recipes[i].title);
  img.classList.add("img-card-top");

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let h1 = document.createElement("h1");
  h1.classList.add("card-title");
  h1.innerText = recipes[i].title;

  let a = document.createElement("a");
  a.classList.add("card-text");
  a.innerText = "ID " + recipes[i].id;
  a.setAttribute("href", recipeString)

  recipeCard.appendChild(img);
  recipeCard.appendChild(cardBody);
  cardBody.appendChild(a);
  cardBody.appendChild(h1);
    
  recipeDiv.appendChild(recipeCard);
}
