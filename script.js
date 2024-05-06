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
let theme = document.getElementById("css");
let d = new Date();
let h = d.getHours();
let m = d.getMinutes();
if (h >= 20 && m >= 20 || h <= 7 && m <= 45) {
    theme.href = "style2.css";
} else {
    theme.href = "style1.css";
}