import Data from "../../config.js";

const searchBtn = document.getElementById("searchBtn");

const createElement = (element, className, parent) => {
    const newElement = document.createElement(element);
    newElement.classList = className;
    parent.appendChild(newElement);
    return newElement;
};

searchBtn.addEventListener("click", () => {
    const pairedWinesSection = document.getElementById("pairedWinesSection");
    const bestWineSection = document.getElementById("bestWineSection");
    // document.getElementById("mainSection").style.backgroundImage = "url('/Ruben/Styles/scott-warman-h4AGlo55tTA-unsplash.jpg')"
    bestWineSection.innerHTML = "";
    pairedWinesSection.innerHTML = "";
    
    const searchBar = document.getElementById("searchBar");
    const searchInput = searchBar.value.toLowerCase();
    fetch("https://api.spoonacular.com/food/wine/pairing?apiKey=" + Data.SPOONACULAR_API + "&food=" + searchInput)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            for (let i = 0; i < data.pairedWines.length; i++){
            const bestGrapes = createElement("a", "bestGrapes", bestWineSection);
            bestGrapes.innerHTML = data.pairedWines[i];
            bestGrapes.href = "https://en.wikipedia.org/wiki/" + data.pairedWines[i];
            bestGrapes.target = "_blank"
            }
            const pairingTxt = createElement("p", "pairingTxt", pairedWinesSection);
            const pairingtekst = data.pairingText
            console.log(pairingtekst);
            pairingTxt.innerHTML = pairingtekst;
            
        })
})