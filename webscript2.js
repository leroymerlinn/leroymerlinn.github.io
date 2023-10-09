let iso = document.getElementsByClassName("iso");
let gbd = document.getElementsByClassName("gbd");
let par = document.getElementsByClassName("par");
let iasir = document.getElementsByClassName("iasir");
let fh = document.getElementsByClassName("fh");
let fol = document.getElementsByClassName("fol");
let lmsi = document.getElementsByClassName("lmsi");
let tabledata = document.getElementsByTagName("td");
let theme = document.getElementById("css");
function blurAllbutISO() {
    for (let i=0, max=iso.length; i < max; i++) {
        gbd[i].style.filter = "blur(5px)";
        lmsi[i].style.filter = "blur(5px)";
        fol[i].style.filter = "blur(5px)";
        par[i].style.filter = "blur(5px)";
        iasir[i].style.filter = "blur(5px)";
        fh[i].style.filter = "blur(5px)";
        iso[i].style.filter = "blur(0px)";
    }
}
function blurAllbutLMSI() {
    for (let x=0, max=lmsi.length; x < max; x++) {
        gbd[x].style.filter = "blur(5px)";
        iso[x].style.filter = "blur(5px)";
        fol[x].style.filter = "blur(5px)";
        par[x].style.filter = "blur(5px)";
        iasir[x].style.filter = "blur(5px)";
        fh[x].style.filter = "blur(5px)";
        lmsi[x].style.filter = "blur(0px)";
    }
}
function blurAllbutGBD() {
    for (let y=0, max=gbd.length; y < max; y++) {
        iso[y].style.filter = "blur(5px)";
        lmsi[y].style.filter = "blur(5px)";
        fol[y].style.filter = "blur(5px)";
        par[y].style.filter = "blur(5px)";
        iasir[y].style.filter = "blur(5px)";
        fh[y].style.filter = "blur(5px)";
        gbd[y].style.filter = "blur(0px)";
    }
}
function blurAllbutFOL() {
    for (let z=0, max=fol.length; z < max; z++) {
        iso[z].style.filter = "blur(5px)";
        lmsi[z].style.filter = "blur(5px)";
        fol[z].style.filter = "blur(0px)";
        par[z].style.filter = "blur(5px)";
        iasir[z].style.filter = "blur(5px)";
        fh[z].style.filter = "blur(5px)";
        gbd[z].style.filter = "blur(5px)";
    }
}
function blurAllbutIASIR() {
    for (let a=0, max=iasir.length; a < max; a++) {
        iso[a].style.filter = "blur(5px)";
        lmsi[a].style.filter = "blur(5px)";
        fol[a].style.filter = "blur(5px)";
        par[a].style.filter = "blur(5px)";
        iasir[a].style.filter = "blur(0px)";
        fh[a].style.filter = "blur(5px)";
        gbd[a].style.filter = "blur(5px)";
    }
}
function blurAllbutFH() {
    for (let p=0, max=fh.length; p < max; p++) {
        iso[p].style.filter = "blur(5px)";
        lmsi[p].style.filter = "blur(5px)";
        fol[p].style.filter = "blur(5px)";
        par[p].style.filter = "blur(5px)";
        iasir[p].style.filter = "blur(5px)";
        fh[p].style.filter = "blur(0px)";
        gbd[p].style.filter = "blur(5px)";
    }
}
function blurAllbutPAR() {
    for (let q=0, max=par.length; q < max; q++) {
        iso[q].style.filter = "blur(5px)";
        lmsi[q].style.filter = "blur(5px)";
        fol[q].style.filter = "blur(5px)";
        par[q].style.filter = "blur(0px)";
        iasir[q].style.filter = "blur(5px)";
        fh[q].style.filter = "blur(5px)";
        gbd[q].style.filter = "blur(5px)";
    }
}
function unblurAll() {
    for (let w=0, max=tabledata.length; w < max; w++) {
        tabledata[w].style.filter = "blur(0px)";
    }
}
function toggleMode() {
    if (theme.getAttribute("href") == "style1.css") {
        theme.href = "style2.css";
    } else {
        theme.href = "style1.css";
    }
}