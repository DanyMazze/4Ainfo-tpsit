//Creare un nuovo modulo contenente le seguenti funzioni:
// - trovare il primo numero dispari successivo al valore passato;
// - scrivere la tabellina del valore passato (compreso tra 1 e 10);
// - scrivere la successione di Fibonacci per tutti i termini inferiori al valore passato.
//
// - scrivere in un file di testo, una per riga, le tabelline dell'1 al 10.
const {writeFileSync}=require('fs');

function nextOdd(num) {
    num = num + 1;
    if (num % 2 == 0) {
        num = num + 1;
    }
    return num;
}

function multiplicationTable(num) {
    if (num < 1 || num > 10) {
        console.log("error: number is out of range");
        return [];
    } else {
        const list = [];
        for (let i = 0; i < 10; i++) {
            list.push(num * (i + 1));
        }
        return list;
    }
}

function Fibonacci(num) {
    const limit = Number(num);
    const list = [];
    if (limit <= 1){
        return list;
    }
    list.push(1);
    list.push(1);
    while (true) {
        const a = list[list.length - 2];
        const b = list[list.length - 1];
        const next = a + b;
        if (next >= limit){
            break;
        }
        list.push(next);
    }
    return list;
}

function table(){
    const all = [];
    for (let i = 1; i <= 10; i++){
        const t = multiplicationTable(i);
        all.push(t.join(', '));
    }
    return all;
}

b=writeFileSync('./test1.txt',table().join('\n'));
console.log(Fibonacci(50));