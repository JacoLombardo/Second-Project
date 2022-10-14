window.onload = () => {

    let id = new URLSearchParams(window.location.search).get("id")
    let url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${key}`;

    fetch(url)
    .then(response => response.json())
    .then((result) => {
      printInstructions(result);
    })
    .catch((error) => console.log(error));

}

function printInstructions(info) {
    let instructionsDiv = document.getElementById("instructions")
    instructionsDiv.innerText = "";
    let instructions = info

    // instructionsCard
  
    let instructionsCard = document.createElement("div");
    instructionsDiv.appendChild(instructionsCard);

    // Title and image

    let h1 = document.createElement("h1");
    h1.classList.add("card-title");
    h1.setAttribute("style", "text-align: center;")
    h1.innerText = instructions.title;
    instructionsCard.appendChild(h1);

    // cardBody

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    instructionsCard.appendChild(cardBody)

    let img = document.createElement("img");
    img.setAttribute("src", instructions.image);
    img.setAttribute("alt", instructions.title);
    img.classList.add("img")
    cardBody.appendChild(img);

    // ingredients

    let ingredientsCard = document.createElement("div")
    ingredientsCard.classList.add("ingredients-card")
    cardBody.appendChild(ingredientsCard)

    let ingredientsTitle = document.createElement("h1")
    ingredientsTitle.innerText = "Ingredients:"
    ingredientsCard.appendChild(ingredientsTitle)

    for (let i = 0; i < instructions.extendedIngredients.length ; i++){
        let ingredientsList = document.createElement("ul")
        ingredientsList.setAttribute("style", "font-weight: 500;")
        ingredientsList.innerText = "- " + instructions.extendedIngredients[i].original
        ingredientsCard.appendChild(ingredientsList)
    }

    // steps

    let procedureCard = document.createElement("div")
    procedureCard.classList.add("procedure-card")
    instructionsCard.appendChild(procedureCard)

    let procedureTitle = document.createElement("h1")
    procedureTitle.innerText = "Steps:"
    procedureCard.appendChild(procedureTitle)

    for (let i = 0; i < instructions.analyzedInstructions[0].steps.length ; i++){
        let procedureSteps = document.createElement("ol")
        procedureSteps.setAttribute("style", "font-weight: 500;")
        procedureSteps.innerText = (i+1) + ".   " + instructions.analyzedInstructions[0].steps[i].step
        procedureCard.appendChild(procedureSteps)
    }

    let enjoyDiv = document.createElement("div")
    instructionsDiv.appendChild(enjoyDiv)

    let enjoyText = document.createElement("h1")
    enjoyText.innerText = "Enjoy your meal!"
    enjoyText.setAttribute("style", "text-align: center; font-size: 30px;")
    enjoyDiv.appendChild(enjoyText)

}
