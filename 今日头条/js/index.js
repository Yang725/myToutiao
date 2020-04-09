window.onload = function() {
    var more = document.getElementsByClassName("more")[0];
    var moreclass = document.getElementById("moreclass");
    var weatherArea = document.getElementsByClassName("weatherArea")[0];
    var weather = document.getElementsByClassName("weather")[0];

    function displayChange(father, child) {

        father.onmouseover = function() {
            child.style.display = "block";
        }
        father.onmouseout = function() {
            child.style.display = "none";

        }
    }
    displayChange(more, moreclass);
    displayChange(weatherArea, weather);
}