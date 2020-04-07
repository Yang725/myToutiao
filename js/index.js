window.onload = function() {
    var more = document.getElementsByClassName("more")[0];
    var moreclass = document.getElementById("moreclass");
    more.onmouseover = function() {
        moreclass.style.display = "block";
    }
    more.onmouseout = function() {
        moreclass.style.display = "none";

    }
}