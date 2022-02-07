import Data from "../config.js";

fetch("https://api.spoonacular.com/recipes/findByIngredients?apiKey=" + Data.SPOONACULAR_API + "&ingredients=apples,flour,sugar")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })

const ingredientsList = document.getElementById("ingredientsList");
const searchBar = document.getElementById("searchBar");
const addBtn = document.getElementById("addBtn")
const searchBtn = document.getElementById("searchBtn");

