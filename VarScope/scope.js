function us(obj) 
{
    var local = "***This is United states Local news***<hr>";
    obj.innerHTML += local; obj.innerHTML += global;
}

function eu(obj) 
{
    var local = "---This is European Local News---<hr>"
    obj.innerHTML += local; obj.innerHTML += global;    
}

var global = "This is Worldwide Global News<hr>";

function init() 
{
    var obj = document.getElementById("panel");
    obj.innerHTML = global;
    us( obj );
    eu( obj );
}
document.addEventListener("DOMContentLoaded", init, false)