
function captura() 
{
var mensaje;
var opcion = prompt("Introduzca su código:", "Codigo de nave");
 
		if (opcion == null || opcion == "") 
		{
        	mensaje = "Has cancelado o introducido el nombre vacío";
        } 
        else 
        {
            //mensaje = "Hola " + opcion;
        
			if (opcion == "ARQ2555")
				mensaje = "Sara Bel-Sun";

			if (opcion == "ARQ2556")
				mensaje = "Nodin Chavdri";
			
			if (opcion == "ARQ2557")
				mensaje = "Finn";			

        }
        alert(mensaje);
}