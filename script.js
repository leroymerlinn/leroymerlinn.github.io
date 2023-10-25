let theme = document.getElementById("css");

function clock() {
    today=new Date();
    m=today.getMinutes();
    m=checkTime(m);
    document.getElementById('clock').innerHTML=h+":"+m+"";
    t=setTimeout('clock()',0);}
    function checkTime(i)
    {if (i<10) {i="0" + i;}return i;}
    window.onload=function(){clock();
}

let d = new Date();
let h = d.getHours();
if (h >= 20 || h <= 8) {
    theme.href = "style2.css";
} else {
    theme.href = "style1.css";
}

/* function toggleUIMode() {
    if (theme.getAttribute("href") == "style1.css") {
        theme.href = "style2.css";
        document.getElementById("button").innerHTML = "LIGHT MODE";
    } else {
        theme.href = "style1.css";
        document.getElementById("button").innerHTML = "DARK MODE";
    }
}

function storeCSS() {
    localStorage.setItem("css", theme.getAttribute("href"));
}
function retrieveCSS() {
    theme.href = localStorage.getItem("css");
}

function buttonName() {
    if (theme.getAttribute("href") == "style1.css") {
        document.getElementById("button").innerHTML = "DARK MODE"
    } else {
        document.getElementById("button").innerHTML = "LIGHT MODE"
    }
}

window.onload = function() {
    setTimeout(loadPage, 500);
}

function loadPage() {
    document.getElementsByTagName("body").style.visibility = "visible";
} */