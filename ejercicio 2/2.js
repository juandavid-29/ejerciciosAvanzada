
function captura() 
{
	var promedio=0, i=0, alta=0, baja=0;
 
		
			for (i=1;i<=7;i++)
			{
				var opcion = prompt("Introduzca el dia:", "nombre del dia");
				
        		alta = prompt("Introduzca la temperatura mas alta del "+ i + " dia: " + opcion, "grados centrigrados");
				baja = prompt("Introduzca la temperatura mas baja del dia: " + opcion, "grados centrigrados");
				promedio=(parseFloat(alta) + parseFloat(baja))/2;
				alert("La temperatura promedio del dia << " + opcion + " >> es: " + promedio);
			}

}
