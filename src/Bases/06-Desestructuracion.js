
//Desestructuracion
//Asignacion Desetructurante

const persona={
    nombre: 'Tony',
    edad: 45,
    clave: 'ironMan',
    rango: 'Capitan'
}


//Para evitar esto
/*
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);
*/
//Hacer esto

const {nombre, edad, clave}= persona;

//console.log(nombre);
//console.log(edad);
//console.log(clave);


const pruebaContext=({clave,nombre,edad, rango='capitan'}) => {


//console.log(nombre,edad,rango);

return {
    nombreClave:clave,
    anios: edad,
    lating:{
       lat:14.365,
       lng:-4887 
    }
}
}

const  {nombreClave, anios, lating:{lat, lng}}=pruebaContext(persona);



console.log(nombreClave, anios);
console.log(lat, lng);


