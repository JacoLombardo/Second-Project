// normal recipes

// let recipes = data.results

// let recipeDiv = document.getElementById("dataT");

// for (let i = 0; i < recipes.length; i++) {
//   let recipeArr = recipes[i].title.split(/[ ,]+/);
//   recipeArr.push(recipes[i].id);
//   let recipeString = "https://spoonacular.com/" + recipeArr.join("-");

//   let recipeCard = document.createElement("div");
//   recipeCard.classList.add("card");
//   recipeCard.setAttribute("style", "width: 18rem; border: 2px solid black;");

//   let img = document.createElement("img");
//   img.setAttribute("src", recipes[i].image);
//   img.setAttribute("alt", recipes[i].title);
//   img.classList.add("img-card-top");

//   let cardBody = document.createElement("div");
//   cardBody.classList.add("card-body");

//   let h1 = document.createElement("h1");
//   h1.classList.add("card-title");
//   h1.innerText = recipes[i].title;

//   let a = document.createElement("a");
//   a.setAttribute("href", recipeString);
//   a.classList.add("stretched-link");

//   recipeCard.appendChild(img);
//   recipeCard.appendChild(cardBody);
//   cardBody.appendChild(h1);
//   cardBody.appendChild(a);
    
//   recipeDiv.appendChild(recipeCard);
// }


// fetch

function fetchDataByName() {
  console.log("1");
  let url = "https://api.spoonacular.com/recipes/complexSearch?apiKey=2e5b847f2b98407ab40117f7c477691b&number=100";
  fetch(url)
    .then(response => response.json())
    .then((result) => {
      let myData = result;
      printData(result);
    })
    .catch((error) => console.log(error));
}

// fetchDataVegetarian();

function fetchDataGlutenFree() {
  console.log("2");
  let url = "https://api.spoonacular.com/recipes/complexSearch?apiKey=2e5b847f2b98407ab40117f7c477691b&number=100&diet=gluten free";
  fetch(url)
    .then(response => response.json())
    .then((result) => {
      let myData = result;
      printData(result);
    })
    .catch((error) => console.log(error));
}

function fetchDataVegetarian() {
  console.log("3");
  let url = "https://api.spoonacular.com/recipes/complexSearch?apiKey=2e5b847f2b98407ab40117f7c477691b&number=100&diet=vegetarian";
  fetch(url)
    .then(response => response.json())
    .then((result) => {
      let myData = result;
      printData(result);
    })
    .catch((error) => console.log(error));
}


function printData(info) {
  let recipes = info.results;
  let recipeDiv = document.getElementById("dataT");

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


let checkbox = document.getElementById("Gluten-free");

checkbox.addEventListener('change', function() {
  if (document.getElementById("Gluten-free").checked) {
    fetchDataByName();
    fetchDataVegetarian();
  } else {
    fetchDataByName();
  }
});

function graduatedFunction() {
        if (document.getElementById("Gluten-free")
        .checked){
          fetchDataVegetarian();
        } else {
          fetchDataByName();
        }
}

graduatedFunction()