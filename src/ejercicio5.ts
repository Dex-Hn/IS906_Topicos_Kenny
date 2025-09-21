enum DiaSemana {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo
}

const esFinDeSemana = (dia: DiaSemana): boolean => {
    switch (dia) {
        case DiaSemana.Sabado:
        case DiaSemana.Domingo:
            //console.log("Es fin de semana");
            return true;
        default:
            //console.log("No es fin de semana");
            return false;
    }
}

console.log("Es fin de semana? ", esFinDeSemana(DiaSemana.Lunes));
console.log("Es fin de semana? ", esFinDeSemana(DiaSemana.Sabado));