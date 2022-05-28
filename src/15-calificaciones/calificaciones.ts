let practica: number;
let problemas: number;
let teorica: number;
let nombre: string;
let promedio: number;

while () {
nombre = (prompt("ingrese un nombre "));

  if (practica > = 0 && practica < = 10
     && problemas > = 0 && problemas < = 10
      && teorica > = 0 && teorica < = 10) {
  
        practica = practica * 0,1;
        problemas = problemas * 0,5;
        teorica = teorica * 0,4;
        
        promedio = practica + problemas + teorica; 

        console.log( "nombre: " + nombre + " promedio: " + promedio);
  }
    else{console.log("error");
  }   
 }
}


