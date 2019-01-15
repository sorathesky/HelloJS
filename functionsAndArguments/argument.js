
function stringify(argA, argB, argC, argD) {
    var str = argA + " " + argB + " " + argC + " " + argD + "<br>";
    return str;
}

function init() 
{
    document.getElementById("panel").innerHTML = 
        stringify("JavaScript", "In", "Many", "Steps");
    
    document.getElementById("panel").innerHTML+=
        stringify("Written", "By", "A", "Madman");


}
document.addEventListener("DOMContentLoaded", init, false)