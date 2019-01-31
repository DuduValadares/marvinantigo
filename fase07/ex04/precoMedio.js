function precoMedio() {
    arraydeobjetos = []
    arraydeprecos = []
    soma = 0
    for (i=0; i<arguments.length; i++) {
        arraydeobjetos.push(arguments[i])
        arraydeprecos.push(arguments[i].preco)
        }
    var maiorpreco = arraydeprecos.sort().slice(-1,arraydeprecos.length)
    for (i=0; i<arguments.length;i++) {
        soma += arguments[i].preco
        if (arguments[i].preco === maiorpreco[0])
             console.log("O produto mais caro se chama \"" + arguments[i].nome + "\"")
        }
    return soma/arguments.length
}