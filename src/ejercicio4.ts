//Ejercicio 4: Clases y Metodos

class CuentaBancaria {
    constructor(public titular: string, private saldo: number = 0) {}

    depositar(monto: number): void {
        if(monto  > 0) {
            this.saldo = this.saldo + monto;
            console.log(`Depósito exitoso de $${monto}. Nuevo saldo: $${this.saldo}`);
        }
        else {
            console.log('El monto debe ser positivo.');
        }
    }

    retirar(monto: number): void {
        if(monto > 0 && monto <= this.saldo) {
            this.saldo = this.saldo - monto;
            console.log(`Retiro exitoso de $${monto}. Nuevo saldo: $${this.saldo}`);
        }
        else {
            console.log('Monto inválido. El monto debe ser positivo y no exceder el saldo disponible.');
        }
    }

    consultarSaldo(): void {
        console.log(`Saldo actual de ${this.titular}: $${this.saldo}`);
    }
}

const titular1 = new CuentaBancaria('Kenny');
titular1.depositar(10000);
titular1.depositar(10000);
titular1.retirar(5000);
titular1.retirar(4000);
titular1.consultarSaldo();

