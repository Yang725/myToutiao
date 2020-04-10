window.onload = function() {
    //hover显示功能
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
    //滚动固定定位
    window.onscroll = function() {
        var subnav = document.getElementById("subnav");
        var topScroll = document.documentElement.scrollTop;
        if (topScroll <= 45) {
            subnav.style.position = 'static';
        } else {
            subnav.style.position = 'fixed';
            subnav.style.top = '1%';
        }
    }
}