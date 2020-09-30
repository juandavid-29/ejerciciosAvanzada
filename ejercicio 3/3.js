
function captura() 
{
	var nombre = prompt("Introduzca el nombre del padawan:", "nombre");
	var planeta = prompt("Introduzca el planeta del padawan:", "planeta");
	var estatura  = prompt("Introduzca la estatura del padawan:", "estatura");
	var edad = prompt("Introduzca la edad del padawan:", "edad");

 	if (edad < 15) 
 	{
 		alert("actividades del manejo de la fuerza");
 	}
 	if (edad > 15) 
 	{
 		alert("actividades del manejo del sable de luz");
 	}
			

}
