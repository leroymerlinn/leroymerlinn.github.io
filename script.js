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