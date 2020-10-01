
function captura() 
{
	let nombre = prompt("Introduzca el nombre del padawan:", "nombre");
	let planeta = prompt("Introduzca el planeta del padawan:", "planeta");
	let estatura  = prompt("Introduzca la estatura del padawan:", "estatura");
	let edad = prompt("Introduzca la edad del padawan:", "edad");

 	if (edad < 15) 
 	{
 		alert("actividades del manejo de la fuerza");
 	}
 	if (edad > 15) 
 	{
 		alert("actividades del manejo del sable de luz");
 	}
			

}
