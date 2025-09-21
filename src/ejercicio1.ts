// Ejercicio 1: Interfaces, Enums y Union Types

enum EstadoProducto{
    Disponible = 1,
    Agotado = 2,
    Descontinuado = 3
}

type IDProducto = string | number;

interface Producto {
    id: IDProducto,
    nombre: string,
    precio: number,
    estado: EstadoProducto,
    descripcion?: string
}

const mostrarDetallesProducto = (producto: Producto): void => {
    console.log(`ID: ${producto.id}`);
    console.log(`Nombre: ${producto.nombre}`);
    console.log(`Precio: L. ${producto.precio}`);
    console.log(`Estado: ${EstadoProducto[producto.estado]}`);
    if (producto.descripcion) {
        console.log(`Descripción: ${producto.descripcion}`);
    }
    console.log('---------------------------');
}

mostrarDetallesProducto({
    id: 101,
    nombre: "Laptop",
    precio: 1500,
    estado: EstadoProducto.Disponible,
});

const producto1: Producto = {
    id: 1,
    nombre: "Smartphone",
    precio: 10000,
    estado: EstadoProducto.Agotado,
    descripcion: "Último modelo con características avanzadas"
}

const producto2: Producto = {
    id: "A202",
    nombre: "Tablet",
    precio: 8000,
    estado: EstadoProducto.Descontinuado
}

mostrarDetallesProducto(producto1);
mostrarDetallesProducto(producto2);


