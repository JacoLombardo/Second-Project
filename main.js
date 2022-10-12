// random recipe

let randomButton = document.getElementById("random-button");
randomButton.addEventListener("change", fetchRandomRecipe);

const key = "d48de0d4cb95426ca821de405f795581"
const key2 = "2e5b847f2b98407ab40117f7c477691b"
const key3 = "aa2f0763db3344c990249fa9ac70ba3f"

function fetchRandomRecipe() {

  let diet = "";

  let glutenFreeCheckbox = document.getElementById("gluten-free");
    glutenFreeCheckbox.addEventListener("change", fetchRandomRecipe);
  let radioOmnivore = document.getElementById("omnivore");
    radioOmnivore.addEventListener("change", fetchRandomRecipe);
  let radioVegetarian = document.getElementById("vegetarian");
    radioVegetarian.addEventListener("change", fetchRandomRecipe);
  let radioVegan = document.getElementById("vegan");
    radioVegan.addEventListener("change", fetchRandomRecipe);

  if (radioOmnivore.checked == true && glutenFreeCheckbox.checked == false) {
    diet = "";
  }
  if (radioOmnivore.checked == true && glutenFreeCheckbox.checked == true) {
    diet = "&tags=gluten free";
  }
  if (radioVegetarian.checked == true && glutenFreeCheckbox.checked == false) {
    diet = "&tags=vegetarian";
  }
  if (radioVegetarian.checked == true && glutenFreeCheckbox.checked == true) {
    diet = "&tags=gluten free, vegetarian";
  }
  if (radioVegan.checked == true && glutenFreeCheckbox.checked == false) {
    diet = "&tags=vegan";
  }
  if (radioVegan.checked == true && glutenFreeCheckbox.checked == true) {
    diet = "&tags=gluten free, vegan";
  }

  let url = `https://api.spoonacular.com/recipes/random?apiKey=${key3}&number=1${diet}`;
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
    recipeDiv.innerHTML= ""

    let recipeArr = recipes.title.split(/[ ,]+/);
    recipeArr.push(recipes.id);
    let recipeString = "https://spoonacular.com/" + recipeArr.join("-");
    let recipeCard = document.createElement("div");
    recipeCard.classList.add("card");
    recipeCard.setAttribute("style", "width: 25rem; border: 2px solid black;");

    let img = document.createElement("img");
    img.setAttribute("src", recipes.image);
    img.setAttribute("alt", recipes.title);
    img.classList.add("img-card-top");

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let h1 = document.createElement("h1");
    h1.classList.add("card-title");
    h1.innerText = recipes.title;

    let a = document.createElement("a");
    a.setAttribute("href", recipeString);
    a.classList.add("stretched-link");

    recipeCard.appendChild(img);
    recipeCard.appendChild(cardBody);
    cardBody.appendChild(h1);
    cardBody.appendChild(a);
    recipeDiv.appendChild(recipeCard);
}
