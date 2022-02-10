import Data from "../../config.js";

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
    const searchBar = document.getElementById("searchBar");
    const searchInput = searchBar.value.toLowerCase();
    fetch("https://api.spoonacular.com/food/wine/pairing?apiKey=" + Data.SPOONACULAR_API + "&food=" + searchInput)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
})
