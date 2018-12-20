// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaaaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Cleyson',
    idade: 22,
    peso: 62,
    endereco: {
        logradouro: 'Rua Pindamonhagaba',
        numero: 42
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)