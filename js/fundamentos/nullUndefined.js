let valor // não iniciada
console.log(valor)

valor = null
console.log(valor) // Aussencia de valor

let produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evitar atributo undefined
console.log(Boolean(produto.preco))
// delete produto.preco

produto.preco = null // sem preço
console.log(Boolean(produto.preco))
console.log(produto)
