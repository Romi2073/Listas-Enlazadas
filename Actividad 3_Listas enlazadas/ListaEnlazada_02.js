/* 2.- Escribir un programa para formar una lista que realice las siguientes tareas:
Crear una Lista Enlazadas de Números Enteros Positivos al azar, la inserción se realiza por el último nodo.
Mostrar todos los Nodos que superen un valor determinado.*/ 


class Nodo {
    constructor(valor) {
      this.valor = valor;
      this.siguiente = null;
    }
  }
  
  
  class ListaEnlazada {
    constructor() {
      this.head = null;
    }
  
  
    insertarAlFinal(valor) {
      const nuevoNodo = new Nodo(valor);
      if (!this.head) {
        this.head = nuevoNodo;
      } else {
        let current = this.head;
        while (current.siguiente) {
          current = current.siguiente;
        }
        current.siguiente = nuevoNodo;
      }
    }
  
   
    mostrarNodosSuperiores(valorLimite) {
      let current = this.head;
      while (current) {
        if (current.valor > valorLimite) {
          console.log(current.valor);
        }
        current = current.siguiente;
      }
    }
  }
  

  function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  
  const lista = new ListaEnlazada();
  for (let i = 0; i < 10; i++) {
    lista.insertarAlFinal(generarNumeroAleatorio(1, 250));
  }
  
  
  const valorLimite = 50;
  console.log("Nodos que superan el valor límite:");
  lista.mostrarNodosSuperiores(valorLimite);
  