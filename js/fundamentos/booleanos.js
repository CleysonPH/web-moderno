let isAtivo = false
console.log(isAtivo)
isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(Boolean(isAtivo))
isAtivo = 0
console.log(Boolean(isAtivo))

console.log('Os verdadeiros')
console.log(3, Boolean(3))
console.log(-1, Boolean(-1))
console.log(' ', Boolean(' '))
console.log([], Boolean([]))
console.log({}, Boolean({}))
console.log(Infinity ,Boolean(Infinity))

console.log('Os falsos')
console.log(0, Boolean(0))
console.log('', Boolean(''))
console.log(null, Boolean(null))
console.log(undefined, Boolean(undefined))
console.log(NaN, Boolean(NaN))

console.log('Para finalizar')
console.log(Boolean('' || null || 0 || 'epa'))

let nome = ''
console.log(nome || 'Desconhecido')