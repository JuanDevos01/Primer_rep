
//Funciones em JS

const saludar1 = function (nombre){
    return `hola, ${nombre}`;

}

const saludar2 =  (nombre) => {
    return `hola, ${nombre}`;

}

const saludar3 =  (nombre) => `hola, ${nombre}`;


const saludar4 =  () => `hola`;



console.log(saludar1(' Bad bunny'));
console.log(saludar2(' Maluma'));
console.log(saludar3(' J balvin'));
console.log(saludar4());


const getUser=() =>  ({
        uid: 'ABC123',
        username: 'PapiRico200'
    })
    const user=getUser();

    console.log(user);


    //tarea
    

    function getUusarioActivo(nombre){
        return {
            uid: 'ABC3223',
            username: nombre
        }
    };

    const usuarioActivo=getUusarioActivo('Fernando');
    console.log(usuarioActivo);

    //1. transformen a una funcion de Flecha
    //2.Tiene que retornar un objeto implicito
    //3.Prueba

    const getUusarioActivo2=(nombre) => ({
        iud: 'NoSeQuePoner123',
        username: `${nombre}`
    })


    const usuarioActivo2=getUusarioActivo2('Cristiano ronaldo');
    console.log(usuarioActivo2);
