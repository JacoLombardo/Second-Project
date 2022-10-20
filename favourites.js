const key = "d48de0d4cb95426ca821de405f795581"
const key2 = "2e5b847f2b98407ab40117f7c477691b"
const key3 = "aa2f0763db3344c990249fa9ac70ba3f"

window.onload = () => {
    emptyFav()

    let favouriteRecipes = JSON.parse(localStorage.getItem("Favourites"));
    console.log(favouriteRecipes)

    for (let i = 0; i < favouriteRecipes.length; i++){
        let url = `https://api.spoonacular.com/recipes/${favouriteRecipes[i]}/information?apiKey=${key}`;
        fetch(url)
        .then(response => response.json())
            .then((result) => {
            printData(result);
        })
        .catch((error) => console.log(error));
    }

}

function printData(recipes) {
    let recipeDiv = document.getElementById("favourite-recipes");

    let noFav = document.getElementById("noFav")
    noFav.innerText = ""

    let recipeCard = document.createElement("div");
    recipeCard.classList.add("card");
    recipeCard.setAttribute("style", "width: 18rem; border: 2px solid black;");

    let imgLink = document.createElement("a");
    imgLink.setAttribute("href", "instructions.html?id=" + recipes.id);
    imgLink.classList.add("card")
    imgLink.setAttribute("style", "border: none")
    imgLink.setAttribute("target", "_black");
    imgLink.classList.add("stretched-link")

    let img = document.createElement("img");
    img.setAttribute("src", recipes.image);
    img.setAttribute("alt", recipes.title);
    img.classList.add("img-card-top");

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let h1 = document.createElement("h1");
    h1.classList.add("card-title");
    h1.innerText = recipes.title;

    recipeCard.appendChild(imgLink);
    imgLink.appendChild(img);
    recipeCard.appendChild(cardBody);
    cardBody.appendChild(h1);
    recipeDiv.appendChild(recipeCard);
}

function emptyFav() {
    let recipeDiv = document.getElementById("favourite-recipes");
    let noFav = document.createElement("p")
    noFav.setAttribute("id", "noFav")
    noFav.innerText = "It seems you have no favourites yet :("
    recipeDiv.appendChild(noFav)
}

function resetFavourites() {
  console.log("resetting...")

  let favouritesBlank = []
  localStorage.setItem("Favourites", JSON.stringify(favouritesBlank))
  
  let recipeDiv = document.getElementById("favourite-recipes");
  recipeDiv.innerText = "";
  
  emptyFav();
}