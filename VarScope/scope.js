var global = "This is Worldwide Global News<hr>";

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

function init() 
{
    var obj = document.getElementById("panel");
    obj.innerHTML = global;
    us( obj );
    us( obj );
}
document.addEventListener("DOMConetenLoaded", init, false)