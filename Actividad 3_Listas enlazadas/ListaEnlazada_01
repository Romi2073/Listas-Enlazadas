/*1.- Implemente un procedimiento que inserte un dato de modo similar al insertar, al final de la lista. 
Pero ahora, no se debe permitir insertar datos repetidos, si un dato ya está almacenado entonces la lista 
no cambia.*/

function insertarSinDuplicados(lista, dato) {
  if (!lista.includes(dato)) {
    lista.push(dato);
    console.log("Dato insertado correctamente:", dato);
  } else {
    console.log("El dato ya está en la lista. No se realizaron cambios.");
  }
  return lista;
}

// Ejemplo de uso
let miLista = [1, 2, 3];
console.log("Lista original:", miLista);

miLista = insertarSinDuplicados(miLista, 3); 
miLista = insertarSinDuplicados(miLista, 4); 
miLista = insertarSinDuplicados(miLista, 2); 

console.log("Lista final:", miLista);
