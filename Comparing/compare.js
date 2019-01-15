function init() {
    var strA = "JavaScript" == "JAVASCRIPT";
    var strB = "JavaScript" == "JavaScript";
    var flt = 7.5 === 7.5;
    var intA = 8 !== 8;
    var intB = 24 > 12;
    var intC = 24 < 12;
    var intD = 24 <= 24;

    var str = "String equality test 1: " + strA;
    str += "<br>String equality test 2: " + strB;
    str += "<br>Float equality test: " + flt;
    str += "<br>Integer inequality test: " + intA;
    str += "<br>Greater than test: " + intB;
    str += "<br> Less than test: " + intC;
    str += "<br>Less than or equalt test: " + intD;

    document.getElementById("panel").innerHTML = str;
}
document.addEventListener("DOMContentLoaded", init, false )