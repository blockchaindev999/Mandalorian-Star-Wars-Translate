var inputTxt = document.getElementById("input-txt");
var outputTxt = document.getElementById("output-txt");
var translatorUrl = "https://api.funtranslations.com/translate/mandalorian.json";

document.getElementById("translate-btn").addEventListener("click", output => {
    if (inputTxt.value == "") {
        alert("Provide some text first");
    }
    else {
        var fullUrl = translatorUrl + "?text=" + inputTxt.value;
        fetch(fullUrl)
        .then(resp => resp.json())
        .then(data => outputTxt.innerText = data.contents.translated)
        .catch(error => outputTxt.innerText = "Mando is on another planet right now, please try again later!")
    }
});