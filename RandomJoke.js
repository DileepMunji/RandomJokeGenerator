let jokeText = document.getElementById("jokeText");
let jokeBtn = document.getElementById("jokeBtn");
let spinnerEl = document.getElementById("spinner");
jokeBtn.addEventListener("click", function() {
    let options = {
        method: "GET"
    };
    spinnerEl.classList.remove("d-none");
    let url = "https://apis.ccbp.in/jokes/random";
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            spinnerEl.classList.add("d-none");
            jokeText.textContent = data.value;
        });
});