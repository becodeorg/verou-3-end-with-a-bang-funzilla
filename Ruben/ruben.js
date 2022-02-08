import Data from "../config.js";

const ingredientsList = document.getElementById("ingredientsList");
const addBtn = document.getElementById("addBtn")
const searchBtn = document.getElementById("searchBtn");
let ingredientsArray = [];



addBtn.addEventListener("click", () => {
    const searchBar = document.getElementById("searchBar");
    const searchInput = searchBar.value.toLowerCase();
    const newListItem = document.createElement("li");
    newListItem.innerHTML = searchInput;
    ingredientsList.appendChild(newListItem)

    ingredientsArray.push(searchInput)

    console.log(ingredientsArray);
})

const createElement = (element, className, parent) => {
    const newElement = document.createElement(element);
    newElement.classList = className;
    parent.appendChild(newElement);
    return newElement;
};

searchBtn.addEventListener("click", () => {
    let joinedIngredients = ingredientsArray.join();
    console.log(joinedIngredients);

    fetch("https://api.spoonacular.com/recipes/findByIngredients?apiKey=" + Data.SPOONACULAR_API + "&number=20&ignorePantry=true&ranking=2&ingredients=" + joinedIngredients)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                const recipeWrapper = document.getElementById("displayRecipes")
                const recipeLink = createElement("a", "recipeLink", recipeWrapper);
                recipeLink.href = "https://spoonacular.com/recipes/-" + data[i].id
                recipeLink.target = "_blank"
                const card = createElement("div", "card", recipeLink);
                const topPart = createElement("img", "topPart", card);
                topPart.src = data[i].image
                const infoPart = createElement("div", "infoPart", card);
                const recipeTitle = createElement("h3", "recipeTitle", infoPart);
                recipeTitle.innerHTML = data[i].title
                const missingIngrDiv = createElement("div", "missingIngrDiv", infoPart);
                const missingIngrTitle = createElement("h5", "missingIngrTitle", missingIngrDiv);
                missingIngrTitle.innerHTML = "Missing Ingredients: "
                const missingIngrList = createElement("ul", "missingIngrList", missingIngrDiv);
                for (let x = 0; x < data[i].missedIngredients.length; x++) {
                    const missingListItem = createElement("li", "missingListItem", missingIngrList);
                    missingListItem.innerHTML = data[i].missedIngredients[x].name;
                }
            }
        })

})