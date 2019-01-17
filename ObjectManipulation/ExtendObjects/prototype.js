function Car(make, model, color) 
{
    this.make = make;
    this.model = model;
    this.color = color;    
}

function init() 
{
    var panel = document.getElementById("panel");
    var myCar = new Car("Ford", " Focus", "Blue");    
}