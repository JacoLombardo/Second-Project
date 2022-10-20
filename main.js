// random recipe

let randomButton = document.getElementById("random-button");
randomButton.addEventListener("change", fetchRandomRecipe);

const key = "d48de0d4cb95426ca821de405f795581"
const key2 = "2e5b847f2b98407ab40117f7c477691b"
const key3 = "aa2f0763db3344c990249fa9ac70ba3f"

function fetchRandomRecipe() {

  let diet = "";
  let diet2 = "";
  let diet3 = "";
  let diet4 = "";

  let glutenFreeCheckbox = document.getElementById("gluten-free");
    glutenFreeCheckbox.addEventListener("change", fetchRandomRecipe);
  let radioOmnivore = document.getElementById("omnivore");
    radioOmnivore.addEventListener("change", fetchRandomRecipe);
  let radioVegetarian = document.getElementById("vegetarian");
    radioVegetarian.addEventListener("change", fetchRandomRecipe);
  let radioVegan = document.getElementById("vegan");
    radioVegan.addEventListener("change", fetchRandomRecipe);
  let dairyFreeCheckbox = document.getElementById("dairy-free")
    dairyFreeCheckbox.addEventListener("change", fetchRandomRecipe);

  if (glutenFreeCheckbox.checked == true) {
    diet = "gluten free, ";
  }
  if (radioVegetarian.checked == true) {
    diet2 = "vegetarian, ";
  }
  if (radioVegan.checked == true) {
    diet3 = "vegan, ";
  }
  if (dairyFreeCheckbox.checked == true) {
    diet4 = "dairy free, ";
  }

  let url = `https://api.spoonacular.com/recipes/random?apiKey=${key3}&number=1&tags=${diet}${diet2}${diet3}${diet4}`;
  fetch(url)
    .then(response => response.json())
    .then((result) => {
      printData(result);
    })
    .catch((error) => console.log(error));
}

function printData(info) {
  let recipes = info.recipes[0];
    let recipeDiv = document.getElementById("random-recipe");
    recipeDiv.innerText = "";
  
    let recipeCard = document.createElement("div");
    recipeCard.classList.add("card");
    recipeCard.setAttribute("style", "width: 18rem; border: 2px solid black;");

    let imgLink = document.createElement("a");
    imgLink.setAttribute("href", "instructions.html?id=" + recipes.id);
    imgLink.classList.add("card")
    imgLink.setAttribute("style", "border: none")
    imgLink.setAttribute("target", "_black");

    let img = document.createElement("img");
    img.setAttribute("src", recipes.image);
    img.setAttribute("alt", recipes.title);
    img.classList.add("img-card-top");

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let h1 = document.createElement("h1");
    h1.classList.add("card-title");
    h1.innerText = recipes.title;
    
    let favouriteLink = document.createElement("a")
    favouriteLink.addEventListener("click", function(){
      addToFavourites(recipes.id)
    });

    let favourite = document.createElement("img");
    favourite.setAttribute("src", "Images/favourite.png");    
    favourite.setAttribute("alt", "Add to favourites!");
    favourite.setAttribute("id", recipes.id);
    favourite.classList.add("favourite-icon");

    let favourites = JSON.parse(localStorage.getItem("Favourites"));
    for (let j = 0; j < favourites.length; j++){
      if (recipes.id == favourites[j]) {
        favourite.removeAttribute("src", "Images/favourite.png");
        favourite.setAttribute("src", "Images/favourited.png");

      }}
  
    recipeCard.appendChild(imgLink);
    imgLink.appendChild(img);
    recipeCard.appendChild(cardBody);
    cardBody.appendChild(h1);
    cardBody.appendChild(favouriteLink)
    favouriteLink.appendChild(favourite);
    recipeDiv.appendChild(recipeCard);
}


function addToFavourites(id) {
  console.log("favourite", id)
  let favIcon = document.getElementById(id);
  favIcon.removeAttribute("src", "Images/favourite.png");
  favIcon.setAttribute("src", "Images/favourited.png");

  let favourites = JSON.parse(localStorage.getItem("Favourites"));
  favourites.push(id);
  localStorage.setItem("Favourites", JSON.stringify(favourites));
}
