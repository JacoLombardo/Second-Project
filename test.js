function filterByName() {
  let input = document.getElementById("by-name-search").value;
  let recipes = data.recipes;

  let a = input.split(" ");
  for (let i = 0; i < a.length; i++){
    a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
  }
  input = a.join(" ");

  recipes = recipes.filter((recipe) => { return recipe.title.includes(input) });

  let Vegetarianrecipes = recipes.filter((recipe) => { return recipe.vegetarian === true });
  let Veganrecipes = recipes.filter((recipe) => { return recipe.vegan === true });
  let GlutenFreerecipes = recipes.filter((recipe) => { return recipe.glutenFree == true });
  let DairyFreerecipes = recipes.filter((recipe) => { return recipe.dairyFree == true });

  let VegetarianGlutenFreerecipes = recipes.filter((recipe) => { return recipe.vegetarian === true && recipe.glutenFree == true });
  let VeganGlutenFreerecipes = recipes.filter((recipe) => { return recipe.vegan === true && recipe.glutenFree == true });
  let OmnivoreGlutenFreeDairyFreerecipes = recipes.filter((recipe) => { return recipe.glutenFree == true && recipe.dairyFree == true });
  let VegetarianGlutenFreeDairyFreerecipes = recipes.filter((recipe) => { return recipe.vegetarian === true && recipe.glutenFree == true && recipe.dairyFree == true });
  let VeganGlutenFreeDairyFreerecipes = recipes.filter((recipe) => { return recipe.vegan === true && recipe.glutenFree == true && recipe.dairyFree == true });

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

  let diet = "";
  let diet2 = "";
  let diet3 = "";
  let diet4 = "";
  let diet5 = "";


  if (radioOmnivore.checked == true) {
    diet = "Omnivore";
  }
  if (glutenFreeCheckbox.checked == true) {
    diet = "GlutenFree";
  }
  if (radioVegetarian.checked == true) {
    diet2 = "Vegetarian";
  }
  if (radioVegan.checked == true) {
    diet3 = "Vegan";
  }
  if (dairyFreeCheckbox.checked == true) {
    diet4 = "DairyFree";
  }

  recipes = [(diet + diet2 + diet3 + diet4 + diet5)+"recipes"]
  console.log(recipes)

  

  // printData(recipes);
}