// Declaring variables
let iso1 = document.getElementById("iso1");
let iso2 = document.getElementById("iso2");
let iso3 = document.getElementById("iso3");
let lmsi1 = document.getElementById("lmsi1");
let lmsi2 = document.getElementById("lmsi2");
let lmsi3 = document.getElementById("lmsi3");
let gbd1 = document.getElementById("gbd1");
let gbd2 = document.getElementById("gbd2");
let fol1 = document.getElementById("fol1");
let fol2 = document.getElementById("fol2");
let fol3 = document.getElementById("fol3");
let par1 = document.getElementById("par1");
let par2 = document.getElementById("par2");
let par3 = document.getElementById("par3");
let iasir1 = document.getElementById("iasir1");
let fh1 = document.getElementById("fh1");

//Functions
function blurAllbutISO() {
    for (let i=0, max=iso1.length, x=0, max2=iso2.length, y=0, max3=iso3.length; i < max; i++ || x < max2; x++ || y < max3; y++) {
        iso1[i].style.filter = "blur(0px)";
        iso2[i].style.filter = "blur(0px)";
        iso3[i].style.filter = "blur(0px)";
        lmsi1[i].style.filter = "blur(5px)";
        lmsi2[i].style.filter = "blur(5px)";
        lmsi3[i].style.fiter = "blur(5px)";
        gbd1[i].style.filter = "blur(5px)";
        gbd2[i].style.filter = "blur(5px)";
        fol1[i].style.filter = "blur(5px)";
        fol2[i].style.filter = "blur(5px)";
        fol3[i].style.filter = "blur(5px)";
        par1[i].style.filter = "blur(5px)";
        par2[i].style.filter = "blur(5px)";
        par3[i].style.filter = "blur(5px)";
    }
}
function blurAllbutLMSI() {
    for (let i=0, max=lmsi1.length, x=0, max2=lmsi2.length, y=0, max3=lmsi3.length; i < max && x < max2 && y < max3; i++, x++, y++) {
        iso1[i].style.filter = "blur(5px)";
        iso2[x].style.filter = "blur(5px)";
        iso3[y].style.filter = "blur(5px)";
        lmsi1[i].style.filter = "blur(0px)";
        lmsi2[i].style.filter = "blur(0px)";
        lmsi3[i].style.fiter = "blur(0px)";
        gbd1[i].style.filter = "blur(5px)";
        gbd2[i].style.filter = "blur(5px)";
        fol1[i].style.filter = "blur(5px)";
        fol2[i].style.filter = "blur(5px)";
        fol3[i].style.filter = "blur(5px)";
        par1[i].style.filter = "blur(5px)";
        par2[i].style.filter = "blur(5px)";
        par3[i].style.filter = "blur(5px)";
    }
}
function blurAllbutGBD() {
    for (let i=0, max=gbd1.length, x=0, max2=gbd2.length; i < max && x < max2; i++, x++) {
        iso1[i].style.filter = "blur(5px)";
        iso2[x].style.filter = "blur(5px)";
        iso3[x].style.filter = "blur(5px)";
        lmsi1[i].style.filter = "blur(5px)";
        lmsi2[i].style.filter = "blur(5px)";
        lmsi3[i].style.fiter = "blur(5px)";
        gbd1[i].style.filter = "blur(0px)";
        gbd2[i].style.filter = "blur(0px)";
        fol1[i].style.filter = "blur(5px)";
        fol2[i].style.filter = "blur(5px)";
        fol3[i].style.filter = "blur(5px)";
        par1[i].style.filter = "blur(5px)";
        par2[i].style.filter = "blur(5px)";
        par3[i].style.filter = "blur(5px)";
    }
}
function blurAllbutFOL() {
    for (let i=0, max=fol1.length, x=0, max2=fol2.length, y=0, max3=fol3.length; i < max && x < max2 && y < max3; i++, x++, y++) {
        iso1[i].style.filter = "blur(5px)";
        iso2[x].style.filter = "blur(5px)";
        iso3[y].style.filter = "blur(5px)";
        lmsi1[i].style.filter = "blur(5px)";
        lmsi2[i].style.filter = "blur(5px)";
        lmsi3[i].style.fiter = "blur(5px)";
        gbd1[i].style.filter = "blur(5px)";
        gbd2[i].style.filter = "blur(5px)";
        fol1[i].style.filter = "blur(0px)";
        fol2[i].style.filter = "blur(0px)";
        fol3[i].style.filter = "blur(0px)";
        par1[i].style.filter = "blur(5px)";
        par2[i].style.filter = "blur(5px)";
        par3[i].style.filter = "blur(5px)";
    }
}
function blurAllbutPAR() {
    for (let i=0, max=par1.length, x=0, max2=par2.length, y=0, max3=par3.length; i < max && x < max2 && y < max3; i++, x++, y++) {
        iso1[i].style.filter = "blur(5px)";
        iso2[x].style.filter = "blur(5px)";
        iso3[y].style.filter = "blur(5px)";
        lmsi1[i].style.filter = "blur(5px)";
        lmsi2[i].style.filter = "blur(5px)";
        lmsi3[i].style.fiter = "blur(5px)";
        gbd1[i].style.filter = "blur(5px)";
        gbd2[i].style.filter = "blur(5px)";
        fol1[i].style.filter = "blur(5px)";
        fol2[i].style.filter = "blur(5px)";
        fol3[i].style.filter = "blur(5px)";
        par1[i].style.filter = "blur(0px)";
        par2[i].style.filter = "blur(0px)";
        par3[i].style.filter = "blur(0px)";
    }
}
function blurAllbutIASIR() {
    for (let i=0, max=iasir1.length; i < max; i++) {
        iso1[i].style.filter = "blur(5px)";
        iso2[i].style.filter = "blur(5px)";
        iso3[i].style.filter = "blur(5px)";
        lmsi1[i].style.filter = "blur(5px)";
        lmsi2[i].style.filter = "blur(5px)";
        lmsi3[i].style.fiter = "blur(5px)";
        gbd1[i].style.filter = "blur(5px)";
        gbd2[i].style.filter = "blur(5px)";
        fol1[i].style.filter = "blur(5px)";
        fol2[i].style.filter = "blur(5px)";
        fol3[i].style.filter = "blur(5px)";
        par1[i].style.filter = "blur(5px)";
        par2[i].style.filter = "blur(5px)";
        par3[i].style.filter = "blur(5px)";
        iasir1[i].style.filter = "blur(0px)";
    }
}
function blurAllbutFH() {
    for (let i=0, max=fh1.length; i < max; i++) {
        iso1[i].style.filter = "blur(5px)";
        iso2[i].style.filter = "blur(5px)";
        iso3[i].style.filter = "blur(5px)";
        lmsi1[i].style.filter = "blur(5px)";
        lmsi2[i].style.filter = "blur(5px)";
        lmsi3[i].style.fiter = "blur(5px)";
        gbd1[i].style.filter = "blur(5px)";
        gbd2[i].style.filter = "blur(5px)";
        fol1[i].style.filter = "blur(5px)";
        fol2[i].style.filter = "blur(5px)";
        fol3[i].style.filter = "blur(5px)";
        par1[i].style.filter = "blur(5px)";
        par2[i].style.filter = "blur(5px)";
        par3[i].style.filter = "blur(5px)";
        iasir1[i].style.filter = "blur(5px)";
        fh1[i].style.filter = "blur(0px)";
    }
}
function unblurAll() {
    for (let w=0, max=tabledata.length; w < max; w++) {
        tabledata[w].style.filter = "blur(0px)";
    }
}