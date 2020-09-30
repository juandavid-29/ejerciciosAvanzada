var x1 = prompt("Primera coordenada en x");//(x1)
var x2 = prompt("Segunda coordenada en x");//(y1)
var y1 = prompt("Primera coordenada en y");//(x2)
var y2 = prompt("Segunda coordenada en y");//(y2)

if(x1 == null || x2 == ""|| y1   == null || y2 == ""||x2 == null || x1 == ""|| y2   == null || y1 == ""){
    alert("ERROR");
}else{
    var calculate = (num1,num2) => Math.pow(num1-num2, 2); 
    coord1 = calculate(y1,x1);
    coord2 = calculate(y2,x2);
    var res = (num1,num2) => num1-num2;
    total1 = res(coord1,coord2);
    var total = (num1) => Math.sqrt(num1);
    total(total1) > 0 ? alert("sus coordenadas son " + total(total1)):alert("No se puede obtener raiz de un negativo");
    // en el segundo alert en la validacion es porque a un negativo no se le puede sacar raiz al menos el sistema no es capaz//

}