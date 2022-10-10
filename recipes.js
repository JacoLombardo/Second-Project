// fetch

const key = "d48de0d4cb95426ca821de405f795581"
const key2 = "2e5b847f2b98407ab40117f7c477691b"
const key3 = "aa2f0763db3344c990249fa9ac70ba3f"


function fetchDataOmnivore() {
  let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key3}&number=100`;
  fetch(url)
    .then(response => response.json())
    .then((result) => {
      printData(result);
    })
    .catch((error) => console.log(error));
}

function fetchDataGlutenFree() {
  let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key3}&number=100&diet=gluten free`;
  fetch(url)
    .then(response => response.json())
    .then((result) => {
      printData(result);
    })
    .catch((error) => console.log(error));
}

function fetchDataVegetarian() {
  let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key3}&number=100&diet=vegetarian`;
  fetch(url)
    .then(response => response.json())
    .then((result) => {
      printData(result);
    })
    .catch((error) => console.log(error));
}

function fetchDataVegetarianGlutenFree() {
  let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key3}&diet=gluten free, vegetarian&number=100`;
  fetch(url)
    .then(response => response.json())
    .then((result) => {
      printData(result);
    })
    .catch((error) => console.log(error));
}

function fetchDataVegan() {
  let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key3}&number=100&diet=vegan`;
  fetch(url)
    .then(response => response.json())
    .then((result) => {
      printData(result);
    })
    .catch((error) => console.log(error));
}

function fetchDataVeganGlutenFree() {
  let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key3}&diet=gluten free, vegan&number=100`;
  fetch(url)
    .then(response => response.json())
    .then((result) => {
      printData(result);
    })
    .catch((error) => console.log(error));
}




function printData(info) {
  let recipes = info.results;
  let recipeDiv = document.getElementById("dataT");
  recipeDiv.innerText=""

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

// filters

let glutenFreeCheckbox = document.getElementById("gluten-free");
glutenFreeCheckbox.addEventListener("change", buttonFilters);

let radioOmnivore = document.getElementById("Omnivore");
radioOmnivore.addEventListener("change", buttonFilters)

let radioVegetarian = document.getElementById("Vegetarian");
radioVegetarian.addEventListener("change", buttonFilters);

let radioVegan = document.getElementById("Vegan");
radioVegan.addEventListener("change", buttonFilters);

function buttonFilters() {
  if (radioOmnivore.checked == true && glutenFreeCheckbox.checked == false) {
    console.log("omnivore recipes");
    fetchDataOmnivore();
  }
  if (radioOmnivore.checked == true && glutenFreeCheckbox.checked == true) {
    console.log("omnivore gluten free recipes");
    fetchDataGlutenFree();
  }
  if (radioVegetarian.checked == true && glutenFreeCheckbox.checked == false) {
    console.log("vegetarian recipes");
    fetchDataVegetarian();
  }
  if (radioVegetarian.checked == true && glutenFreeCheckbox.checked == true) {
    console.log("vegetarian gluten free recipes");
    fetchDataVegetarianGlutenFree();
  }
  if (radioVegan.checked == true && glutenFreeCheckbox.checked == false) {
    console.log("vegan recipes");
    fetchDataVegan();
  }
  if (radioVegan.checked == true && glutenFreeCheckbox.checked == true) {
    console.log("vegan gluten free recipes");
    fetchDataVeganGlutenFree();
  }
}

buttonFilters();


// search input

// by name

function byName() {
  console.log("by name search")
  
}


// by ingredients

function byIngredients() {
  console.log("by ingredients search")
  
}


function fetchDataByIngredients() {
  let url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${key3}&ingredients=sugar, apple, flour&number=5&ranking=1`;
  fetch(url)
    .then(response => response.json())
    .then((result) => {
      printData(result);
    })
    .catch((error) => console.log(error));
}



// by nutrients

function byNutrients() {
  console.log("by nutrients search")
  
}


// by cuisine

function byCuisine() {
  console.log("by cuisine search")
  
}