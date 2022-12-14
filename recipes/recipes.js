const key = "d48de0d4cb95426ca821de405f795581"
const key2 = "2e5b847f2b98407ab40117f7c477691b"
const key3 = "aa2f0763db3344c990249fa9ac70ba3f"

////// input

let nameDiv = document.getElementById("by-name")
let nameDiv2 = document.getElementById("tooltip1")
let nameIcon = document.getElementById("name-icon")
let ingredientsDiv = document.getElementById("by-ingredients")
let ingredientsDiv2 = document.getElementById("tooltip2")
let ingredientsIcon = document.getElementById("ingredients-icon")
let caloriesDiv = document.getElementById("by-calories")
let caloriesDiv2 = document.getElementById("tooltip3")
let caloriesIcon = document.getElementById("calories-icon")
let cuisineDiv = document.getElementById("by-cuisine")
let cuisineDiv2 = document.getElementById("tooltip4")
let cuisineIcon = document.getElementById("cuisine-icon")

// by name

function byName() {
  console.log("by name search");

  nameDiv.style.display = "block"
  nameDiv2.style.display = "block"
  nameIcon.style.display = "block"
  ingredientsDiv.style.display = "none"
  ingredientsDiv2.style.display = "none"
  ingredientsIcon.style.display = "none"
  caloriesDiv.style.display = "none"
  caloriesDiv2.style.display = "none"
  caloriesIcon.style.display = "none"
  cuisineDiv.style.display = "none"
  cuisineDiv2.style.display = "none"
  cuisineIcon.style.display = "none"

  nameDiv.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      filterByName()
    }
  })

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

  let glutenFreeCheckbox = document.getElementById("gluten-free")
    glutenFreeCheckbox.addEventListener("change", filterByName);
  let dairyFreeCheckbox = document.getElementById("dairy-free")
    dairyFreeCheckbox.addEventListener("change", filterByName);
  let radioOmnivore = document.getElementById("Omnivore")
    radioOmnivore.addEventListener("change", filterByName);
  let radioVegetarian = document.getElementById("Vegetarian")
    radioVegetarian.addEventListener("change", filterByName);
  let radioVegan = document.getElementById("Vegan")
    radioVegan.addEventListener("change", filterByName);
  
  let radioButtonValue = document.querySelector('input[type="radio"]:checked').value

  let filteredRecipes = ""

  if (radioButtonValue === "omnivore") {
    filteredRecipes = recipes
  } else if (radioButtonValue === "vegetarian") {
    filteredRecipes = recipes.filter((recipe) => { return recipe.vegetarian === true });
  } else {
    filteredRecipes = recipes.filter((recipe) => { return recipe.vegan === true });
  }

  if (dairyFreeCheckbox.checked === true || glutenFreeCheckbox.checked === true) {
    let filteredRecipes2 = "";
    if (dairyFreeCheckbox.checked === false && glutenFreeCheckbox.checked === true) {
      filteredRecipes2 = recipes.filter((recipe) => { return recipe.glutenFree === true });
    } else if (dairyFreeCheckbox.checked === true && glutenFreeCheckbox.checked === false) {
      filteredRecipes2 = recipes.filter((recipe) => { return recipe.dairyFree === true });
    } else {
      filteredRecipes2 = recipes.filter((recipe) => { return recipe.glutenFree === true && recipe.dairyFree === true });
    }
    let commonRecipes = [];
    for (let i = 0; i < filteredRecipes.length; i++) {
      for (let j = 0; j < filteredRecipes2.length; j++) {
        if (filteredRecipes[i].id === filteredRecipes2[j].id) {
          commonRecipes.push(filteredRecipes[i]);
        }
      }
    }
    filteredRecipes = commonRecipes
  }

  printData(filteredRecipes);
}


// by ingredients

function byIngredients() {
  console.log("by ingredients search")

  nameDiv.style.display = "none"
  nameDiv2.style.display = "none"
  nameIcon.style.display = "none"
  ingredientsDiv.style.display = "block"
  ingredientsDiv2.style.display = "block"
  ingredientsIcon.style.display = "block"
  caloriesDiv.style.display = "none"
  caloriesDiv2.style.display = "none"
  caloriesIcon.style.display = "none"
  cuisineDiv.style.display = "none"
  cuisineDiv2.style.display = "none"
  cuisineIcon.style.display = "none"

  ingredientsDiv.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      fetchByIngredients()
    }
  })

  fetchByIngredients();
}

function fetchByIngredients() {
  console.log("looking for ingredients");
  let input = document.getElementById("by-ingredients-search").value;
  let diet = "";
  let diet2 = "";
  let diet3 = "";
  let diet4 = "";

  let glutenFreeCheckbox = document.getElementById("gluten-free")
    glutenFreeCheckbox.addEventListener("change", fetchByIngredients);
  let dairyFreeCheckbox = document.getElementById("dairy-free")
    dairyFreeCheckbox.addEventListener("change", fetchByIngredients);
  let radioOmnivore = document.getElementById("Omnivore")
    radioOmnivore.addEventListener("change", fetchByIngredients);
  let radioVegetarian = document.getElementById("Vegetarian")
    radioVegetarian.addEventListener("change", fetchByIngredients);
  let radioVegan = document.getElementById("Vegan")
    radioVegan.addEventListener("change", fetchByIngredients);

  if (glutenFreeCheckbox.checked === true) {
    diet = "gluten free, ";
  }
  if (radioVegetarian.checked === true) {
    diet2 = "vegetarian, ";
  }
  if (radioVegan.checked === true) {
    diet3 = "vegan, ";
  }
  if (dairyFreeCheckbox.checked === true) {
    diet4 = "dairy free, ";
  }

  let url = `https://api.spoonacular.com/recipes/random?apiKey=${key}&number=100&tags=${diet}${diet2}${diet3}${diet4}${input}`;
  fetch(url)
    .then(response => response.json())
    .then((result) => {
      result = result.recipes
      printData(result);
    })
    .catch((error) => console.log(error));
}



// by calories

function byCalories() {
  console.log("by calories search")

  nameDiv.style.display = "none"
  nameDiv2.style.display = "none"
  nameIcon.style.display = "none"
  ingredientsDiv.style.display = "none"
  ingredientsDiv2.style.display = "none"
  ingredientsIcon.style.display = "none"
  caloriesDiv.style.display = "block"
  caloriesDiv2.style.display = "block"
  caloriesIcon.style.display = "block"
  cuisineDiv.style.display = "none"
  cuisineDiv2.style.display = "none"
  cuisineIcon.style.display = "none"

  caloriesDiv.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      fetchByCalories();
    }
  })

  fetchByCalories();
}

function fetchByCalories() {
  console.log("looking for calories");
  let input = document.getElementById("by-calories-search").value;
  let diet = "";
  let diet2 = "";
  let diet3 = "";
  let diet4 = "";

  let glutenFreeCheckbox = document.getElementById("gluten-free")
    glutenFreeCheckbox.addEventListener("change", fetchByCalories);
  let dairyFreeCheckbox = document.getElementById("dairy-free")
    dairyFreeCheckbox.addEventListener("change", fetchByCalories);
  let radioOmnivore = document.getElementById("Omnivore")
    radioOmnivore.addEventListener("change", fetchByCalories);
  let radioVegetarian = document.getElementById("Vegetarian")
    radioVegetarian.addEventListener("change", fetchByCalories);
  let radioVegan = document.getElementById("Vegan")
    radioVegan.addEventListener("change", fetchByCalories);

  if (glutenFreeCheckbox.checked === true) {
    diet = "gluten free, ";
  }
  if (radioVegetarian.checked === true) {
    diet2 = "vegetarian, ";
  }
  if (radioVegan.checked === true) {
    diet3 = "vegan, ";
  }
  if (dairyFreeCheckbox.checked === true) {
    diet4 = "dairy free, ";
  }

  let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&maxCalories=${input}&number=100&diet=${diet}${diet2}${diet3}${diet4}`;
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
  nameDiv2.style.display = "none"
  nameIcon.style.display = "none"
  ingredientsDiv.style.display = "none"
  ingredientsDiv2.style.display = "none"
  ingredientsIcon.style.display = "none"
  caloriesDiv.style.display = "none"
  caloriesDiv2.style.display = "none"
  caloriesIcon.style.display = "none"
  cuisineDiv.style.display = "block"
  cuisineDiv2.style.display = "block"
  cuisineIcon.style.display = "block"

  cuisineDiv.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      fetchByCuisine();
    }
  })


  fetchByCuisine();
}

function fetchByCuisine() {
  console.log("looking for cuisines");
  let input = document.getElementById("by-cuisine-search").value;
  let diet = "";
  let diet2 = "";
  let diet3 = "";
  let diet4 = "";

  let glutenFreeCheckbox = document.getElementById("gluten-free");
    glutenFreeCheckbox.addEventListener("change", fetchByCuisine);
  let dairyFreeCheckbox = document.getElementById("dairy-free")
    dairyFreeCheckbox.addEventListener("change", fetchByCuisine);
  let radioOmnivore = document.getElementById("Omnivore");
    radioOmnivore.addEventListener("change", fetchByCuisine);
  let radioVegetarian = document.getElementById("Vegetarian");
    radioVegetarian.addEventListener("change", fetchByCuisine);
  let radioVegan = document.getElementById("Vegan");
    radioVegan.addEventListener("change", fetchByCuisine);

  if (glutenFreeCheckbox.checked === true) {
    diet = "gluten free, ";
  }
  if (radioVegetarian.checked === true) {
    diet2 = "vegetarian, ";
  }
  if (radioVegan.checked === true) {
    diet3 = "vegan, ";
  }
  if (dairyFreeCheckbox.checked === true) {
    diet4 = "dairy free, ";
  }

  let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&cuisine=${input}&number=100&diet=${diet}${diet2}${diet3}${diet4}`;
  fetch(url)
    .then(response => response.json())
    .then((result) => {
      result = result.results;
      printData(result);
    })
    .catch((error) => console.log(error));
}


////// printData

function printData(recipes) {
    let recipeDiv = document.getElementById("dataT");
    recipeDiv.innerText = "";
  
  for (let i = 0; i < recipes.length; i++) {
    let recipeCard = document.createElement("div");
    recipeCard.classList.add("card");
    recipeCard.setAttribute("style", "width: 18rem; border: 2px solid black;");

    let imgLink = document.createElement("a");
    imgLink.setAttribute("href", "../instructions/instructions.html?id=" + recipes[i].id);
    imgLink.classList.add("card")
    imgLink.setAttribute("style", "border: none")
    imgLink.setAttribute("target", "_black");

    let img = document.createElement("img");
    img.setAttribute("src", recipes[i].image);
    img.setAttribute("alt", recipes[i].title);
    img.classList.add("img-card-top");

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let h1 = document.createElement("h1");
    h1.classList.add("card-title");
    h1.innerText = recipes[i].title;
    
    let favouriteLink = document.createElement("a")
    favouriteLink.addEventListener("click", function(){
      addToFavourites(recipes[i].id)
    });

    let favourite = document.createElement("img");
    favourite.setAttribute("src", "../Images/favourite.png");    
    favourite.setAttribute("alt", "Add to favourites!");
    favourite.setAttribute("id", recipes[i].id);
    favourite.classList.add("favourite-icon");

    let favourites = JSON.parse(localStorage.getItem("Favourites"));
    for (let j = 0; j < favourites.length; j++){
      if (recipes[i].id == favourites[j]) {
        favourite.removeAttribute("src", "../Images/favourite.png");
        favourite.setAttribute("src", "../Images/favourited.png");

      }}
  
    recipeCard.appendChild(imgLink);
    imgLink.appendChild(img);
    recipeCard.appendChild(cardBody);
    cardBody.appendChild(h1);
    cardBody.appendChild(favouriteLink)
    favouriteLink.appendChild(favourite);
    recipeDiv.appendChild(recipeCard);
    }
}

// favourites

function addToFavourites(id) {
  console.log("favourite", id)
  let favIcon = document.getElementById(id);
  favIcon.removeAttribute("src", "../Images/favourite.png");
  favIcon.setAttribute("src", "../Images/favourited.png");

  let favourites = JSON.parse(localStorage.getItem("Favourites"));
  favourites.push(id);
  localStorage.setItem("Favourites", JSON.stringify(favourites));
}

function resetFavourites() {
  console.log("resetting...")

  let toChange = JSON.parse(localStorage.getItem("Favourites"));
  for (let i = 0; i < toChange.length; i++){
    let favourited = document.getElementById(toChange[i])
    if (favourited === null) {
    } else {
      favourited.removeAttribute("src", "../Images/favourited.png")
      favourited.setAttribute("src", "../Images/favourite.png")
    }
  }

  let favouritesBlank = []
  localStorage.setItem("Favourites", JSON.stringify(favouritesBlank))
}