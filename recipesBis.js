// fetch

const key = "d48de0d4cb95426ca821de405f795581"
const key2 = "2e5b847f2b98407ab40117f7c477691b"
const key3 = "aa2f0763db3344c990249fa9ac70ba3f"


function fetchData() {
  let url = `https://api.spoonacular.com/recipes/random?apiKey=${key}&number=5`;
  fetch(url)
    .then(response => response.json())
    .then((result) => {
      console.log(result);
      printData(result);
    })
    .catch((error) => console.log(error));
}



function fetchDataOmnivore() {
  let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&number=100`;
  fetch(url)
    .then(response => response.json())
    .then((result) => {
      printData(result);
    })
    .catch((error) => console.log(error));
}

function fetchDataGlutenFree() {
  let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&number=100&diet=gluten free`;
  fetch(url)
    .then(response => response.json())
    .then((result) => {
      printData(result);
    })
    .catch((error) => console.log(error));
}

function fetchDataVegetarian() {
  let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&number=100&diet=vegetarian`;
  fetch(url)
    .then(response => response.json())
    .then((result) => {
      printData(result);
    })
    .catch((error) => console.log(error));
}

function fetchDataVegetarianGlutenFree() {
  let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&diet=gluten free, vegetarian&number=100`;
  fetch(url)
    .then(response => response.json())
    .then((result) => {
      printData(result);
    })
    .catch((error) => console.log(error));
}

function fetchDataVegan() {
  let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&number=100&diet=vegan`;
  fetch(url)
    .then(response => response.json())
    .then((result) => {
      printData(result);
    })
    .catch((error) => console.log(error));
}

function fetchDataVeganGlutenFree() {
  let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&diet=gluten free, vegan&number=100`;
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

function printData2(info) {
  let recipes = info;
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

let glutenFreeCheckbox = document.getElementById("gluten-free");
// glutenFreeCheckbox.addEventListener("change", filteredData);
glutenFreeCheckbox.addEventListener("change",() => {    
     buttonFilters();
     fetchDataByName();
     fetchDataByIngredients();
     fetchDataByCalories();
     fetchDataByCuisine();    
});


let radioOmnivore = document.getElementById("Omnivore");
// radioOmnivore.addEventListener("change", filteredData)
radioOmnivore.addEventListener("change",() => {    
     buttonFilters();
     fetchDataByName();
     fetchDataByIngredients();
     fetchDataByCalories();
     fetchDataByCuisine();    
});

let radioVegetarian = document.getElementById("Vegetarian");
// radioVegetarian.addEventListener("change", filteredData);
radioVegetarian.addEventListener("change",() => {    
     buttonFilters();
     fetchDataByName();
     fetchDataByIngredients();
     fetchDataByCalories();
     fetchDataByCuisine();    
});

let radioVegan = document.getElementById("Vegan");
// radioVegan.addEventListener("change", filteredData);
radioVegan.addEventListener("change",() => {    
     buttonFilters();
     fetchDataByName();
     fetchDataByIngredients();
     fetchDataByCalories();
     fetchDataByCuisine();    
});

// const radioButtons = document.querySelectorAll(".diets")
// console.log("raiod buttos", radioButtons)
// const checkedRadiobutton = document.querySelector('input[type="radio"]:checked')
// console.log("checkedRadiobutton", checkedRadiobutton)

// radioButtons.forEach((radioButton) => {
//   if (radioButton.checked) {
    
//     console.log(radioButton.value)
//   }
// })

// 1st : assign an event listener to the radio buttons, triggering the filter function
//2nd : in the filter function : locate all radiobuttons, and findout the one checked, and use that value to filter



function filteredData() {


  let recipes = data.recipes;
  console.log(recipes)

  let vegetarianData = recipes.filter((recipe) => {
    return recipe.vegetarian === true;
  });
 
  let veganData = recipes.filter((recipe) => {
    return recipe.vegan === true;
  });


  let glutenFreeData = recipes.filter((recipe) => {
    return recipe.diets == "gluten free";
  });


  let vegetarianGFData = recipes.filter((recipe) => {
    return recipe.vegetarian === true && recipe.diets == "gluten free";
  });


  let veganGFData = recipes.filter((recipe) => {
    return recipe.vegan === true && recipe.diets == "gluten free";;
  });

  if (radioOmnivore.checked == true && glutenFreeCheckbox.checked == false) {
    console.log("omnivore recipes");
    recipes = recipes;
  }
  if (radioOmnivore.checked == true && glutenFreeCheckbox.checked == true) {
    console.log("omnivore gluten free recipes");
    recipes = glutenFreeData;
  }
  if (radioVegetarian.checked == true && glutenFreeCheckbox.checked == false) {
    console.log("vegetarian recipes");
    recipes = vegetarianData;
  }
  if (radioVegetarian.checked == true && glutenFreeCheckbox.checked == true) {
    console.log("vegetarian gluten free recipes");
    recipes = vegetarianGFData;
  }
  if (radioVegan.checked == true && glutenFreeCheckbox.checked == false) {
    console.log("vegan recipes");
    recipes = veganData;
  }
  if (radioVegan.checked == true && glutenFreeCheckbox.checked == true) {
    console.log("vegan gluten free recipes");
    recipes = veganGFData;
  }

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

filteredData(data);

// filters

// let glutenFreeCheckbox = document.getElementById("gluten-free");
// // glutenFreeCheckbox.addEventListener("change", filteredData);
// glutenFreeCheckbox.addEventListener("change",() => {    
//      buttonFilters();
//      fetchDataByName();
//      fetchDataByIngredients();
//      fetchDataByCalories();
//      fetchDataByCuisine();    
// });


// let radioOmnivore = document.getElementById("Omnivore");
// // radioOmnivore.addEventListener("change", filteredData)
// radioOmnivore.addEventListener("change",() => {    
//      buttonFilters();
//      fetchDataByName();
//      fetchDataByIngredients();
//      fetchDataByCalories();
//      fetchDataByCuisine();    
// });

// let radioVegetarian = document.getElementById("Vegetarian");
// // radioVegetarian.addEventListener("change", filteredData);
// radioVegetarian.addEventListener("change",() => {    
//      buttonFilters();
//      fetchDataByName();
//      fetchDataByIngredients();
//      fetchDataByCalories();
//      fetchDataByCuisine();    
// });

// let radioVegan = document.getElementById("Vegan");
// // radioVegan.addEventListener("change", filteredData);
// radioVegan.addEventListener("change",() => {    
//      buttonFilters();
//      fetchDataByName();
//      fetchDataByIngredients();
//      fetchDataByCalories();
//      fetchDataByCuisine();    
// });


function buttonFilters() {
  if (radioOmnivore.checked == true && glutenFreeCheckbox.checked == false) {
    console.log("omnivore recipes");
    // fetchDataOmnivore();
  }
  if (radioOmnivore.checked == true && glutenFreeCheckbox.checked == true) {
    console.log("omnivore gluten free recipes");
    // fetchDataGlutenFree();
  }
  if (radioVegetarian.checked == true && glutenFreeCheckbox.checked == false) {
    console.log("vegetarian recipes");
    // fetchDataVegetarian();
  }
  if (radioVegetarian.checked == true && glutenFreeCheckbox.checked == true) {
    console.log("vegetarian gluten free recipes");
    // fetchDataVegetarianGlutenFree();
  }
  if (radioVegan.checked == true && glutenFreeCheckbox.checked == false) {
    console.log("vegan recipes");
    // fetchDataVegan();
  }
  if (radioVegan.checked == true && glutenFreeCheckbox.checked == true) {
    console.log("vegan gluten free recipes");
    // fetchDataVeganGlutenFree();
  }
}

buttonFilters();


// search input

let nameDiv = document.getElementById("by-name")
let ingredientsDiv = document.getElementById("by-ingredients")
let caloriesDiv = document.getElementById("by-calories")
let cuisineDiv = document.getElementById("by-cuisine")

nameDiv.style.display = "block"
ingredientsDiv.style.display = "none"
caloriesDiv.style.display = "none"
cuisineDiv.style.display = "none"

// by name

function byName() {
  console.log("by name search")

  nameDiv.style.display = "block"
  ingredientsDiv.style.display = "none"
  caloriesDiv.style.display = "none"
  cuisineDiv.style.display = "none"
  
}

function fetchDataByName() {
  console.log("looking for names");
  let input = document.getElementById("by-name-search").value;
  let diet = "";

  if (radioOmnivore.checked == true && glutenFreeCheckbox.checked == false) {
    diet = "";
    console.log("omni")
  }
  if (radioOmnivore.checked == true && glutenFreeCheckbox.checked == true) {
    diet = "&diet=gluten free";
    console.log("gf")
  }
    
  if (radioVegetarian.checked == true && glutenFreeCheckbox.checked == false) {
    diet = "&diet=vegetarian";
    console.log("vegi")
  }
  
  if (radioVegetarian.checked == true && glutenFreeCheckbox.checked == true) {
    diet = "&diet=gluten free, vegetarian";
    console.log("vegi gf")
  }
  
  if (radioVegan.checked == true && glutenFreeCheckbox.checked == false) {
    diet = "&diet=vegan";
    console.log("veg")
  }
  
  if (radioVegan.checked == true && glutenFreeCheckbox.checked == true) {
    diet = "&diet=gluten free, vegan";
    console.log("veg gf")
  }
  let url = ``;
  fetch(url)
    .then(response => response.json())
    .then((result) => {
      printData(result);
    })
    .catch((error) => console.log(error));
}


// by ingredients



function byIngredients() {
  console.log("by ingredients search")

  nameDiv.style.display = "none"
  ingredientsDiv.style.display = "block"
  caloriesDiv.style.display = "none"
  cuisineDiv.style.display = "none"


  
}

function fetchDataByIngredients() {
  console.log("looking for ingredients");
  let input = document.getElementById("by-ingredients-search").value;
  let diet = "";

  if (radioOmnivore.checked == true && glutenFreeCheckbox.checked == false) {
    diet = "";
    console.log("omni")
  }
  if (radioOmnivore.checked == true && glutenFreeCheckbox.checked == true) {
    diet = "&diet=gluten free";
    console.log("gf")
  }
    
  if (radioVegetarian.checked == true && glutenFreeCheckbox.checked == false) {
    diet = "&diet=vegetarian";
    console.log("vegi")
  }
  
  if (radioVegetarian.checked == true && glutenFreeCheckbox.checked == true) {
    diet = "&diet=gluten free, vegetarian";
    console.log("vegi gf")
  }
  
  if (radioVegan.checked == true && glutenFreeCheckbox.checked == false) {
    diet = "&diet=vegan";
    console.log("veg")
  }
  
  if (radioVegan.checked == true && glutenFreeCheckbox.checked == true) {
    diet = "&diet=gluten free, vegan";
    console.log("veg gf")
  }
    
  let url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${key}&ingredients=${input}&number=5&ranking=1${diet}`;
  fetch(url)
    .then(response => response.json())
    .then((result) => {
      printData2(result);
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
  
}

function fetchDataByCalories() {
  console.log("looking for calories");
  let input = document.getElementById("by-calories-search").value;
  let diet = "";

  if (radioOmnivore.checked == true && glutenFreeCheckbox.checked == false) {
    diet = "";
    console.log("omni")
  }
  if (radioOmnivore.checked == true && glutenFreeCheckbox.checked == true) {
    diet = "&diet=gluten free";
    console.log("gf")
  }
    
  if (radioVegetarian.checked == true && glutenFreeCheckbox.checked == false) {
    diet = "&diet=vegetarian";
    console.log("vegi")
  }
  
  if (radioVegetarian.checked == true && glutenFreeCheckbox.checked == true) {
    diet = "&diet=gluten free, vegetarian";
    console.log("vegi gf")
  }
  
  if (radioVegan.checked == true && glutenFreeCheckbox.checked == false) {
    diet = "&diet=vegan";
    console.log("veg")
  }
  
  if (radioVegan.checked == true && glutenFreeCheckbox.checked == true) {
    diet = "&diet=gluten free, vegan";
    console.log("veg gf")
  }

  let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&maxCalories=${input}&number=5${diet}`;
  fetch(url)
    .then(response => response.json())
    .then((result) => {
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
  
}

function fetchDataByCuisine() {
  console.log("looking for cuisines");
  let input = document.getElementById("by-cuisine-search").value;
  let diet = "";

  if (radioOmnivore.checked == true && glutenFreeCheckbox.checked == false) {
    diet = "";
    console.log("omni")
  }
  if (radioOmnivore.checked == true && glutenFreeCheckbox.checked == true) {
    diet = "&diet=gluten free";
    console.log("gf")
  }
    
  if (radioVegetarian.checked == true && glutenFreeCheckbox.checked == false) {
    diet = "&diet=vegetarian";
    console.log("vegi")
  }
  
  if (radioVegetarian.checked == true && glutenFreeCheckbox.checked == true) {
    diet = "&diet=gluten free, vegetarian";
    console.log("vegi gf")
  }
  
  if (radioVegan.checked == true && glutenFreeCheckbox.checked == false) {
    diet = "&diet=vegan";
    console.log("veg")
  }
  
  if (radioVegan.checked == true && glutenFreeCheckbox.checked == true) {
    diet = "&diet=gluten free, vegan";
    console.log("veg gf")
  }
  let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&cuisine=${input}&number=5${diet}`;
  fetch(url)
    .then(response => response.json())
    .then((result) => {
      printData(result);
    })
    .catch((error) => console.log(error));
}

