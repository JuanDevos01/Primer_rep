

const persona= { 
    nombre:'Tony',
    aepllido:'Montana',
    edad:45,
    direccion: {
        ciudad: 'Pereira',
        zip:65464654,
        latitud:546465,
        lat:41.3659,
        lng:25.369
    }
    
};

console.table({persona});
//console.log({persona});



const persona2= persona;

persona2.nombre='Peter'; 

console.log({persona2});


//Esto es para que un constante sea un clon de un objeto pero solo los datos
const persona3= {...persona};

