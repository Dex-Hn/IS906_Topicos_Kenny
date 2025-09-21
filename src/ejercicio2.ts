// Ejercicio 2: Interfaces y Objetos

interface Usuario {
    nombre: string,
    edad: number,
    email?: string,
}

const imprimirUsuario = (usuario: Usuario): void => {
    console.log('Nombre:', usuario.nombre);
    console.log('Edad:', usuario.edad);
    if (usuario.email) {
        console.log('Email:', usuario.email);
    }
    console.log('---------------------------');
}

const usuario1: Usuario = {
    nombre: "Ana",
    edad: 28,
}

const usuario2: Usuario = {
    nombre: "Luis",
    edad: 35,
    email: "luis@example.com"
}
imprimirUsuario(usuario1);
imprimirUsuario(usuario2);