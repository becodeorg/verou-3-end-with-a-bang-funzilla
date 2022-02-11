function updateUI(jokeData) {
    const jokeDiv = (id) => document.getElementById(id);
    console.log(jokeData);
    jokeDiv("jokeTxt").innerHTML = jokeData.joke;
}

document.getElementById("jokeBtn").addEventListener('click', () => {
    JokeAPI.getJokes({
        jokeType: "single"
    })
        .then(response => response.json())
        .then(data => {
            updateUI(data);
        });
})
