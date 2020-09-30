var x1 = prompt("Primera coordenada en x");//(x1)
var x2 = prompt("Segunda coordenada en x");//(y1)
var y1 = prompt("Primera coordenada en y");//(x2)
var y2 = prompt("Segunda coordenada en y");//(y2)

if(x1 == null || x2 == ""|| y1   == null || y2 == ""||x2 == null || x1 == ""|| y2   == null || y1 == ""){
    alert("ERROR");//console.log()
}else{
    Coordenadas();
}

function Coordenadas(){
    res1 = Math.pow(y1-x1, 2);
    res2 = Math.pow(y2-x2, 2);
    result = res1-res2;
    totally = Math.sqrt(result);
    
    totally > 0 ? alert("sus coordenadas son " + totally):alert("No se puede obtener raiz de un negativo");
    // en el segundo alert en la validacion es porque a un negativo no se le puede sacar raiz al menos el sistema no es capaz//
}