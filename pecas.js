const listadepeca = ["pecas de teste, AB, 'peca b"];

console.log('quantidade de caracteres')

if (listadepeca.length <= 10) {
    console.log('as peças pode, ser cadastradas');
}

console.log('quantidade de caracteres')

for (let index = 0; index < listadepeca.length; index++) {
    const pecaatual = listadepeca[index];
    if (pecaatual.length < 3) {
        console.log(pecaatual + "a peça possui nome inferior a 3 caracteres e não pode ser cadastrada")
    } else {
        console.log(pecaatual + ": a peça pode ser cadastrada")
    }

    console.log("pesa da peça")

    const pesodapecaemgramas = 50;

    if (pesodapecaemgramas >= 100) {
        console.log("peso suficiente")
    } else {
        console.log("valor insufiente")
    }

}
