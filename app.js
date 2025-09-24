// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []

function agregarAmigo ()
{
	let amigo = document.getElementById("amigo").value;

	if (amigo == "")
		alert('Por favor, inserte un nombre.');
	else		
		amigos.push(amigo)		
		let li = document.createElement("li");
  		li.textContent = amigo;
		document.getElementById("listaAmigos").appendChild(li);

	//limpiar la caja de texto
	document.getElementById("amigo").value="";
		
}

function actualizarLista(){
	/*
	Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML. 
	Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.
	Tareas específicas:
	Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.
	Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.
	Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.
	Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.*/



}

// function mostrarListaAmigos(){
// 	let listaAmigos = document.getElementById("listaAmigos");
// }

function sortearAmigo ()
{
	/*
	Escribe una función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos. 
	Usa Math.random() y Math.floor() para obtener un índice aleatorio.
	Tareas específicas:
	Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.
	Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.
	Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.
	Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.
	*/
	//Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.
	if (amigos.length > 0){

		//indice aleatoreo 
		indiceAleatoreo = Math.floor(Math.random()*amigos.length)
		document.getElementById("resultado").innerHTML = "Amigo Secreto: " + amigos[indiceAleatoreo];
	}else{
		alert("No hay amigos disponibles");
	}
		

}

