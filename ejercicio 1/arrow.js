let x1 = prompt("Primera coordenada en x");
let x2 = prompt("Segunda coordenada en x");
let y1 = prompt("Primera coordenada en y");
let y2 = prompt("Segunda coordenada en y");

if(x1 == null || x2 == ""|| y1   == null || y2 == ""||x2 == null || x1 == ""|| y2   == null || y1 == ""){
    alert("ERROR");
}else{
    let calculate = (num1,num2) => Math.pow(num1-num2, 2); 
    coord1 = calculate(y1,x1);
    coord2 = calculate(y2,x2);
    let res = (num1,num2) => num1-num2;
    total1 = res(coord1,coord2);
    let total = (num1) => Math.sqrt(num1);
    total(total1) > 0 ? alert("sus coordenadas son " + total(total1)):alert("No se puede obtener raiz de un negativo");
    

}