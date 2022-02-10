ApiRequest ()= {
    const userInput = document.getElementById("input").value;
    console.log(userInput)
    const APIKey ="iFwlti7olbK7GcTg8NO3RSnqPxyQKEhH"
    const APIUrl ="https://api.giphy.com/v1/gif/search?q=${userInput}&rating=g&api_key=${APIKey}"
    fetch(APIUrl)
    .then(ApiRequest(data){
        return data.json()
    }
    
    .then(ApiRequest(json){
        console.log(json.data[0].images.fixed_height.url)
        const imgPath = json.data[0].images.fixed_height.url
        const img = document.createElement("img")
        img.setAttribute("src", imgPath)
        document.body.appendChild(img)
    }
    )

}


 