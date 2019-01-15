function init() {
    var state = 7 > 5 ? "Greater" : "Smaller";
    var str = "7 is " + state + " than 5.";


    document.getElementById("panel").innerHTML = str;
}
document.addEventListener("DOMContentLoaded", init, false)