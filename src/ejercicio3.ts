// Ejercicio 3: Arrays

const repetirNombre = (nombre: string, veces: number): string[] => {
    const resultado: string[] = [];
    for (let i = 0; i < veces; i++) {
        resultado.push(nombre);
    }
    return resultado;
}

console.log(repetirNombre("Juan", 2));
console.log('---------------------------');