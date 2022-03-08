/**************************
---------------------------------------------------------------------------------
---------------------------------------------------------------------------------
Deberás hacer un script con una función llamada crearBody_modificarEnlace() 
que estará asociada al botoón "Crear body y cambiar enlace" 
del documento html que aparece en el apartado RA6_d.
 ---------------------------------------------------------------------------------
---------------------------------------------------------------------------------
*****************************************************/

/* -> al pinchar en botón crear body 
•	Se creará una etiqueta <h1> con el texto "Encabezado dinámico" que será la primera etiqueta del body.
•	Se creará a continuación una segunda etiqueta <hr>.
•	Después se creará un <div> que contendrá un párrafo <p>. El párrafo contendrá el siguiente texto "Párrafo creado dinámicamente".
y Cambiar enlace en vez de llevarnos a google nos llevará a la wikipedia
*/
function crearBodymodificarEnlace() {

	// empieza por el elemento padre y busca hacia abajo recurrentemente a lo largo de todo el DOM por ese elemento padre
	var body = document.getElementsByTagName("body")[0];

	/* ->  Aqui va el H1 <----*/
	var h1 = document.createElement("h1"); //creamos el h1 
	var textoh1 = document.createTextNode("Encabezado dinamico"); //creamos la variable del texto con el h1
	h1.appendChild(textoh1); //incluimos al nodo padre h1 el texto
	document.body.appendChild(h1); //document.body es el elemento que contiene el contenido del documento con el nodo del h1
	/*
	-------------------------------------------------------------------------------
	*/
	/* ->  Aqui va el HR <----*/
	var hr = document.createElement("hr");
	document.body.appendChild(hr);
	/*
	-------------------------------------------------------------------------------
	*/
	/* ->  Aqui va el DIV <----*/
	var div = document.createElement("div"); //creamos el div
	document.body.appendChild(div); //le pasamos el contenido a document con el div
	var p = document.createElement("P"); //creamos la variable p con el elemento P del parrafo a crear
	var parrafo = document.createTextNode("Párrafo creado dinámicamente"); // creamos la variable parrafo y le pasamos el texto del nodo hijo
	p.appendChild(parrafo); // le pasamos al elemento p el texto hijo del parrafo
	div.appendChild(p); //añadimos al div el nodo hijo 


	/* ->  Aqui va el footer que se insertará al final del body con appendChild <----*/
	var footer = document.createElement("footer");
	footer.id = "footer";
	footer.innerHTML = "Ejercicio realizado por: Francisco José Cervantes Martin";
	document.body.appendChild(footer);
	/*
	-------------------------------------------------------------------------------
	*/

	/* ->  Aqui va el nodo texto para la frase ir a la wikipedia <----*/
	var wikipedia = document.createTextNode("Ir a la wikipedia"); //creamos el nodo texto con la frase

	var enlace = document.getElementsByTagName("a")[0]; //creamos la variable enlace que contiene el nodo element que tiene la url de google

	enlace.replaceChild(wikipedia, enlace.childNodes[0]); // reemplazamos el nodo que contiene el elemento de google por el de ir a wikipedia

	enlace.setAttribute("href", "https://es.wikipedia.org/"); //con el metodo setAttribubute agregamos el atributo href haciendo referencia a la url de la Wikipedia

	/*
	-------------------------------------------------------------------------------
	*/


	//  metodo prepend , inserta contenido, especificado por el parámetro, al principio de cada elemento en el conjunto de elementos coincidentes
	body.prepend(div);
	body.prepend(hr);
	body.prepend(h1);
