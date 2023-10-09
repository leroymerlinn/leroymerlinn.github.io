function blurAllbutISO() {
    var iso = document.getElementsByClassName("iso");
    var gbd = document.getElementsByClassName("gbd");
    var par = document.getElementsByClassName("par");
    var iasir = document.getElementsByClassName("iasir");
    var fh = document.getElementsByClassName("fh");
    var fol = document.getElementsByClassName("fol");
    var lmsi = document.getElementsByClassName("lmsi");
    for (var i=0, max=iso.length; i < max; i++) {
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
    var iso = document.getElementsByClassName("iso");
    var gbd = document.getElementsByClassName("gbd");
    var par = document.getElementsByClassName("par");
    var iasir = document.getElementsByClassName("iasir");
    var fh = document.getElementsByClassName("fh");
    var fol = document.getElementsByClassName("fol");
    var lmsi = document.getElementsByClassName("lmsi");
    for (var i=0, max=lmsi.length; i < max; i++) {
        gbd[i].style.filter = "blur(5px)";
        iso[i].style.filter = "blur(5px)";
        fol[i].style.filter = "blur(5px)";
        par[i].style.filter = "blur(5px)";
        iasir[i].style.filter = "blur(5px)";
        fh[i].style.filter = "blur(5px)";
        lmsi[i].style.filter = "blur(0px)";
    }
}

function blurAllbutGBD() {
    var iso = document.getElementsByClassName("iso");
    var par = document.getElementsByClassName("par");
    var iasir = document.getElementsByClassName("iasir");
    var fh = document.getElementsByClassName("fh");
    var fol = document.getElementsByClassName("fol");
    var lmsi = document.getElementsByClassName("lmsi");
    var gbd = document.getElementsByClassName ("gbd");
    for (var i=0, max=gbd.length; i < max; i++) {
        iso[i].style.filter = "blur(5px)";
        lmsi[i].style.filter = "blur(5px)";
        fol[i].style.filter = "blur(5px)";
        par[i].style.filter = "blur(5px)";
        iasir[i].style.filter = "blur(5px)";
        fh[i].style.filter = "blur(5px)";
        gbd[i].style.filter = "blur(0px)";
    }
}

function blurAllbutFOL() {
    var iso = document.getElementsByClassName("iso");
    var par = document.getElementsByClassName("par");
    var iasir = document.getElementsByClassName("iasir");
    var fh = document.getElementsByClassName("fh");
    var fol = document.getElementsByClassName("fol");
    var lmsi = document.getElementsByClassName("lmsi");
    var gbd = document.getElementsByClassName ("gbd");
    for (var i=0, max=fol.length; i < max; i++) {
        iso[i].style.filter = "blur(5px)";
        lmsi[i].style.filter = "blur(5px)";
        fol[i].style.filter = "blur(0px)";
        par[i].style.filter = "blur(5px)";
        iasir[i].style.filter = "blur(5px)";
        fh[i].style.filter = "blur(5px)";
        gbd[i].style.filter = "blur(5px)";
    }
}

function blurAllbutIASIR() {
    var iso = document.getElementsByClassName("iso");
    var par = document.getElementsByClassName("par");
    var iasir = document.getElementsByClassName("iasir");
    var fh = document.getElementsByClassName("fh");
    var fol = document.getElementsByClassName("fol");
    var lmsi = document.getElementsByClassName("lmsi");
    var gbd = document.getElementsByClassName ("gbd");
    for (var i=0, max=iasir.length; i < max; i++) {
        iso[i].style.filter = "blur(5px)";
        lmsi[i].style.filter = "blur(5px)";
        fol[i].style.filter = "blur(5px)";
        par[i].style.filter = "blur(5px)";
        iasir[i].style.filter = "blur(0px)";
        fh[i].style.filter = "blur(5px)";
        gbd[i].style.filter = "blur(5px)";
    }
}

function blurAllbutFH() {
    var iso = document.getElementsByClassName("iso");
    var par = document.getElementsByClassName("par");
    var iasir = document.getElementsByClassName("iasir");
    var fh = document.getElementsByClassName("fh");
    var fol = document.getElementsByClassName("fol");
    var lmsi = document.getElementsByClassName("lmsi");
    var gbd = document.getElementsByClassName ("gbd");
    for (var i=0, max=fh.length; i < max; i++) {
        iso[i].style.filter = "blur(5px)";
        lmsi[i].style.filter = "blur(5px)";
        fol[i].style.filter = "blur(5px)";
        par[i].style.filter = "blur(5px)";
        iasir[i].style.filter = "blur(5px)";
        fh[i].style.filter = "blur(0px)";
        gbd[i].style.filter = "blur(5px)";
    }
}

function blurAllbutPAR() {
    var iso = document.getElementsByClassName("iso");
    var par = document.getElementsByClassName("par");
    var iasir = document.getElementsByClassName("iasir");
    var fh = document.getElementsByClassName("fh");
    var fol = document.getElementsByClassName("fol");
    var lmsi = document.getElementsByClassName("lmsi");
    var gbd = document.getElementsByClassName ("gbd");
    for (var i=0, max=par.length; i < max; i++) {
        iso[i].style.filter = "blur(5px)";
        lmsi[i].style.filter = "blur(5px)";
        fol[i].style.filter = "blur(5px)";
        par[i].style.filter = "blur(0px)";
        iasir[i].style.filter = "blur(5px)";
        fh[i].style.filter = "blur(5px)";
        gbd[i].style.filter = "blur(5px)";
    }
}

function unblurAll() {
    var tabledata = document.getElementsByTagName("td");
    for (var i=0, max=tabledata.length; i < max; i++) {
        tabledata[i].style.filter = "blur(0px)";
    }
}