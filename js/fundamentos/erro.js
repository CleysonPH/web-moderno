function tratarErroELancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    throw 'mensagem'
}

function imprimirSomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = {nome: 'Cleyson'}
imprimirSomeGritado(obj)