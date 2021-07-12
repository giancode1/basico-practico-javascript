//let array = [10,20,5,15,10,12,8,17];
let array = [1,5,3,2];

//Promedio
function calcularMediaAritmetica(lista){
    let suma = lista.reduce((a,b) => a+b) ;
    let resultado = suma / lista.length;
    console.log('El promedio es: ',resultado);
}

calcularMediaAritmetica(array);

//Mediana
function calcularMediana(lista){
    lista = lista.sort();
    let resultado;
    if(lista.length%2 === 1) { //impar
        resultado = lista[ (Math.round(lista.length/2)) -1];
    }
    else{
        let indice1 = lista.length/2 -1;
        let indice2 = indice1 + 1;
        resultado = (lista[indice1] +lista[indice2])/2;
    }
    console.log('La mediana es: ',resultado);
}
calcularMediana(array)

//Moda
const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
];
function calcularModa(lista){
      const listaCount = {};
      
      lista.map(elemento => {
          if (listaCount[elemento]) {
            listaCount[elemento] += 1;
          } else {
            listaCount[elemento] = 1;
          }
        }
      );
      //convertir el objeto listaCount en array:
      const listaArray = Object.entries(listaCount).sort(
        function (elementoA, elementoB) {
          return elementoA[1] - elementoB[1];
        }
      );
      //nuestra moda es la ultiam posicion de este array
      let resultado = listaArray[listaArray.length - 1];
      console.log('La moda es y se repite',resultado)
}
calcularModa(lista1)
