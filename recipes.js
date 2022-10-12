
const key2 = "d48de0d4cb95426ca821de405f795581"
const key = "2e5b847f2b98407ab40117f7c477691b"
const key3 = "aa2f0763db3344c990249fa9ac70ba3f"


////// input

let nameDiv = document.getElementById("by-name")
let ingredientsDiv = document.getElementById("by-ingredients")
let caloriesDiv = document.getElementById("by-calories")
let cuisineDiv = document.getElementById("by-cuisine")

// by name

function byName() {
  console.log("by name search");

  nameDiv.style.display = "block"
  ingredientsDiv.style.display = "none"
  caloriesDiv.style.display = "none"
  cuisineDiv.style.display = "none"
  
  filterByName();
}

byName();


function filterByName() {
  let input = document.getElementById("by-name-search").value;
  let recipes = data.recipes;

  let a = input.split(" ");
  for (let i = 0; i < a.length; i++){
    a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
  }
  input = a.join(" ");

  recipes = recipes.filter((recipe) => { return recipe.title.includes(input) });

  let vegetarianRecipes = recipes.filter((recipe) => { return recipe.vegetarian === true });
  let veganRecipes = recipes.filter((recipe) => { return recipe.vegan === true });
  let glutenFreeRecipes = recipes.filter((recipe) => { return recipe.glutenFree == true });
  let vegetarianGFRecipes = recipes.filter((recipe) => { return recipe.vegetarian === true && recipe.glutenFree == true });
  let veganGFRecipes = recipes.filter((recipe) => { return recipe.vegan === true && recipe.glutenFree == true });

  let glutenFreeCheckbox = document.getElementById("gluten-free")
    glutenFreeCheckbox.addEventListener("change", filterByName);
  let radioOmnivore = document.getElementById("Omnivore")
    radioOmnivore.addEventListener("change", filterByName);
  let radioVegetarian = document.getElementById("Vegetarian")
    radioVegetarian.addEventListener("change", filterByName);
  let radioVegan = document.getElementById("Vegan")
    radioVegan.addEventListener("change", filterByName);

  if (radioOmnivore.checked == true && glutenFreeCheckbox.checked == false) {
    console.log("omnivore recipes");
    recipes = recipes;
  }
  if (radioOmnivore.checked == true && glutenFreeCheckbox.checked == true) {
    console.log("omnivore gluten free recipes");
    recipes = glutenFreeRecipes;
  }
  if (radioVegetarian.checked == true && glutenFreeCheckbox.checked == false) {
    console.log("vegetarian recipes");
    recipes = vegetarianRecipes;
  }
  if (radioVegetarian.checked == true && glutenFreeCheckbox.checked == true) {
    console.log("vegetarian gluten free recipes");
    recipes = vegetarianGFRecipes;
  }
  if (radioVegan.checked == true && glutenFreeCheckbox.checked == false) {
    console.log("vegan recipes");
    recipes = veganRecipes;
  }
  if (radioVegan.checked == true && glutenFreeCheckbox.checked == true) {
    console.log("vegan gluten free recipes");
    recipes = veganGFRecipes;
  }

  printData(recipes);
}


// by ingredients

function byIngredients() {
  console.log("by ingredients search")

  nameDiv.style.display = "none"
  ingredientsDiv.style.display = "block"
  caloriesDiv.style.display = "none"
  cuisineDiv.style.display = "none"

  fetchByIngredients();
}

function fetchByIngredients() {
  console.log("looking for ingredients");
  let input = document.getElementById("by-ingredients-search").value;
  let diet = "";

  let glutenFreeCheckbox = document.getElementById("gluten-free")
    glutenFreeCheckbox.addEventListener("change", fetchByIngredients);
  let radioOmnivore = document.getElementById("Omnivore")
    radioOmnivore.addEventListener("change", fetchByIngredients);
  let radioVegetarian = document.getElementById("Vegetarian")
    radioVegetarian.addEventListener("change", fetchByIngredients);
  let radioVegan = document.getElementById("Vegan")
    radioVegan.addEventListener("change", fetchByIngredients);

  if (radioOmnivore.checked == true && glutenFreeCheckbox.checked == false) {
    diet = "";
  }
  if (radioOmnivore.checked == true && glutenFreeCheckbox.checked == true) {
    diet = "&diet=gluten free";
  }
    
  if (radioVegetarian.checked == true && glutenFreeCheckbox.checked == false) {
    diet = "&diet=vegetarian";
  }
  
  if (radioVegetarian.checked == true && glutenFreeCheckbox.checked == true) {
    diet = "&diet=gluten free, vegetarian";
  }
  
  if (radioVegan.checked == true && glutenFreeCheckbox.checked == false) {
    diet = "&diet=vegan";
  }
  
  if (radioVegan.checked == true && glutenFreeCheckbox.checked == true) {
    diet = "&diet=gluten free, vegan";
  }
  let url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${key}&ingredients=${input}&number=5&ranking=1${diet}`;
  fetch(url)
    .then(response => response.json())
    .then((result) => {
      printData(result);
    })
    .catch((error) => console.log(error));
}



// by calories

function byCalories() {
  console.log("by calories search")

  nameDiv.style.display = "none"
  ingredientsDiv.style.display = "none"
  caloriesDiv.style.display = "block"
  cuisineDiv.style.display = "none"

  fetchByCalories();
}

function fetchByCalories() {
  console.log("looking for calories");
  let input = document.getElementById("by-calories-search").value;
  let diet = "";

  let glutenFreeCheckbox = document.getElementById("gluten-free")
    glutenFreeCheckbox.addEventListener("change", fetchByCalories);
  let radioOmnivore = document.getElementById("Omnivore")
    radioOmnivore.addEventListener("change", fetchByCalories);
  let radioVegetarian = document.getElementById("Vegetarian")
    radioVegetarian.addEventListener("change", fetchByCalories);
  let radioVegan = document.getElementById("Vegan")
    radioVegan.addEventListener("change", fetchByCalories);

  if (radioOmnivore.checked == true && glutenFreeCheckbox.checked == false) {
    diet = "";
  }
  if (radioOmnivore.checked == true && glutenFreeCheckbox.checked == true) {
  }
  if (radioVegetarian.checked == true && glutenFreeCheckbox.checked == false) {
    diet = "&diet=vegetarian";
  }
  if (radioVegetarian.checked == true && glutenFreeCheckbox.checked == true) {
    diet = "&diet=gluten free, vegetarian";
  }
  if (radioVegan.checked == true && glutenFreeCheckbox.checked == false) {
    diet = "&diet=vegan";
  }
  if (radioVegan.checked == true && glutenFreeCheckbox.checked == true) {
    diet = "&diet=gluten free, vegan";
  }

  let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&maxCalories=${input}&number=5${diet}`;
  fetch(url)
    .then(response => response.json())
    .then((result) => {
      result = result.results;
      printData(result);
    })
    .catch((error) => console.log(error));
}



// by cuisine

function byCuisine() {
  console.log("by cuisine search")

  nameDiv.style.display = "none"
  ingredientsDiv.style.display = "none"
  caloriesDiv.style.display = "none"
  cuisineDiv.style.display = "block"

  fetchByCuisine();
}

function fetchByCuisine() {
  console.log("looking for cuisines");
  let input = document.getElementById("by-cuisine-search").value;
  let diet = "";

  let glutenFreeCheckbox = document.getElementById("gluten-free");
    glutenFreeCheckbox.addEventListener("change", fetchByCuisine);
  let radioOmnivore = document.getElementById("Omnivore");
    radioOmnivore.addEventListener("change", fetchByCuisine);
  let radioVegetarian = document.getElementById("Vegetarian");
    radioVegetarian.addEventListener("change", fetchByCuisine);
  let radioVegan = document.getElementById("Vegan");
    radioVegan.addEventListener("change", fetchByCuisine);

  if (radioOmnivore.checked == true && glutenFreeCheckbox.checked == false) {
    diet = "";
  }
  if (radioOmnivore.checked == true && glutenFreeCheckbox.checked == true) {
    diet = "&diet=gluten free";
  }
  if (radioVegetarian.checked == true && glutenFreeCheckbox.checked == false) {
    diet = "&diet=vegetarian";
  }
  if (radioVegetarian.checked == true && glutenFreeCheckbox.checked == true) {
    diet = "&diet=gluten free, vegetarian";
  }
  if (radioVegan.checked == true && glutenFreeCheckbox.checked == false) {
    diet = "&diet=vegan";
  }
  if (radioVegan.checked == true && glutenFreeCheckbox.checked == true) {
    diet = "&diet=gluten free, vegan";
  }

  let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&cuisine=${input}&number=5${diet}`;
  fetch(url)
    .then(response => response.json())
    .then((result) => {
      result = result.results;
      printData(result);
    })
    .catch((error) => console.log(error));
}


////// printData

function printData(info) {
    let recipeDiv = document.getElementById("dataT");
    recipeDiv.innerText = "";
    let recipes = info
  
  for (let i = 0; i < recipes.length; i++) {
    let recipeArr = recipes[i].title.split(/[ ,]+/);
    recipeArr.push(recipes[i].id);
    let recipeString = "https://spoonacular.com/" + recipeArr.join("-");
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
    a.setAttribute("href", recipeString);
    a.classList.add("stretched-link");

    recipeCard.appendChild(img);
    recipeCard.appendChild(cardBody);
    cardBody.appendChild(h1);
    cardBody.appendChild(a);
    recipeDiv.appendChild(recipeCard);
    }
}