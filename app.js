let amigos = [];

function agregarAmigo() {
  //* Seleccionar el input y obtener el valor
  const nombreAmigo = document.getElementById("amigo");
  const nombre = nombreAmigo.value;

  //* Validar campo vacio
  if (nombre.trim() === "") {
    alert("Por ingrese un nombre válido");
    return;
  }

  //* Valida que el nombre no se repita
  if (amigos.includes(nombre)) {
    alert("Amigo ya ingresado, prueba con otro nombre");
    nombreAmigo = "";
    return;
  }

  //*Agregar el nombre al arreglo
  amigos.push(nombre);

  //*Actualizar la lista
  actualizarLista();

  //* Limpiar campo para que pueda agregar otro amigo
  nombreAmigo.value = "";
}

function actualizarLista(){
    const lista = document.getElementById("listaAmigos");

    //* Limpa la lista para que no se repitan nombre
    lista.innerHTML = "";

    //* Recorre la lista
    for (let nombre of amigos){
        const elementoAmigo = document.createElement('li');
        elementoAmigo.textContent = nombre;
        lista.appendChild(elementoAmigo);
    }
}

function sortearAmigo(){

    //* Valida si hay 2 amigos para poder jugar
    if(amigos.length < 2){
        alert("Agrega al menos 2 amigos para poder jugar");
        return;
    }

    const amigoAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[amigoAleatorio];

    //* Muestra el resultado en pantalla
    const resultado = document.getElementById("resultado");
    resultado.textContent = `El amigo secreto es ${amigoSecreto}, Felicitaciones`

}
